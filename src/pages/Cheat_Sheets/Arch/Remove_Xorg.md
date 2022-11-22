---
layout: "../../../layouts/BlogPost.astro"
title: "How to Remove Xorg"
---

Remove Xorg

```bash
for i in `sudo pacman -Qe | grep -o "xorg-\w*"`; do sudo pacman -Rsn $i; done
```
