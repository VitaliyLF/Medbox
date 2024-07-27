export default {
  multipass: true,
  js2svg: {
    indent: 2,
    pretty: true,
  },
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeDoctype: true,
          removeComments: true,
          removeMetadata: true,
        },
      },
    },
    'prefixIds',
    {
      name: 'prefixIds',
      params: {
        prefix: 'customPrefix',
      },
    },
  ],
}
