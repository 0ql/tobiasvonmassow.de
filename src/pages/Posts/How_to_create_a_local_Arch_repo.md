---
layout: "../../layouts/BlogPost.astro"
title: "How to create a local Arch Linux repository"
description: "Lorem ipsum dolor sit amet"
pubDate: "6. Jun 2022"
---

An arch package database is a tar file, optionally compressed.
To create a local database file enter:
```bash
repo-add <database name>.db.tar.gz
```
You can download those tar files
without installing or uncompressing them by entering the command:
```bash
sudo pacman -Syw --cachedir path/to/database/directory <packages>
```
- `-S` Synchronize packages
- `-y` Download fresh package databases
- `-w` Download packages only
- `--cachedir` Alternate package cache location

To add all downloaded packages to the database enter:
```bash
repo-add <database name>.db.tar.gz ./*.tar.zst
repo-add <database name>.db.tar.gz ./*.tar.gz
```

### Official Sources:
- [Arch Wiki: Tips and Tricks #Installation and recovery](https://wiki.archlinux.org/title/pacman/Tips_and_tricks#Installation_and_recovery)
- [Arch Wiki: Tips and Tricks #Custom local repository](https://wiki.archlinux.org/title/pacman/Tips_and_tricks#Custom_local_repository)
