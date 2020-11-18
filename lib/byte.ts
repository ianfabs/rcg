export const toDegrees = (byte: number) =>
  Number(((byte / 254) * 360).toFixed(2));
export const toPercent = (byte: number) =>
  Number(((byte / 254) * 100).toFixed(2));
export const toRatio = (byte: number) => Number((byte / 254).toFixed(2));
