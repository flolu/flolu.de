---
title: How to Exchange Bitcoin for Monero with Atomic Swaps
description: A brand new technology called atomic swaps allow for trustless peer to peer exchanges of Bitcoin to Monero. In this post you will learn how to sell your Bitcoin for Monero without a centralized exchange.
url: https://flolu.de/blog/bitcoin-monero-atomic-swaps
date: Nov 10 2021
excerpt: While Monero is facing more and more regulations and thus...
imageUrl: https://storage.googleapis.com/flolu-website/blog/bitcoin-monero-atomic-swaps/xmr_btc_atomic_swaps.png
imageWidth: 1280
imageHeight: 720
previewImageUrl: https://storage.googleapis.com/flolu-website/blog/bitcoin-monero-atomic-swaps/xmr_btc_atomic_swaps_preview.png
previewImageWidth: 320
previewImageHeight: 180
locale: en
minutesToRead: 5
---

While Monero is facing more and more regulations and thus is being removed by many exchanges, the [COMIT](https://comit.network) team is working on cross chain atomic swaps. Their [xmr-btc-swap](https://github.com/comit-network/xmr-btc-swap) project allows for a trustless, peer to peer exchange of Bitcoin for Monero (send BTC, receive XMR). This technology, which implements [atomic swaps](https://arxiv.org/pdf/2101.12332.pdf) is fairly new and thus hasn't been audited yet. So make sure to test it with small amounts only and report any issues to the developers!

## How atomic swaps work

Atomicity is a concept coined in computer science. It refers to multiple processes having only two possible outcomes:

- (1) Either all processes succeed,
- (2) or none of the processes succeeds.

In other words, atomicity can be described as: "All or nothing". For the context of a swap it means, that:

- (1) Either the seller receives your Bitcoin and you receive the sellers Monero,
- (2) or both parties keep their funds.

## Prerequisites

- Monero wallet address
- Access to your Bitcoin wallet
- Basic command line interface (CLI) knowledge

## 1. Install swap

Download and unzip the latest stable `swap` release for your operation system from the official [xmr-btc-swap](https://github.com/comit-network/xmr-btc-swap/releases) repository. In my case that's `swap_0.9.0_Linux_x86_64.tar`.

Inside the archive is a binary called `swap`. You can run `./swap --help` to see a list of all available commands.

## 2. Find a seller

Obviously a swap needs two sides: A buyer (you) and a seller. But finding a seller isn't easy. Especially because not many people are using this technology yet.

Sellers can be found by querying so-called rendezvous points. To do this you need to run the following command:

```bash
./swap list-sellers --rendezvous-point <endpoint>
```

Where `<endpoint>` needs to be replaced. Here are a few websites on which you can find such endpoints:

- <https://unstoppableswap.net>
- <https://xmrswap.me/#rendezvous>

I will also provide you with a list of rendezvous points that were online at the time of writing this blog post:

```
/dnsaddr/rendezvous.coblox.tech/p2p/12D3KooWQUt9DkNZxEn2R5ymJzWj15MpG6mTW84kyd8vDaRZi46o
/dnsaddr/battery.commitcri.me/p2p/12D3KooWCSJUBJ3DkxAdwE1rX5ejBWttexYWsgqGBTStX47rU71G
/dnsaddr/unstoppableswap.net/p2p/12D3KooWLHbHtkK53WoBA82Yht3PCCx6KXYxoJ6QqgXg1rSNtWhR
/dnsaddr/xmrswap.me/p2p/12D3KooWJz36p44uJAB8pL66Zj5o5QnbuU9G5ycSPL9KozeBVo7M
/dns4/eratosthen.es/tcp/7798/p2p/12D3KooWAh7EXXa2ZyegzLGdjvj1W4G3EXrTGrf6trraoT1MEobs
/dns4/rendezvous.xmr.radio/tcp/8888/p2p/12D3KooWN3n2MioS515ek6LoUBNwFKxtG2ribRpFkVwJufSr7ro7
/dns4/swap.sethforprivacy.com/tcp/8888/p2p/12D3KooWCULyZKuV9YEkb6BX8FuwajdvktSzmMg4U5ZX2uYZjHeu
```

The `list-sellers` command will return a table with 5 columns:

- `PRICE` How much 1 XMR costs in BTC (compare [here](https://www.coingecko.com/en/coins/monero/btc))
- `MIN_QUANTITY` Minimum amount of BTC to sell
- `MAX_QUANTITY` Maximum amount of BTC to sell
- `STATUS` Network status of peer
- `ADDRESS` Address of peer

There is also a bash [script](https://github.com/comit-network/xmr-btc-swap/blob/master/docs/cli/discover_and_take.sh) to find the best seller of a specific rendezvous point. It is located in `xmr-btc-swap/docs/cli/discover_and_take.sh`.

_If you want to become a seller yourself, you can read [this](https://github.com/comit-network/xmr-btc-swap/blob/master/docs/asb/README.md) article._

## 3. Swap Bitcoin for Monero

Once you have found an appropriate seller you can start a swap:

```bash
./swap buy-xmr \
	--change-address <btc_refund_address> \
	--receive-address <xmr_address> \
	--seller <seller_address>
```

- `xmr_address` Your Monero wallet address
- `btc_refund_address` Bitcoin refund address (in case the swap fails)
- `seller_address` Address of the seller (from step #2)

A full `buy-xmr` command might look like this:

```bash
./swap buy-xmr \
	--change-address 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa \
	--receive-address 862mLrhM6jQJDXPJ5pQHm9cYQXLESg4zXTFnRcvQeKAdXBJZBkTkajSQW3MXmeacCR9GZ3iNXXsn9jiTz5XNRe8C3fi3RmZ \
	--seller /dnsaddr/xmrswap.me/p2p/12D3KooWJz36p44uJAB8pL66Zj5o5QnbuU9G5ycSPL9KozeBVo7M
```

Running this command can take a while, but after some time you should be prompted with a Bitcoin `deposit_address`. Send the amount you want to swap to that Bitcoin address. Make sure to keep minimum and maximum in mind! Once the funds have been transacted the seller will automatically send the exchanged Monero. In case anything goes wrong you will be refunded.

## Final words

The Monero community is already working on a [GUI implementation](https://ccs.getmonero.org/proposals/binarybaron-unstoppableswap.html) for atomic swaps. Until then we have to rely on the proceess I've outlined in this post. Happy swapping!
