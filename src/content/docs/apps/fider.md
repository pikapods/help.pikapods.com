---
title: Fider
description: "Tips and fixes for running Fider on PikaPods: sending emails and one-click sign-in providers."
---

Fider is an open-source feedback platform where users can post, vote on, and discuss ideas and suggestions. Running [Fider on PikaPods](https://www.pikapods.com/apps/fider)? These notes cover a few things worth knowing. Full documentation is in the [official Fider docs](https://docs.fider.io/).

## Sending emails
Fider sends emails via [Mailjet](https://www.mailjet.com/). Create a Mailjet API key and add it under _Env Vars_ in your pod's settings. See our [email FAQ](/faq/technical#sending-emails) for more on email providers.

## One-click sign-in providers
See [here](https://fider.io/docs/configuring-oauth) for setting up supported providers.
