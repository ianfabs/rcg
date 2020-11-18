[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/ianfabs/rcg)

# RCG
#### *Random Color Generator*

A tiny, and fast color generator. Generates hex, hex-alpha, rgb, rgba, hsl, and hsla colors. Optionally able to generate colors in css-spec valid strings.

# Usage

## Code
```ts
import {hex, rgb, hsl} from "https://deno.land/x/rcg/mod.ts";

hex() // 1b69af
hex(true) // #1b69af

rgb() // [12, 102, 67]
rgb() // rgb(12, 102, 67)

hsl() // [217, 48, 91]
hsl() // hsl(217, 48%, 91%)

// You get the idea...
```

## CLI
RCG offers a simple cli for generating colors too.

### Installation

```sh
$ deno install --allow-read rcg https://deno.land/x/rcg/cli.ts
```
### Usage

```sh
$ rcg
3c5f67
```

```sh
$ rcg hsl -f
hsl(161, 28%, 71%)
```
