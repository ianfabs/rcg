import mkcb from "../lib/random.ts";

/**
 * Generates a random hex color.
 * @author Ian Fabs
 * @param alpha - if true, color will include alpha value.
 * @returns {string} A random hex color
 */
export const hex = (alpha: boolean = false) => {
    const hmask = 0xFFFFFF;
    const bytes = mkcb(alpha);
    return bytes.map(byte => (hmask & byte).toString(16).padStart(2,'0')).join('');
}

export default hex;
