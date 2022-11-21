---
layout: "../../layouts/BlogPost.astro"
title: "How to speedrun installing Arch Linux"
pubDate: "14 Jun 2022"
---

[Arch Linux](https://archlinux.org/) is often considered a difficult distribution to install because of it's lack
of a GUI during the installation process.

You have to manually partition the disk, edit configuration files and install
all necessary software to get a system up and running witch includes the base
software package of arch, the Linux kernel and a bootloader of choice.

Even though the [installation guide](https://wiki.archlinux.org/title/installation_guide)
does a fairly good job of walking through the install most people would recommend
you first practicing installing Arch on a virtual machine before doing so on actual
hardware.

But thankfully it isn't necessary to know all of this for the speedrun! This
is because it mostly revolves around typing in commands as fast as possible:

### Step 1: Setting up a local repository on your host machine

This is necessary to get step 3 to work later.
See [How to create a local Arch Linux repository](./how_to_create_a_local_arch_repo).
Make sure to download the packages required for this speedrun: `base linux grub`.
After you've created the local repository start a http server ideally on port 80
which is the default port for http servers.

### Step 2: partitioning the disk

```bash
fdisk /dev/Xda
```
Where X stands for the disk type that you are using. A SATA Disk usually has the name
`sda` and virtio disks `vda`, you can also use the command:
```bash
fdisk -l
```
to list all available disks.
You will now be prompted to enter a command. Enter n to create a new partition.
```bash
Command (m for help): n
```
Then enter p to create a primary partition:
```bash
Select (default p): p
```
Hit enter a few times then w to write.
```bash
Command (m for help): w
```
Time to create the File System:
```bash
mkfs.xfs /dev/Xda1
```
..and mount it to `/mnt`
```bash
mount /dev/Xda1 /mnt
```

### Step 3: configuring pacman

Now we tell pacman to connect to your local http server instead of an external mirror
by overwriting the `/etc/pacman.conf` file:
```bash
echo '[<My Repo>]
Server=http:192.168.0.<YOUR NETWORK ADDRESS>'>/etc/pacman.conf
```
Where `<My Repo>` is the name you gave your repository.

### Step 4: Installing Arch

```bash
pacstrap /mnt base linux grub
```

### Step 5: prepare arch-chroot commands

While pacstrap is installing the system switch to tty2 by pressing `alt + RIGHT ARROW`
and enter this command:
```bash
arch-chroot /mnt bash -c 'grub-install /dev/Xda;grub-mkconfig -o boot/grub/grub.cfg';reboot
```
There is a lot going on in it so let me explain:
1. `arch-chroot` to change the root of your shell to the new machine
2. `/mnt` to specify the mount point to the new machine
3. `bash -c ` to execute a specified command string
4. `grub-install /dev/Xda;` installing the bootloader for the i386-pc platform with bios boot
5. `grub-mkconfig -o boot/grub/grub.cfg` tell grub to auto generate it's configuration file
6. `;reboot` reboot as soon as grub finished installing

Make sure to execute this command **after** the `pacstrap` command finished.

Now the mashine should reboot successfully and the installation is finished!
