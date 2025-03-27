---
layout: page
title: HomeLab
description: homelab project hosted on Intel NUC
img: assets/img/toolchain.png
importance: 1
category: homelab
---


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/architecture.png" title="architecture" class="img-fluid" %}
    </div>
</div>
<div class="caption">
    Homelab Architecture
</div>


## Hardware
<div class="row justify-content-sm-center">
    <div class="col-sm mt-2 mt-md-0"></div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/intel-nuc.jpeg" title="intel-nuc" class="img-fluid rounded" %}
    </div>
    <div class="col-sm mt-2 mt-md-0"></div>
</div>
<div class="caption">
    Intel Nuc
</div>
- [Intel Nuc i5-1240P](https://www.intel.com/content/www/us/en/products/sku/121623/intel-nuc-12-pro-kit-nuc12wski5/specifications.html)
- [Crucial RAM 32GB DDR4 x 2](https://www.crucial.com/memory/ddr4/ct32g4sfd832a)

## Software

#### Hypervisor

- [Proxmox VE](https://www.proxmox.com/en/proxmox-ve)

#### Infrastructure as Code

- [Terraform](https://www.terraform.io/)
- [Ansible](https://www.ansible.com/)
- [Packer](https://www.packer.io/)

#### Applications

- [Home Assistant](https://www.home-assistant.io/) - Open-source home automation platform.
- [Nextcloud](https://nextcloud.com/) - Self-hosted file sharing and collaboration platform.
- [Grafana](https://grafana.com/) - Visualization and monitoring tool.
- [Prometheus](https://prometheus.io/) - Monitoring and alerting toolkit.

#### Networking

- [Zerotier](https://www.zerotier.com/) - VPN for remote access
- [opnSense](https://opnsense.org/) - Firewall and networking solution

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/toolchain.png" title="toolchain" class="img-fluid" %}
    </div>
</div>
<div class="caption">
    DevOps Toolchain
</div>
