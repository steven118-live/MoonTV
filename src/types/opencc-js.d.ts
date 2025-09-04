declare module 'opencc-js' {
  export interface ConverterOptions {
    from?: string;
    to?: string;
  }

  export function Converter(options?: ConverterOptions): {
    convertSync: (text: string) => string;
    convertPromise: (text: string) => Promise<string>;
  };
}