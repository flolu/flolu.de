---
title: Use WhatsApp Without Active Phone Connection on Linux
description: An easy way to use WhatsApp on a Linux machine without an active phone connection.
url: https://flolu.de/blog/whatsapp-without-phone
date: Jun 3 2021
excerpt: Ever tried to use WhatsApp without your phone? Currently that's not possible. But there is a way to make it work. This blog post showcases how to run WhatsApp on Linux without an active phone connection.
imageUrl: https://img.youtube.com/vi/72WyCIWO3MQ/maxresdefault.jpg
imageWidth: 1280
imageHeight: 720
previewImageUrl: https://img.youtube.com/vi/72WyCIWO3MQ/maxresdefault.jpg
previewImageWidth: 1280
previewImageHeight: 720
locale: en
minutesToRead: 2
---

Ever tried to use WhatsApp without your phone? Currently that's not possible. But there is a way to make it work. This blog post showcases how to run WhatsApp on Linux without an active phone connection.

Check out the [video tutorial](https://youtu.be/72WyCIWO3MQ) if you don't feel like reading.

## 1. Android Emulator

To do this we will be running a full Android system on our Linux machine. That's possible using an open source software called [Anbox](https://github.com/anbox/anbox).

```bash
sudo snap install --devmode --beta anbox
```

Now you can simply open Anbox. No worries, starting it for the first time will take a while.

## 2. Android Debug Bridge

To install apps on our emulated Android system we need the [Android Debug Bridge](https://developer.android.com/studio/command-line/adb).

```bash
sudo apt install adb
```

## 3. Install WhatsApp

Almost done! Download the latest APK of WhatsApp [here](https://www.whatsapp.com/android).

And install it by running the following command.

```bash
adb install ~/Downloads/WhatsApp.apk
```

## 4. Setup WhatsApp

Simply go through the setup wizard. You will need to verify your phone number by entering a code that's sent to you via SMS.

That's it 🎉

## Limitations

- You can only use WhatsApp on one device. Either computer or phone. At least until WhatsApp releases multi-device support.
- You have to import your contacts into the Android emulator manually.

## Multi Device Support

This tutorial is no longer required since WhatsApp announced [multi device support](https://faq.whatsapp.com/general/download-and-installation/about-multi-device-beta/). You can now use WhatsApp Web without an active phone connection!
