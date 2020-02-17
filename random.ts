// import * as log from "https://deno.land/std/log/mod.ts";

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
  // log.debug( "min => ", min );
  // log.debug( "max => ", max );
  // log.debug( "constant => ", constant );
  const [ r ] = random( 1 );
  // log.debug( "random number => ", r );
  const v = ( r * constant );
  // log.debug( "r * constant => ", v );
  const [ doesMin, doesMax ] = [ v >= min, v <= max ];
  // log.debug( "doesMin => ", doesMin );
  // log.debug( "doesMax => ", doesMax );

  let result;
  if (doesMin && doesMax) result = v;
  else if (!doesMin && doesMax) result = v + min;
  else if ( doesMin && !doesMax ) result = v % max;
  // log.debug("Result => ", result);
  return result;
}

export default special;
