export namespace HEX {
    export type Type = "hex";
    export type Format = string;
}

export namespace RGB {
    export type Type = "rgb";
    export type Format = [number, number, number, number?];
}

export namespace HSL {
    export type Type = "hsl";
    export type Format = [number, string, string, number?];
}