import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { hex, hsl, rgb } from "./mod.ts";

const { test } = Deno;

const assertTrue = (condition: boolean) => assertEquals(condition, true);

test({
  name: "hex value length = 6",
  fn(): void {
    const color = hex();
    console.log(color);
    assertEquals(color.length, 6);
  },
});

test({
  name: "hex with alpha has length of 8",
  fn(): void {
    const color = hex(true);
    console.log(color);
    assertEquals(color.length, 8);
  },
});

test({
  name: "rgb contains three numbers, each between 0 and 255",
  fn(): void {
    const color = rgb();
    console.log(...color);
    assertEquals(color.length, 3);
    assertTrue(color.every((value) => value >= 0 && value <= 255));
  },
});

test({
  name:
    "rgb with alpha contains four numbers; first 3 between 0 and 255, and the last between 0 and 1",
  fn(): void {
    const color = rgb(true);
    console.log(...color);
    assertEquals(color.length, 4);
    assertTrue(
      color.slice(0, color.length - 1).every((value) =>
        value >= 0 && value <= 255
      ),
    );
    assertTrue(color[color.length - 1] >= 0 && color[color.length - 1] <= 255);
  },
});

test({
  name: "hsl contains three numbers",
  fn(): void {
    const color = hsl();
    console.log(...color);
    assertEquals(color.length, 3);
    assertTrue(color[0] >= 0 && color[0] <= 360);
    assertTrue(color[1] >= 0 && color[1] <= 100);
    assertTrue(color[2] >= 0 && color[2] <= 100);
  },
});

test({
  name: "hsl with alpha contains four numbers",
  fn(): void {
    const color = hsl(true);
    console.log(...color);
    assertEquals(color.length, 4);
    assertTrue(color[0] >= 0 && color[0] <= 360);
    assertTrue(color[1] >= 0 && color[1] <= 100);
    assertTrue(color[2] >= 0 && color[2] <= 100);
    assertTrue(color[3]! >= 0 && color[3]! <= 1);
  },
});
