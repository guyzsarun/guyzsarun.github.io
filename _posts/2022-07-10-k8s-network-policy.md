---
layout: post
title: "Securing your Kubernetes cluster with Network Policy"
author: guyzsarun
categories: [kubernetes]
image: assets/images/k8s-liveness-readiness/kubernetes.png
---

In Kubernetes, to control the traffic flow of your cluster (layer 3 or 4), you can use Network Policy. Network Policy object allows you to specify rules to your pods. To use Network Policy, you need to ensure that your networking solution supports NetworkPolicy objects, such as [Calico](https://www.tigera.io/project-calico/), [weave](https://www.weave.works/), or other third-party networking solutions. If the networking solution you use doesn't support NetworkPolicy, creating a NetworkPolicy object won't have any effect.

**2 Types of Pod Isolation**

1. **ingress** - all **inbound** connections to pods are **allowed** by default. When a pod is isolated using ingress all inbound connections to the pods are blocked except allowed connections.

2. **egress** - all **outbound** connections from pods are **allowed** by default. When a pod is isolated using egress all outbound connections from the pods are blocked except allowed connections.

> For example if `pod A` wants to communicate with `pod B`, both the `egress` policy on the `pod A` and `ingress` policy on the `pod B` need to be allowed.

**To keep it simple**
- ingress = Connection going into the pod.
- egress =  Connection going out of the pod.

**Network Policy Resource**


```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: netpol-db
spec:
  podSelector:
    matchLabels:
      tier: db
  policyTypes:
    - Ingress
  ingress:
    - from:
        - ipBlock:
            cidr: 172.17.0.0/16
        - namespaceSelector:
            matchLabels:
              project: myproject
        - podSelector:
            matchLabels:
              tier: backend
      ports:
        - protocol: TCP
          port: 5432
```

Let's break it down piece by piece.

```yaml
  podSelector:
    matchLabels:
      tier: db
```

- **podSelector** - Select the pods using Labels that the policy will be applied to. In this example, we're selecting pods with the `tier` label set to `db`.

```yaml
  policyTypes:
    - Ingress
```

- **policyTypes** - List of the types of Network Policy rules that this policy applies to. The list can be either `Ingress`, `Egress`, or both. In this example, we're applying `ingress` rules to the pod.


```yaml
  ingress:
    - from:
        - ipBlock:
            cidr: 172.17.0.0/16
        - namespaceSelector:
            matchLabels:
              project: myproject
        - podSelector:
            matchLabels:
              tier: backend
      ports:
        - protocol: TCP
          port: 5432
```

- **ingress** - List of ingress rules to apply to the pods. In this example, we are allowing connections from port `5432` to the pod, from **any** of the 3 sources.
 1. `ipBlock` - Allows connections from the specified IP blocks.
 2. `namespaceSelector` - Allows connections from pods in the specified namespaces.
 3. `podSelector` - Allows connections from pods with the specified labels.


```yaml
 ingress:
  - from:
    - namespaceSelector:
        matchLabels:
          project: myproject
      podSelector:
        matchLabels:
          tier: backend
```

`nameSpeceSelector` and `podSelector` can be used together. In the above example, we're allowing connections from pods with the `tier` label set to `backend` **and** in the `myproject` namespace.


**Egress**

```yaml
  policyTypes:
    - Egress
  egress:
    - to:
        - ipBlock:
            cidr: 10.0.0.0/24
      ports:
        - protocol: TCP
          port: 5978
```

For egress rules simply add `egress` policyTypes and egress block with the same format as ingress.

**Changing default policy**

As we know that the default policy is set to allow all connections, we can change the default behavior in the namespace by applying these yaml.



**Deny all ingress traffic** - `podSelector` will match all the pods in the namespace and deny any ingress traffic

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: default-deny-ingress
spec:
  podSelector: {}
  policyTypes:
  - Ingress
```

**Allow all ingress traffic** - `podSelector` will match all the pods in the namespace, ingress rule is empty so this policy is allowing all incoming connections.


```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-all-ingress
spec:
  podSelector: {}
  ingress:
  - {}
  policyTypes:
  - Ingress
```