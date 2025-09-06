import { Converter } from 'opencc-js';

type ScriptType = 'cn' | 'tw' | 'mixed';

export const detectScript = (text: string): ScriptType => {
  const hasSimplified = /[\u4e00-\u9fa5]/.test(text); // Â²Åé±`¥Î°Ï
  const hasTraditional = /[\u3400-\u4DBF\uF900-\uFAFF]/.test(text); // ÁcÅé±`¥Î°Ï
  if (hasSimplified && hasTraditional) return 'mixed';
  if (hasTraditional) return 'tw';
  return 'cn';
};

export const convertText = (text: string): string => {
  const script = detectScript(text);
  const converter = Converter({
    from: script === 'tw' ? 'tw' : 'cn',
    to: script === 'tw' ? 'cn' : 'tw',
  });
  return converter.convertSync(text);
};
