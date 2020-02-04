export type BufferSize = number;

export interface IBufferCollection {
  // [key: number] here represents the BufferSize
  [key: number]: Uint32Array;
}

// Storing the buffers should conserve memory. Have to do more benchmarks to test if this is true
export let buffers: IBufferCollection = {};

/**
 * This function uses the browsers crypto API to generate a new UInt32 array of bytes
 * @param bytes - the size of the Uint32Array that will be returned
 * @returns {Uint32Array} An array of cryptographically random numbers
 */
export const random = (bytes: BufferSize) => {
  let buf = buffers[bytes];
  if (!buf) {
    buf = new Uint32Array(bytes);
    if (bytes <= 255) buffers[bytes] = buf;
  }
  return crypto.getRandomValues(buf);
}

/**
 * @name special
 * @author Ian Fabs
 * A special function for generating cryptographically secure random numbers for colors.
 * (Note both min and max are inclusive.)
 *
 * @param {number} min - The minimum value a number can be
 * @param {number} max - The maximum value a number can be
 * @param {number} constant - The constant number by which the functions randomly generated value will be multiplied.
 * @returns {number} a cryptographically random number
 * */
export const special = (min: number = 0.13, max: number = 1, constant: number = 0.00000000001): number => {
  const v = (random(1)[0] * constant);
  const [doesMin, doesMax] = [v >= min, v <= max];
  if (doesMin && doesMax) return v;
  else if (!doesMin && doesMax) return v + min;
  else if (doesMin && !doesMax) return v % max;
}

export default special;
