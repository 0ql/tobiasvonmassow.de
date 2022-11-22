---
layout: "../../../layouts/BlogPost.astro"
title: "Delete and / or Replace lines containing a pattern"
---

Replace line with `<pattern>`
```vim
:g/<pattern>/d
```

Regexp works aswell
```vim
:g/<regexp>/d
```

Delete lines that don't contain `<pattern>`
```vim
:g!/<pattern>/d
```

`g!` is equivalent to `v`
```vim
:v/<pattern>/d
```

### Useful Commands:
Delete all lines except those that contain "error", "warn" or "fail"
```vim
:v/error\|warn\|fail/d
```

Delete all empty lines
```vim
:g/^$/d
:v/./d
```

Delete all lines with spaces, tabs, or empty
```vim
:g/^\s*$/d
:v/\S/d
```
