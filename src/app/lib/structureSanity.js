export const structureSanity = (S) =>
  S.list()
    .id('pagesList')
    .title('Pages')
    .showIcons(false)
    .items([
      S.listItem().title('Homepage').schemaType('homepage').child(S.documentTypeList('homepage'))
      // S.listItem().title('About').schemaType('about').child(S.documentTypeList('about'))
    ])
