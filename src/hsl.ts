import mkcb, { ColorBytes } from "../lib/random.ts";
import { toDegrees, toPercent, toRatio } from "../lib/byte.ts";
import { ColorGenerator } from "../lib/types.ts";

export type HSL = ColorBytes;
/**
 * Generate a random hsl color.
 * @param alpha - if true, this function will return a CSS-spec color string (i.e. "hsl(275, 87%, 31%)")
 * @returns An array of hsl color values
 */
export const hsl: ColorGenerator<HSL> = (alpha = false) => {
  const bytes = mkcb(alpha);
  bytes[0] = toDegrees(bytes[0]);
  bytes[1] = toPercent(bytes[1]);
  bytes[2] = toPercent(bytes[2]);
  bytes[3] &&= toRatio(bytes[3]);
  return bytes;
};
export default hsl;
