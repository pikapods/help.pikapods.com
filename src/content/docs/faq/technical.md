---
title: Email & Network
description: "Questions about sending email from apps, IPv6, proxy headers, data centers and time zones."
sidebar:
  order: 3
---

## Sending emails
Some apps need to send emails to work properly, e.g. for password resets, notifications or newsletters. PikaPods doesn't offer an email sending service, so you need an account with an email provider. Some popular options are [Mailjet](https://www.mailjet.com/), [Mailgun](https://www.mailgun.com/) and [Postmark](https://postmarkapp.com/). If you already have a Google/Gmail account, you could [use](https://support.google.com/a/answer/176600?hl=en#gmail-smtp-option) that too.

Your email provider will give you these SMTP details:

- **Host**: the provider's mail server, e.g. `smtp.mailgun.org`
- **Port**: use a *submission port*, like 465 or 587. To prevent spam from our systems, port 25 is blocked.
- **Username and password**: sometimes called SMTP credentials or API key
- **Sender address**: an address on a domain you have verified with the provider

Where to enter them depends on the app. Some have an email section in their own settings, others use environment variables under *Env Vars* in the pod's settings. The [App Help](/apps) page of your app has the details where special steps are needed.


## IPv6 support
All our servers are reachable via both IPv4 and IPv6.


## Proxy headers

Your pod runs behind a proxy, which handles SSL. The following proxy headers are set and can be used by pods to e.g. log the actual IP of visitors:

- `X-Forwarded-For`
- `X-Forwarded-Proto`
- `X-Forwarded-Host`


## Data centers

Depending on the region you choose, most pods will be deployed in the following data center:

- EU region: Hetzner Falkenstein, Germany and Hetzner Finland
- US region: Evocative BOS1 Data Center, Boston, MA and Cyber WURX, Atlanta, GA

Additional data center partners may be added over time, depending on current market conditions and operational needs.


## Time zones
Our servers all run on standard UTC time zone. If you prefer to use a different time zone, you can often adjust it in the app itself or pass a new time zone via the `TZ` environment variable in your pod's settings under *Env Vars*. See [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List) for a list of supported time zones. When supported, simply put any value from the *TZ Identifier* column as `TZ` env var. E.g. `EST`, `America/Detroit` or `Etc/GMT+5`.
