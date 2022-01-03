---
title: How to Install and Use DaVinci Resolve on Fedora
description: Installing and using DaVinci Resolve on Linux can be quite painful at first. I will show you how to install the software on Fedora and how to fix common problems like installing graphics drivers or MP4 file format import.
url: https://flolu.de/blog/bitcoin-monero-atomic-swaps
date: Nov 11 2021
excerpt: DaVinci Resolve is one of the most powerful video editing software...
imageUrl: https://storage.googleapis.com/flolu-website/blog/davinci-resolve-linux-fedora.png
imageWidth: 1280
imageHeight: 720
previewImageUrl: https://storage.googleapis.com/flolu-website/blog/davinci-resolve-linux-fedora-preview.png
previewImageWidth: 320
previewImageHeight: 180
locale: en
minutesToRead: 5
---

DaVinci Resolve is one of the most powerful video editing software out there. But installing and using it on Linux can be quite painful at first. In this post I'll show you how to install the software on Fedora. I'm also going to show you how to fix common problems like installing graphics drivers and MP4 file format.

## Prerequisites

- NVIDIA graphics card
- Fedora 34 or later

## Install DaVinci Resolve

Go to the official [website](https://www.blackmagicdesign.com/de/products/davinciresolve), download DaVinci Resolve for Linux and extract the archive. Then simply run the `DaVinci_Resolve_XX.X.X_Linux.run` file and go through the installation wizard.

After the installation has finished you will be able to open DaVinci Resolve from your apps. In case it doesn't start the first time you run it, just try again.

## Fix graphics errors

If Resolve starts without problems you can go on to the next section. Otherwise, you most likely need to install GPU drivers.

But don't worry, there is an amazing CLI tool which does all of the hard work for you. It's called [nvidia-auto-installer-for-fedora](https://github.com/t0xic0der/nvidia-auto-installer-for-fedora). To install NVIDIA GPU drivers, run those commands:

```bash
sudo dnf install -y dnf-plugins-core
sudo dnf copr enable t0xic0der/nvidia-auto-installer-for-fedora -y
sudo dnf install -y nvautoinstall
sudo nvautoinstall --rpmadd
sudo nvautoinstall --driver
```

Reboot your computer! Unfortunately, I was once again greeted with another error: "Unsupported GPU Processing Mode". To solve that you need to install `mesa-libGLU` like this:

```bash
sudo dnf install -y mesa-libGLU
```

After that my DaVinci Resolve finally started working flawlessly. If you're still having trouble you can try starting the app from the terminal like this:

```bash
/opt/resolve/bin/resolve
```

Any errors will be logged in the console. Then you can dig into it and try to fix it yourself. Good luck my friend 😉

## Fix audio playback lag

In my case the audio playback had a significant delay by default. There is an easy fix:

```bash
sudo dnf install -y alsa-plugins-pulseaudio
```

## Import MP4 videos

Soon you will realize, that the Linux version of DaVinci Resolve doesn't support the MP4 file format. I know, that's a major bummer. Although not beautiful, there is a workaround: Convert compressed `.mp4` to uncompressed `.mov` with [ffmpeg](https://www.ffmpeg.org). At first you need to install `ffmpeg`:

```bash
sudo dnf -y install ffmpeg
```

Then you can convert a single video like this:

```bash
ffmpeg -i <input.mp4> -c:v mpeg4 -q:v 0 -pix_fmt yuv420p -c:a pcm_s16le <output.mov>
```

You can also convert multiple videos like this:

```bash
for i in *.mp4; do ffmpeg -i "$i" -c:v mpeg4 -q:v 0 -pix_fmt yuv420p -c:a pcm_s16le "${i%.*}.mov"; done
```

## Export videos

After you've rendered a project out of DaVinci Resolve you can compress your resulting `.mov` to an `.mp4` like this:

```bash
ffmpeg -i <input.mov> -c:v libx265 -pix_fmt yuv420p -crf 22 -c:a libopus <output.mp4>
```

I recommend to following render settings:

1. Go to `Render Settings` > `Video`
2. Set `Format` to `QuickTime`
3. Set `Codec` to `MPEG`
4. Set `Type` to `MPEG4 Video`
5. Set `Quality` to `Best`

## Recording videos with OBS

[Open Broadcaster Software](https://obsproject.com) is arguably the most popular video recording software. You can actually configure it to record in a file format that is supported by DaVinci Resolve. That definitely smoothens your video creation workflow. Here is how to do it:

1. Set: `Settings` > `Output` > `Output Mode` to `Advanced`
1. Open: `Recording` tab
1. Change `Type` to `Custom Output (FFmpeg)`
1. Set `Container Format` to `mov`
1. Set `Video Encoder` to `mpeg4`
1. Set `Audio Encoder` to `pcm_s16le`

The resulting `.mov` can be imported into DaVinci Resolve without any further work.

## Uninstall

To uninstall, just search for "Uninstall DaVinci Resolve" in your applications and go through the wizard.

Alternatively you can run the following commands to uninstall the software:

```bash
sudo rm -f -r /opt/resolve
sudo rm /usr/share/applications/com.blackmagicdesign.*.desktop
sudo rm -f -r ~/Documents/BlackmagicDesign
```
