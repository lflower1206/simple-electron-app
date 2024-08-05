import { quote } from 'shell-quote';

export default {
  '*.{ts,tsx}': (filenames) => {
    const escapedFileNames = filenames
      .map((filename) => `${quote([filename])}`)
      .join(' ');
    return [
      `prettier --write ${escapedFileNames}`,
      `eslint --fix ${filenames.map((f) => `"${f}"`).join(' ')}`,
      `git add ${escapedFileNames}`,
    ];
  },
};
