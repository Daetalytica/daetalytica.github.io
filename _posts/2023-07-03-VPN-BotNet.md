---
title: Unmasking the Hidden Danger of Free VPNs -- A Case Study of SwingVPN
published: true
---

In today's digital age, staying ahead of ever-evolving cybersecurity threats can feel like an ongoing marathon. As we develop innovative security measures, cybercriminals continually adapt their malware, infiltrating even well-established security utilities, such as password managers. Virtual Private Networks (VPNs), seen as a protective shield by many users, are not immune to such threats, as a recent investigation into a popular VPN has revealed. SwingVPN was found to turn unsuspecting users' phones into a malware botnet.

SwingVPN, an Android application with over 5 million downloads and an impressive 4.4 rating on the Play Store, has been under scrutiny for its dubious activities. A security researcher who goes by the online name "[lecromee](https://lecromee.github.io/posts/swing_vpn_ddosing_sites/)" launched an investigation into the app after a friend complained of strange activities on his phone. This seemingly trustworthy VPN was acting behind the scenes, hiding its malicious intent beneath the veneer of a standard VPN app.

The research revealed that the VPN application was silently directing requests to the website of Turkmenistan Airlines approximately every ten seconds, a process that might seem innocuous but is, in fact, a significant problem when replicated across millions of phones simultaneously. This peculiar activity suggested the potential misuse of users' bandwidth and the app's ability to function as a Distributed Denial of Service (DDoS) botnet, powerful enough to crash entire websites.

This discovery is reminiscent of the "botnet" phenomenon where a network of private computers is infected with malicious software and controlled as a group without the owners' knowledge, typically used to send spam or launch DDoS attacks. It appeared that SwingVPN was operating in a similar command-and-control fashion, pulling lists of URLs from control sites, and directly sending requests to them. The targets weren't limited to Turkmenistan Airlines, and with this alarming revelation, it was clear that any website could fall victim to this underhanded tactic.

The disturbing aspect of this saga is the level of sophistication in SwingVPN's operation. Its creators cleverly obfuscated the app's true intent, masquerading as a benign VPN service while running a malicious operation beneath the surface. This clever ploy managed to secure SwingVPN a high-ranking spot in the Play Store, fooling millions of users into believing it was a legitimate service.

What makes this situation even more daunting is that SwingVPN isn't a solitary case in the world of free VPNs. A comprehensive academic study in 2016 that analyzed 283 free Android VPN apps found that a staggering 38% contained malware, 18% had unencrypted tunneling protocols, and 66% failed to forward DNS traffic through the VPN. The study also revealed that users often remained oblivious to the exploitative nature of these apps, with complaints mainly revolving around bugs and poor battery life.

With SwingVPN and its ilk, we're confronted with the harsh reality of free VPN services. Despite appearing to be good deals on the surface, they could be compromising our security, privacy, and even our resources. It's a stark reminder that when a product is free, we often become the product ourselves.

While some might argue that not all VPNs are harmful, and that some provide genuinely useful services, this investigation has made it abundantly clear that choosing a VPN requires more than just glancing at reviews and download numbers. We need to look beneath the surface, understand the underlying mechanisms, and weigh our options carefully.

To sum up, the SwingVPN case serves as a crucial wake-up call for all internet users. Let it be a reminder to steer clear of free VPNs and prioritize our digital security above the lure of saving a few bucks.

###### Further Reading:
* https://www.androidpolice.com/malware-android-vpn-ddos-botnet/?newsletter_popup=1
* https://www.hackread.com/swing-vpn-android-app-ddos-botnet/
