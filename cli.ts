import { parse, ArgParsingOptions  } from "https://deno.land/std/flags/mod.ts";
import "https://deno.land/x/eaisercolors/mod.ts"

const args = parse(Deno.args.slice(1, Deno.args.length));

const print = (text: string) => {
  let encoder = new TextEncoder();
  let textBuffer = new Deno.Buffer(encoder.encode(text));
  Deno.copy(Deno.stdout, textBuffer)
}

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
const COLOR_SCHEME_TYPES = ["hex", "hexa", "rgb", "rgba", "hsl", "hsla"];

if (args._.includes("help") || args.help) {
  print(HELP_MSG + "\n");
} else {
  let userColorScheme: string;
  let color: any;

  if (args._[0] != "help") userColorScheme = args._[0];
  else userColorScheme = args._[1];

  if (userColorScheme == "" || userColorScheme == undefined) {
    color = await import("./hex.ts");
  } else if (COLOR_SCHEME_TYPES.includes(userColorScheme)) {
    color = await import(`./${userColorScheme}.ts`);
  } else {
    print("Error:".red() + ` ${userColorScheme} is not a valid color scheme. \n`)
  }
  const result = color?.default(args.format ?? args.f);
  print(result?.join?.(", ") ?? result);
}
Deno.stdin.close();
