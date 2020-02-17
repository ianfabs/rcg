import { parse } from "https://deno.land/std/flags/mod.ts";

// Have to slice because deno install command auto-adds `--` to the command
const args = parse(Deno.args.slice(1, Deno.args.length), {
  boolean: ["format", "f", "help", "h"]
});
const COLOR_SCHEMES = ["hex", "hexa", "rgb", "rgba", "hsl", "hsla"];

const HELP_MSG = `
  rcg CLI ~ created by Ian Fabs<ian@fabs.dev>
  version: 1.0.0

  Usage
    $ rcg [PARAMS][color_type] [FLAGS][--help, --format=false]
  Options
    [color_type]       Either hex, hexa, rgb, rgba, hsl, or hsla.
    --format, -f       Format output as CSS-spec color string.
    --help, -h         Display this help page
  Examples
    $ rcg
    1b69af
    $ rcg --format
    #1b69af
`;

const helpRequested: boolean = args._.includes("help") || args.help || args.h;

if (helpRequested) {
  console.log(HELP_MSG);
  Deno.exit(0);
} else {
  let userColorScheme: string = args._[0] ?? "hex";
  if (COLOR_SCHEMES.includes(userColorScheme)) {
    let importPath = `./${userColorScheme}.ts`;
    let fnImport = await import(importPath);
    // Should probably just use default export
    // const fn = (fnImport?.[userColorScheme] ?? fnImport.default);
    const fn = fnImport.default;
    const shouldFormat: boolean = args.format || args.f || false;
    console.log(fn(shouldFormat));
    Deno.exit(0);
  } else {
    console.error(`RCG: Invalid color scheme '${userColorScheme}'`);
    Deno.exit(1);
  }
}
