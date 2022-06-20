---
layout: post
title: "Manage vCenter with Terraform"
author: guyzsarun
categories: [vmware, terraform]
image: assets/images/manage-vcenter-with-terraform/terraform.jpeg
featured: true
--- 

This post will cover what is Terraform and how to use it to manage VMware vCenter Server.  
To first understand Terraform we need to understand what is Infrastructure as Code or (IaC). 

## What is Infrastructure as Code?

Infrastructure as Code is a way of managing and provisioning your infrastructure by using Configuration files and Templates. These configuration file can be stored in a code repository like Github or Gitlab which can be shared across teams, organizations, and/or projects for collaboration.

Having your Infrastructure managed by code reduced the risk of misconfiguration and allows you to create a consistent build of your infrastructure every time. Also increasing the speed of your infrastructure deployment by removing any manual intervention.

## What is Terraform?

Terraform an Open Source is a tool by HashiCorp. It helps you to create and manage your infrastructure in a declarative way by using the HashiCorp Configuration Language (HCL) with `.tf` file extension. It is a tool that can be used to create, destroy, and manage your infrastructure. With many integrations with providers like VMware, Google Cloud, AWS, and Azure on its Terraform Registry.

![Terraform Registry](../assets/images/manage-vcenter-with-terraform/terraform-registry.png)

## Managing vCenter with Terraform

We will be creating a file called `main.tf` which will be used to manage the vCenter Server. In the `main.tf` we specify the `vsphere` provider which will enable Terraform to manage the vCenter Server and ESXi hosts. You can use this provider to manage almost everything in the vSPhere environment such as the virtual machines, standard switches, distributed switches, datastores, content libraries, and more.

The `vsphere` provider requires the `user`, `password`, and `vsphere_server` to be set to manage the environment. You can explore more about the provider by visiting the [Terraform Registry](https://registry.terraform.io/)

```terraform
provider "vsphere" {
  user                 = var.vsphere_vcenter_user
  password             = var.vsphere_vcenter_password
  vsphere_server       = var.vsphere_vcenter_ip
  allow_unverified_ssl = true
}
```

Variables can be stored in a separate file called `variables.tf` which will be used to store the variables.

```terraform
variable "vsphere_vcenter_user" {
  description = "vSphere vCenter username"
  default     = "administrator@vsphere.local"
}
variable "vsphere_vcenter_password" {
  default     = "password"
}
variable "vsphere_vcenter_ip" {
  default     = "vcenter1.seakcloud.com"
}
```

---
Useful Links:

[VMware vRealize-Operations](https://docs.vmware.com/en/vRealize-Operations/index.html)  
[VMware Marketplace](https://marketplace.cloud.vmware.com/services/details/vrealize-operations-management-pack-for-snmp-3-2-1-11?slug=true)

