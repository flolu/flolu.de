---
title: Manage and Sync Your Passwords and One-Time-Passwords on Linux
description: How to easily manage and synchronize passwords and one-time-passwords on Linux with the help of Password store
url: https://flolu.de/blog/linux-password-manager-and-sync
date: Oct 25, 2022
excerpt: In this post, you will learn how to manage and sync all your passwords on Linux, completely for free...
locale: en
minutesToRead: 10
---

In this post, you will learn how to manage and sync all your passwords (and one-time-passwords) on Linux, completely for free and without having to trust any third party. This will be done with the help of the standard Unix password manager: [pass](https://www.passwordstore.org).

## Setup

Of course, your passwords won't be stored in plain text. Thus, we need a key to encrypt and decrypt all of your passwords. Pass uses a [GnuPG](https://gnupg.org) key pair to do that. You can install GnuPG like this:

- Debian: `apt install gnupg`
- Fedora: `dnf install gnupg`
- Arch: `pacman -S gnupg`

You can list all your GPG keys with  `gpg --list-keys`. In case you don't already have a key, you can create one with `gpg --full-gen-key`.

Now, you also need to [install](https://www.passwordstore.org/#download) `pass` itself:

- Debian: `apt install pass`
- Fedora: `dnf install pass`
- Arch: `pacman -S pass`

To start managing passwords, you need to initialize an empty password store with:

```
pass init <gpg_key_fingerprint>
```

You should replace `<gpg_key_fingerprint>` with fingerprint of your GPG key, which can be obtained by running `gpg --list-keys` (the long Hex code in the second line). In my case, that is:

```
pass init 3D5211D0E51A0C396AB417032BF2E9B3FB1972D8
```

After initialization, a [Git](https://git-scm.com) repository will be created in your home directory, under `~/.password-store`. Hence, you can run any Git command inside of it. Or, even easier, you can access the Git command of the password store from anywhere with `pass git`.

## Manage passwords

Now you can start managing passwords. To add passwords, run:

- `pass insert <name>` (insert an existing password)
- `pass generate <name>` (generate a new password)
  - `pass generate <name> -n` (to avoid special characters)
  - `pass generate <name> -c` (to copy the generated password to clipboard)
  - `pass generate <name> <length>` (to set the length of the password, default: `25`)
- The `<name>` can also include directories, e.g.: `personal/website.com`
- Use [importers](https://github.com/roddhjav/pass-import) in case you want to migrate to `pass` from another password manager

There are also ways to retrieve your passwords:

- `pass ls` (list all password names)
- `pass show <name>` (show a specific password)
- `pass show -c <name>` (copy a specific password to clipboard)

To change, remove, rename or copy existing passwords use:

- `pass edit <name>` (change a password)
- `pass rm <name>` (delete a password)
- `pass mv <name>` (rename a password)
- `pass copy <name>` (duplicate a password)

All the changes will be reflected within the `~/.password-store` Git repository, which means you can see all of them with `pass git log`.

## User interfaces

Although accessing your passwords from the command line is not that slow, there is an even simpler way. That is by using the [dmenu](http://tools.suckless.org/dmenu), a small menu appearing on the top of your screen. It can be installed like this:

- Debian: `apt install suckless-tools`
- Fedora: `dnf install dmenu`
- Arch: `pacman -S dmenu`

Now we need to install a small script, `passmenu`, to access passwords through `dmenu`. To do that, create a file called `/usr/bin/passmenu`, make it executable by running `sudo chmod +x /usr/bin/passmenu` and add the following content:

```bash
#!/usr/bin/env bash

shopt -s nullglob globstar

prefix=${PASSWORD_STORE_DIR-~/.password-store}
password_files=( "$prefix"/**/*.gpg )
password_files=( "${password_files[@]#"$prefix"/}" )
password_files=( "${password_files[@]%.gpg}" )

password=$(printf '%s\n' "${password_files[@]}" | dmenu "$@")

[[ -n $password ]] || exit

pass show -c "$password" 2>/dev/null
```

Once you have added a few passwords, you can now easily copy them into your clipboard with the `passmenu` command. I strongly recommend setting a hotkey for `passmenu`. For example in [GNOME](https://www.gnome.org) you can add hotkeys inside the Keyboard settings:

- Settings :luc_arrow_big_right: Keyboard :luc_arrow_big_right: Shortcuts :luc_arrow_big_right: Custom :luc_arrow_big_right: Add
- Enter `passmenu` as the "Command"
- And set a "Shortcut" (e.g. `Ctrl` + `Alt` + `P`)



In case `dmenu` isn't focused after starting, and hence you can't select passwords, then you might need to disable Wayland. This can be done by editing the `/etc/gdm/custom.conf` file:

```bash
sudo sed -i -e 's/#WaylandEnable=false.*/WaylandEnable=false/' /etc/gdm/custom.conf
```

There are also some [other options](https://www.passwordstore.org/#other) to access your passwords from a user interface:

- [passff](https://github.com/passff/passff) (Mozilla Firefox add-on)
- [BrowserPass](https://github.com/browserpass/browserpass-extension) (Chrome extension)
- [Android Password Store](https://github.com/android-password-store/Android-Password-Store) (Android app)
- [Pass for iOS](https://github.com/mssun/passforios) (iOS app)

Of course, all of those options require access to your GPG key. So you might want to think twice if you want to store your GPG on your phone!

## One-time passwords

With the [pass-otp](https://github.com/tadfisher/pass-otp) extension, it is also possible to manage your one-time-passwords with `pass`. It can be installed easily:

- Debian: `apt install pass-extension-otp`
- Fedora: `dnf install pass-otp`
- Arch: `pacman -S pass-otp

Now you can also add one-time-passwords with `pass otp insert <name>`. It will ask you to enter a URI. This URI looks something like this, with the secret as a query parameter:

```
otpauth://totp/service?secret=<secret>
```

This URI can be obtained from the QR code, that you are supposed to scan with your phone. Just make a screenshot of the QR code and run `zbarimg qr-code-screenshot.png` on it. This requires you to have [ZBar](https://zbar.sourceforge.net/) installed:

- Debian: `apt install zbar-tools`
- Fedora: `dnf install zbar`
- Arch: `pacman -S zbar`

The command will return something like: `QR-Code:otpauth://totp/service?secret=<secret>`. You need to omit the beginning (`QR-Code:`), when inserting it into `pass`!

To get the one-time-password, simply run: `pass otp <name>`.

You can also use `pass otp` with the previously discussed `dmenu` for quick access. In order to do that we need to make a small adjustment to the `/usr/bin/passmenu` script. The modified script looks like this:

```bash
#!/usr/bin/env bash

shopt -s nullglob globstar

prefix=${PASSWORD_STORE_DIR-~/.password-store}
password_files=( "$prefix"/**/*.gpg )
password_files=( "${password_files[@]#"$prefix"/}" )
password_files=( "${password_files[@]%.gpg}" )

password=$(printf '%s\n' "${password_files[@]}" | dmenu "$@")

[[ -n $password ]] || exit

pass_cmd=show
if pass show "$password" | grep -q '^otpauth://'; then
	pass_cmd=otp
fi

pass $pass_cmd -c "$password" 2>/dev/null
```

It will now dynamically run `pass show` or `pass otp` based on the type of the selected password.

## Synchronization

If you are working on multiple devices, you might be interested in the synchronization of your passwords between them. There are essentially three viable options for that.

### 1. Using storage mediums

The simplest option would be to use some kind of storage medium, like a USB stick. You don't necessarily need to use an encrypted storage medium to transfer your passwords, since they are encrypted at rest automatically. But you should be aware, that anyone with access to the storage medium can see the list of all your password names, which might not be wanted. Hence, encrypting your disk would still be strongly recommended! To do that you would have to manually copy the `~/.password-store` directory to your other devices.

### 2. With a file syncing service

Of course, you could also use some kind of file synchronization service for that. But again, you should be aware that the names of your passwords are in plain text. Only the passwords itself are encrypted! To do that you would have to add the `~/.password-store` directory to your syncing service.

### 3. Through a Git repository

Since the password store essentially is nothing but a Git repository, my preferred option for syncing is to use a Git remote. For example, you could create a private [GitHub](https://github.com/) repository and upload your passwords to its remote:

```
pass git remote add origin https://github.com/<user>/<repository>.git
pass git push -u origin master
```

You can then download and sync your passwords onto your other device with the `git clone` and `git pull` commands.

All passwords are encrypted and hence cannot be read by anyone, who doesn't have the GPG key. But all the password names are still visible (because each password is stored inside a single file: `<name>.gpg`). That's why I'm using another layer of encryption to hide the file names. That's possible with the help of [git-remote-gcrypt](https://github.com/spwhitton/git-remote-gcrypt). It encrypts entire Git repository remotes. I've written a [blog post](https://flolu.de/blog/encrypted-git-repository) on how to do that. Essentially, you just have to install `git-remote-crypt` and modify the remote URL.

## Synchronization with phone

Personally, I have decided not to synchronize my password with my phone, because I don't want to store my GPG key on my phone. I'm simply sending passwords to my phone on demand using an encrypted messenger like [Session](https://getsession.org/). Most phone apps require you to enter your password only once anyway. But if you still want to do it, you could use [Android Password Store](https://github.com/android-password-store/Android-Password-Store) or [Pass for iOS](https://github.com/mssun/passforios).

## Final words

Once you have set up `pass` with `dmenu` and added all your passwords, it's truly amazing. You don't have to trust any third party with your passwords, and you can easily sync it with Git.
