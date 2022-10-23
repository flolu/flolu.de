---
title: How to install Terraform on Fedora 34
description: To install Terraform on Fedora 34 or later, you need to add the HashiCorp Linux repository. Then you can simply install Terraform with Dandified YUM (dnf).
url: https://flolu.de/blog/install-terraform-fedora-34
date: Oct 26, 2021
excerpt: After you've added the repository, you can simply install Terraform with...
imageUrl: /blog/terraform-fedora.webp
imageWidth: 1280
imageHeight: 720
previewImageUrl: /blog/terraform-fedora-preview.webp
previewImageWidth: 320
previewImageHeight: 180
locale: en
minutesToRead: 1
---

## Install Terraform

Install the [DNF config-manager Plugin](https://dnf-plugins-core.readthedocs.io/en/latest/config_manager.html#dnf-config-manager-plugin) to manage your repositories.

```bash
sudo dnf install -y dnf-plugins-core
```

And add the official [HashiCorp](https://www.hashicorp.com/) Linux repository.

```bash
sudo dnf config-manager --add-repo https://rpm.releases.hashicorp.com/fedora/hashicorp.repo
```

After you've added the repository, you can simply install Terraform like this:

```bash
sudo dnf -y install terraform
```

Verify your installation.

```bash
terraform -version

Terraform v1.0.9
on linux_amd64
```

Visit the [official documentation](https://learn.hashicorp.com/tutorials/terraform/install-cli) for more details.

## Uninstall Terraform

```bash
sudo dnf -y remove terraform
```
