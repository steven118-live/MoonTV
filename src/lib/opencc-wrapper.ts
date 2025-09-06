import * as OpenCCJS from 'opencc-js';

type Converter = {
  convertPromise: (text: string) => Promise<string>;
};

let s2tConverter: Converter | null = null;
let t2sConverter: Converter | null = null;

export async function convertToTraditional(text: string): Promise<string> {
  if (!s2tConverter) {
    s2tConverter = await OpenCCJS.Converter({ from: 's2t.json' });
  }
  return s2tConverter.convertPromise(text);
}

export async function convertToSimplified(text: string): Promise<string> {
  if (!t2sConverter) {
    t2sConverter = await OpenCCJS.Converter({ from: 't2s.json' });
  }
  return t2sConverter.convertPromise(text);
}
