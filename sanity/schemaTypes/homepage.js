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
      name: 'videoBlock',
      type: 'file',
      title: 'Video section',
      options: {
        accept: 'video/*'
      },
      fields: [
        {
          name: 'videoBlockPoster',
          type: 'image',
          title: 'Video block poster'
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
