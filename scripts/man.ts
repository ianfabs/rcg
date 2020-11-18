const {version, name} = JSON.parse(await Deno.readTextFile("package.json"));

const HELP_MSG = `
  ${name} v${version} ~ Cryptographically-secure random colors!


  Author
    Ian Fabs <ian@fabs.dev>
  Usage
    $ rcg [TYPE] [FLAGS][--help, --format, --alpha]
  Options
    [TYPE]             Either hex, rgb, or hsl; (default: hex)
    --format, -f       Format output as CSS-spec color string.
    --alpha, -a        Add a random alpha-value to the color.
    --help, -h         Display this help page.
  Examples
    $ rcg
    1b69af
    $ rcg --format
    #1b69af
    $ rcg -fa
    #1b69af91
  
`;

await Deno.writeTextFile("./MANPAGE", HELP_MSG);

Deno.exit(0);