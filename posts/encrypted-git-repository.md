---
title: How to Encrypt Git Repositories
description: An easy way to encrypt Git repository remotes with GnuPG on Linux
url: https://flolu.de/blog/encrypted-git-repository
date: Oct 23, 2022
excerpt: In this post you will learn how to easily encrypt Git remote repositories with GnuPG. You could use this to...
locale: en
minutesToRead: 3
---

In this post you will learn how to easily encrypt [Git](https://git-scm.com) remote repositories with [GnuPG](https://gnupg.org). You could use this to store and synchronize sensitive code on remotes, that you don't trust. For example, I'm using an encrypted Git repository to sync my passwords across multiple devices.

## Setup

To do this, we need the open-source [git-remote-gcrypt](https://spwhitton.name/tech/code/git-remote-gcrypt) helper by [Sean Whitton](https://spwhitton.name). You can either install it from the [source code](https://github.com/spwhitton/git-remote-gcrypt)'s `install.sh` script or via your package manager:

- Debian: `apt-get install git-remote-gcrypt`
- Fedora: `dnf install git-remote-gcrypt`
- Arch: `pacman -S git-remote-gcrypt`

You will also need a GPG key for encryption. You can install GPG like this:

- Debian: `apt install gnupg`
- Fedora: `dnf install gnupg`
- Arch: `pacman -S gnupg`

You can list all your GPG keys with `gpg --list-keys`. In case you don't already have a key, you can create one with `gpg --full-gen-key`.

## Configuration

To create a new Git repository, run: `git init`. But you can also do this on an existing repository. Now we need to add the remote you want to encrypt like this:

```bash
git remote add <remote_name> gcrypt::<remote_url>
```

For example:

```bash
git remote add origin gcrypt::https://github.com/flolu/encrypted
```

Now you need to configure which GPG key should be used for encryption. To do this you first need to get the fingerprint of this key. So run `gpg --list-keys` and copy the fingerprint of the desired key (the long Hex code in the second line). Then you can configure your repository to use this key like this:

```bash
git config remote.<remote_name>.gcrypt-participants "<key_fingerprint>"
git config remote.<remote_name>.gcrypt-signingkey "<key_fingerprint>"
```

For example:

```bash
git config remote.origin.gcrypt-participants "3D5211D0E51A0C396AB417032BF2E9B3FB1972D8"
git config remote.origin.gcrypt-signingkey "3D5211D0E51A0C396AB417032BF2E9B3FB1972D8"
```

## Push

Now you can make commits as usual with `git commit`. To upload the changes to the encrypted remote simply run:

```bash
git push <remote_name> <branch>
```

For example:

```bash
git push origin master
```

And that's it! Your remote files will be encrypted now. You can take a look at an encrypted GitHub repository [here](https://github.com/flolu/encrypted).

## Clone

To clone an encrypted Git repository, you need to run:

```bash
git clone gcrypt::<remote_url>
```

This will only work if you have the GPG, which was used for encryption, on your computer!
