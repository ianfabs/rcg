import { parse } from "https://deno.land/std/flags/mod.ts";
import cfmt from "./lib/format.ts";

// Have to slice because deno install command auto-adds `--` to the command
const args = parse(Deno.args.slice(1, Deno.args.length), {
  boolean: ["format", "f", "help", "h", "alpha", "a"],
});
const COLOR_SCHEMES = ["hex", "rgb", "hsl"];

const HELP_MSG = await Deno.readTextFile("./MANPAGE");

const helpRequested: boolean = args._.includes("help") || args.help || args.h;

if (helpRequested) {
  console.log(HELP_MSG);
  Deno.exit(0);
} else {
  const userColorScheme: string = args._[0] as string ?? "hex";
  if (COLOR_SCHEMES.includes(userColorScheme)) {
    const importPath = `./src/${userColorScheme}.ts`;
    const fnImport = await import(importPath);
    const fn = fnImport.default;
    const alpha: boolean = args.alpha || args.a;
    const shouldFormat: boolean = args.format || args.f || false;
    const color = fn(alpha);
    console.log(shouldFormat ? cfmt(color, userColorScheme) : color);
    Deno.exit(0);
  } else {
    console.error(`RCG: Invalid color scheme '${userColorScheme}'`);
    Deno.exit(1);
  }
}
