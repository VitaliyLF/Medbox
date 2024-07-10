export const structureSanity = (S) =>
  S.list()
    .id('pagesList')
    .title('Content')
    .showIcons(true)
    .items([
      S.listItem()
        .title('Homepage')
        .schemaType('homepage')
        .child(S.documentTypeList('homepage')),
      S.listItem()
        .title('Header')
        .schemaType('header')
        .child(S.documentTypeList('header')),
      S.listItem()
        .title('Sign Up')
        .schemaType('signup')
        .child(S.documentTypeList('signup')),
    ])
