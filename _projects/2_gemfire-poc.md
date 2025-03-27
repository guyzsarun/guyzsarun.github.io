---
layout: page
title: VMware Tanzu Gemfire POC
description: a sample project to demonstrate the use of VMware Tanzu Gemfire on k8s
img: assets/img/gemfire.webp
importance: 2
category: work
---


## Overview

This project is a proof of concept to demonstrate the use of VMware Tanzu Gemfire on k8s. Tanzu Gemfire is a distributed in-memory data grid that provides high performance and scalability for data-intensive applications. It is built on Apache Geode, which is a distributed data management platform that provides real-time, consistent access to data-intensive applications throughout widely distributed cloud architectures.

Project Repository on [Github](https://github.com/guyzsarun/gemfire-spring-poc)

## Components
- [VMware Tanzu Gemfire](https://www.vmware.com/products/app-platform/tanzu-gemfire)
- Springboot backend
- [Concourse CI](https://concourse-ci.org/)

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/diagram-gemfire.svg" title="gemfire-overview" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Tanzu Gemfire architecture
</div>