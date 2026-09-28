---
layout: "../../../layouts/BlogPost.astro"
title: "Pacman"
description: "Pacman cheat sheet: update Arch Linux, list explicitly installed packages and remove unused orphan packages."
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
