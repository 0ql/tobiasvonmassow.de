---
layout: "../../../layouts/BlogPost.astro"
title: "Pacman"
---

Update System
```
pacman -Syu
```

List explicitly installed packages
```
pacman -Qe
```

Remove all unused packages
```
pacman -R $(pacman -Qtdq)
```
