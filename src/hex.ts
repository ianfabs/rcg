import mkcb from "../lib/random.ts";
import { ColorGenerator } from "../lib/types.ts";

/**
 * Used to bitmask bytes as hex values
 */
const hmask = 0xFFFFFF;

export type HEX = string;

/**
 * Generate a random hex color.
 * @author Ian Fabs
 * @param {boolean} alpha - if true, color will include alpha value.
 * @returns {string} A random hex color
 */
export const hex: ColorGenerator<HEX> = (alpha = false): HEX => {
  const bytes = mkcb(alpha);
  return bytes.map((byte) => (hmask & byte!).toString(16).padStart(2, "0"))
    .join("");
};
export default hex;
