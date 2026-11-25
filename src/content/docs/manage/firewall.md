---
title: Firewall
description: Restrict access to your pod using an IP allowlist.
sidebar:
  order: 6
---

The Firewall feature allows you to restrict access to your pod by creating an allowlist of IP addresses or CIDR ranges. This effectively blocks all connections from IPs not listed in the *Firewall* tab before they reach your pod.

## Enabling the Firewall

1. Open *⚙️ Edit Pod Settings* and then the *Firewall* tab.
2. Click **Add My IP** to add your current external IP address, or enter individual IP addresses or CIDR ranges (e.g. `192.168.1.0/24` or `2001:db8::/32`).
3. From now on, only the listed IPs can connect.

## Allowing Cloudflare IPs

If your pod uses a [custom domain](/manage/custom-domains) proxied through Cloudflare, you can enable **Also allow Cloudflare IPs** in the *Firewall* tab. This appends Cloudflare's edge IP ranges to your allowlist so traffic proxied through Cloudflare can still reach your pod while direct access from other IPs is blocked. At least one other IP or range must be in the allowlist for this option to take effect.

## Access Issues

:::caution
External IPs can change. If you have access issues, open the *Firewall* tab and use **Add My IP** to make sure your current IP address is listed.
:::

Our servers support both IPv6 and IPv4. Usually, IPv6 will be preferred by modern networks. If you experience access issues:

1. Confirm you have added both your external IPv4 and IPv6 addresses.
2. Ensure you are only using IPv4 if you only added an IPv4 address.

:::note
Our control panel will always be allowed to run automated health checks on your pod, regardless of firewall settings.
:::

## Support Access

Our support team is not able to disable or bypass the firewall feature. If you need support to inspect your pod, you must disable the feature first.

## Disabling the Firewall

To fully disable the firewall feature, remove all listed IPs in the Firewall tab.
