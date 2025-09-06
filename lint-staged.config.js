module.exports = {
  '**/*.{js,jsx,ts,tsx}': (files) =>
    files
      .filter((f) => !f.startsWith('public/'))
      .map((f) => [`eslint --max-warnings=0 ${f}`, `prettier -w ${f}`])
      .flat(),
  '**/*.{json,css,scss,md,webmanifest}': 'prettier -w',
};
