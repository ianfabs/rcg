import {
  assertEquals,
  runTests,
  test
} from "https://deno.land/std/testing/mod.ts";
import { hex, hexa, rgb, rgba, hsl, hsla } from "./mod.ts";

const assertTrue = (condition: boolean) => assertEquals(condition, true);

test({
  name: "hex value length = 6",
  fn(): void {
    const color = <string>hex();
    console.log(color);
    assertEquals(color.length, 6);
  }
})

test({
  name: "hexa value length = 8",
  fn(): void {
    const color = <string>hexa();
    console.log(color);
    assertEquals(color.length, 8);
  }
})

test({
  name: "rgb contains three numbers, each between 0 and 255",
  fn(): void {
    const color = rgb();
    console.log(...color)
    assertEquals(color.length, 3);
    assertTrue(color[0] >= 0 && color[0] <= 255);
    assertTrue(color[1] >= 0 && color[1] <= 255);
    assertTrue(color[2] >= 0 && color[2] <= 255);
  }
})

test({
  name: "rgba contains four numbers, each between 0 and 255",
  fn(): void {
    const color = rgba();
    console.log(...color)
    assertEquals(color.length, 4);
    assertTrue(color[0] >= 0 && color[0] <= 255);
    assertTrue(color[1] >= 0 && color[1] <= 255);
    assertTrue(color[2] >= 0 && color[2] <= 255);
    assertTrue(color[3] >= 0 && color[3] <= 1);
  }
})

test({
  name: "hsl contains three numbers",
  fn(): void {
    const color = hsl();
    console.log(...color)
    assertEquals(color.length, 3);
    assertTrue(color[0] >= 0 && color[0] <= 360);
    assertTrue(color[1] >= 0 && color[1] <= 100);
    assertTrue(color[2] >= 0 && color[2] <= 100);
  }
})

test({
  name: "hsla contains four numbers",
  fn(): void {
    const color = hsla();
    console.log(...color)
    assertEquals(color.length, 4);
    assertTrue(color[0] >= 0 && color[0] <= 360);
    assertTrue(color[1] >= 0 && color[1] <= 100);
    assertTrue(color[2] >= 0 && color[2] <= 100);
    assertTrue(color[3] >= 0 && color[3] <= 1);
  }
})

runTests();
