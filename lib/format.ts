export type hex = string;
export type rgb = [number, number, number, number?];
export type hsl = [number, string, string, number?];
export type Color = hex | rgb | hsl;

const { isArray } = Array;

/**
 * Format colors for use in CSS
 * @param color The value of the color
 * @param type The type the color should be formatted to
 * @returns A CSS color
 */
export const cfmt = (color: Color, type: "hex" | "rgb" | "hsl"): string => isArray(color) ? `${type}${color.length == 4 && 'a'}(${color.join()})` : `#${color}`;