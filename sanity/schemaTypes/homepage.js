export default {
  name: 'homepage',
  type: 'document',
  title: 'Homepage',
  fields: [
    {
      name: 'header',
      type: 'object',
      title: 'Header',
      fields: [
        {
          name: 'headerLogo',
          type: 'image',
          title: 'Header logo Image'
        },
        {
          name: 'headerLinks',
          type: 'array',
          title: 'Header navigation links',
          of: [
            {
              type: 'document',
              fields: [
                {
                  name: 'headerLinksText',
                  type: 'string',
                  title: 'Header link text',
                  description: 'Enter link text'
                }
              ]
            }
          ]
        },
        {
          name: 'headerBtnText',
          type: 'string',
          title: 'Header Button text'
        },
        {
          name: 'headerMobileBtnText',
          type: 'string',
          title: 'Header mobile Button text'
        }
      ]
    },
    {
      name: 'hero',
      type: 'object',
      title: 'Hero section',
      fields: [
        {
          name: 'heroTitle',
          type: 'string',
          title: 'Hero main Title'
        },
        {
          name: 'heroSlug',
          type: 'slug',
          title: 'Slug of homepage',
          options: {
            source: 'heroTitle'
          }
        },
        {
          name: 'heroSubtitle',
          type: 'string',
          title: 'Hero subTitle'
        },
        {
          name: 'heroText',
          type: 'array',
          title: 'Hero paragraph',
          of: [
            {
              type: 'block'
            }
          ]
        },
        {
          name: 'heroBtnText',
          type: 'string',
          title: 'Hero button text',
          options: {
            list: [
              { title: 'Get started', value: 'Get started' },
              { title: 'Check My Coverage', value: 'Check My Coverage' }
            ]
          }
        },
        {
          name: 'heroWrapperImage',
          type: 'document',
          title: 'Hero image',
          fields: [
            {
              name: 'heroImage',
              type: 'image',
              title: 'image'
            },
            {
              name: 'herosAltImageText',
              type: 'string',
              title: 'Descriptive label for screen readers & SEO',
              description: '⚡️ Optional but highly encouraged to make the content more accessible'
            }
          ]
        }
      ]
    },
    {
      name: 'videoSection',
      type: 'object',
      title: 'Video section',
      fields: [
        {
          name: 'videoFile',
          type: 'file',
          title: 'Video File',
          options: {
            accept: 'video/*'
          }
        },
        {
          name: 'videoBlockHiddenTitle',
          type: 'string',
          title: '⚡️ Descriptive label for screen readers & SEO'
        },
        {
          name: 'videoBlockPoster',
          type: 'image',
          title: 'Video block poster'
        }
      ]
    },
    {
      name: 'listLine',
      type: 'object',
      title: 'List line section',
      fields: [
        {
          name: 'listLineSubtitle',
          type: 'string',
          title: 'List line Subtitle'
        },
        {
          name: 'listLineText',
          type: 'array',
          title: 'List line paragraph',
          of: [
            {
              type: 'block'
            }
          ]
        },
        {
          name: 'listLineLink',
          type: 'string',
          title: 'List line link text'
        },
        {
          name: 'listLineItems',
          type: 'array',
          title: 'List line items',
          of: [
            {
              type: 'document',
              fields: [
                {
                  name: 'listLineItem',
                  type: 'string',
                  title: 'List line item text'
                }
              ]
            }
          ]
        },
        {
          name: 'listLineImage',
          type: 'image',
          title: 'List line image'
        },
        {
          name: 'listLineStar',
          type: 'array',
          title: 'List line start list',
          of: [
            {
              type: 'document',
              fields: [
                {
                  name: 'listLineStarItem',
                  type: 'image',
                  title: 'List line start item'
                }
              ]
            }
          ]
        },
        {
          name: 'listLineSocialIcon',
          type: 'image',
          title: 'List line social icon'
        },
        {
          name: 'listLineSocialIconAlt',
          type: 'string',
          title: 'List line social icon description for screen readers & SEO',
          description: '⚡️ Optional but highly encouraged to make the content more accessible'
        },
        {
          name: 'listLineSocialUrl',
          type: 'url',
          title: 'List line social url',
          validation: (Rule) => Rule.required()
        },
        {
          name: 'listLineBlockquote',
          type: 'object',
          title: 'List line Blockquote',
          fields: [
            {
              name: 'listLineBlockquoteText',
              type: 'string',
              title: 'List line Blockquote text'
            },
            {
              name: 'listLineBlockquoteAuthor',
              type: 'string',
              title: 'List line Blockquote author'
            }
          ]
        }
      ]
    },
    {
      name: 'benefits',
      type: 'object',
      title: 'Benefits section',
      fields: [
        {
          name: 'benefitsTitle',
          type: 'string',
          title: 'Benefits title'
        },
        {
          name: 'benefitsSubtitle',
          type: 'string',
          title: 'Benefits subtitle'
        },
        {
          name: 'benefitsText',
          type: 'array',
          title: 'Benefits paragraph',
          of: [
            {
              type: 'block'
            }
          ]
        },
        {
          name: 'benefitsBtnText',
          type: 'string',
          title: 'Benefits buttton text'
        },
        {
          name: 'benefitsImage',
          type: 'image',
          title: 'Benefits Image'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'hero.heroTitle',
      subtitle: 'hero.heroSubtitle',
      media: 'header.headerLogo'
    }
  }
}
