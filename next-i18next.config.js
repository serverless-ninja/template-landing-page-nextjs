/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    serializeConfig: false,
    saveMissing: true,
    missingKeyHandler: (ng, ns, key) => {
      console.warn(`Warning Missing Key: ${key}`);
      return key;
    },
  },
};
