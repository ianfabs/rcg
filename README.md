[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/ianfabs/rcg) ![Node.js Package](https://github.com/ianfabs/rcg/workflows/Node.js%20Package/badge.svg?event=release)

# CS-RCG
#### *Cryptographically-Secure Random Color Generator*

A tiny, and fast random color generator. Generates hex, rgb, and hsl colors (Optionally with alpha-values).

# Usage

## Code
```ts
import {hex, rgb, hsl} from "https://deno.land/x/cs-rcg/mod.ts";

hex() // 1b69af
hex(true) // 1b69af91

rgb() // [12, 102, 67]
rgb(true) // [12, 102, 67, 0.32]

hsl() // [217, 48.12, 91.55]
hsl(true) // [217, 48.12%, 91.55%, 0.78]

// You get the idea...
```

## CLI
RCG offers a simple cli for generating colors too.

### Installation

```sh
$ deno install --allow-read --name rcg https://deno.land/x/cs-rcg/cli.ts
```

### Usage

```sh
$ rcg
3c5f67
```

```sh
$ rcg hsl -fa
hsl(161, 28%, 71%, 0.53)
```
