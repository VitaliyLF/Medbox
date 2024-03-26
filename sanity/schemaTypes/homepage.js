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
          name: 'heroImageAndAlt',
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
          name: 'benefitsImageAndAlt',
          type: 'document',
          title: 'Benefits Image',
          fields: [
            {
              name: 'benefitsImage',
              type: 'image',
              title: 'image'
            },
            {
              name: 'benefitsImageAlt',
              type: 'string',
              title: 'Descriptive label for screen readers & SEO',
              description: '⚡️ Optional but highly encouraged to make the content more accessible'
            }
          ]
        }
      ]
    },
    {
      name: 'stickyList',
      type: 'object',
      title: 'Sticky list section',
      fields: [
        {
          name: 'stickyListTitle',
          type: 'string',
          title: 'Sticky list title'
        },
        {
          name: 'stickyListSubtitle',
          type: 'string',
          title: 'Sticky list subtitle'
        },
        {
          name: 'stickyListImageAndAlt',
          type: 'document',
          title: 'Sticky list Image',
          fields: [
            {
              name: 'stickyListImage',
              type: 'image',
              title: 'image',
              description: '⚡️ Optional, but png format is better.'
            },
            {
              name: 'stickyListImageAlt',
              type: 'string',
              title: 'Descriptive label for screen readers & SEO',
              description: '⚡️ Optional but highly encouraged to make the content more accessible'
            }
          ]
        },
        {
          name: 'stickyListItems',
          type: 'array',
          title: 'Sticky list items',
          of: [
            {
              type: 'document',
              fields: [
                {
                  name: 'stickyListItemTitle',
                  type: 'string',
                  title: 'Sticky list title'
                },
                {
                  name: 'stickyListItemText',
                  type: 'array',
                  title: 'Sticky list text',
                  of: [
                    {
                      type: 'block'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: 'stickyListTextButton',
          type: 'string',
          title: 'Sticky list text button'
        }
      ]
    },
    {
      name: 'infoBlock',
      type: 'object',
      title: 'Info block section',
      fields: [
        {
          name: 'infoBlockSubtitle',
          type: 'string',
          title: 'Info block Subtitle'
        },
        {
          name: 'infoBlockText',
          type: 'array',
          title: 'Info block paragraph',
          of: [
            {
              type: 'block'
            }
          ]
        },
        {
          name: 'infoBlockUrl',
          type: 'url',
          title: 'Info block phone url',
          description: '⚡️ Enter a valid URL starting with http://, https://, mailto: or tel: This field is required.',
          validation: (Rule) =>
            Rule.required().uri({
              scheme: ['http', 'https', 'mailto', 'tel']
            })
        },
        {
          name: 'infoBlockValue',
          type: 'string',
          title: 'Info block phone text'
        },
        {
          name: 'infoBlogBtnText',
          type: 'string',
          title: 'Info block button text'
        },
        {
          name: 'infoBlockImageAndAlt',
          type: 'document',
          title: 'Info block Image',
          fields: [
            {
              name: 'infoBlockImage',
              type: 'image',
              title: 'image',
              description: '⚡️ Optional, but png format is better.'
            },
            {
              name: 'infoBlockImageAlt',
              type: 'string',
              title: 'Descriptive label for screen readers & SEO',
              description: '⚡️ Optional but highly encouraged to make the content more accessible'
            }
          ]
        },
        {
          name: 'infoBlockStar',
          type: 'array',
          title: 'Info Block start list',
          of: [
            {
              type: 'document',
              fields: [
                {
                  name: 'infoBlockStarItem',
                  type: 'image',
                  title: 'Info Block start item'
                }
              ]
            }
          ]
        },
        {
          name: 'infoBlockSocialIcon',
          type: 'image',
          title: 'Info Block social icon'
        },
        {
          name: 'infoBlockSocialIconAlt',
          type: 'string',
          title: 'Info Block social icon description for screen readers & SEO',
          description: '⚡️ Optional but highly encouraged to make the content more accessible'
        },
        {
          name: 'infoBlockSocialUrl',
          type: 'url',
          title: 'Info Block social url',
          validation: (Rule) => Rule.required()
        },
        {
          name: 'infoBlockBlockquote',
          type: 'object',
          title: 'Info Block Blockquote',
          fields: [
            {
              name: 'infoBlockBlockquoteText',
              type: 'string',
              title: 'Info Block Blockquote text'
            },
            {
              name: 'infoBlockBlockquoteAuthor',
              type: 'string',
              title: 'Info Block Blockquote author'
            }
          ]
        }
      ]
    },
    {
      name: 'states',
      type: 'object',
      title: 'States section',
      fields: [
        {
          name: 'statesTitle',
          type: 'string',
          title: 'States Title'
        },
        {
          name: 'statesSubtitle',
          type: 'string',
          title: 'States Subtitle'
        },
        {
          name: 'statesText',
          type: 'array',
          title: 'States paragraph',
          of: [
            {
              type: 'block'
            }
          ]
        },
        {
          name: 'statesTextContact',
          type: 'array',
          title: 'States text contact',
          of: [
            {
              type: 'block'
            }
          ]
        },
        {
          name: 'statesBtnText',
          type: 'string',
          title: 'States Button Text'
        },
        {
          name: 'statesImageAndAlt',
          type: 'document',
          title: 'States Image',
          fields: [
            {
              name: 'statesImage',
              type: 'image',
              title: 'image',
              description: '⚡️ Optional, but png format is better.'
            },
            {
              name: 'statesImageAlt',
              type: 'string',
              title: 'Descriptive label for screen readers & SEO',
              description: '⚡️ Optional but highly encouraged to make the content more accessible'
            }
          ]
        }
      ]
    },
    {
      name: 'feedback',
      type: 'object',
      title: 'Feedback section',
      fields: [
        {
          name: 'feedbackSubtitle',
          type: 'string',
          title: 'Feedback subtitle'
        },
        {
          name: 'feedbackText',
          type: 'array',
          title: 'Feedback paragraph',
          of: [
            {
              type: 'block'
            }
          ]
        },
        {
          name: 'feedbackList',
          type: 'array',
          title: 'Feedback list',
          of: [
            {
              type: 'document',
              fields: [
                {
                  name: 'feedbackListItem',
                  type: 'document',
                  title: 'Feedback list item',
                  fields: [
                    {
                      name: 'feedbackStar',
                      type: 'number',
                      title: 'Feedback start list',
                      validation: (Rule) => Rule.max(5).min(1).integer()
                    },
                    {
                      name: 'feedbackSocialIcon',
                      type: 'image',
                      title: 'Feedback social icon'
                    },
                    {
                      name: 'feedbackSocialIconAlt',
                      type: 'string',
                      title: 'Feedback social icon description for screen readers & SEO',
                      description: '⚡️ Optional but highly encouraged to make the content more accessible'
                    },
                    {
                      name: 'feedbackSocialUrl',
                      type: 'url',
                      title: 'Feedback social url'
                      // validation: (Rule) => Rule.required()
                    },
                    {
                      name: 'feedbackBlockquote',
                      type: 'object',
                      title: 'Feedback Blockquote',
                      fields: [
                        {
                          name: 'feedbackBlockquoteText',
                          type: 'string',
                          title: 'Feedback Blockquote text'
                        },
                        {
                          name: 'feedbackBlockquoteAuthor',
                          type: 'string',
                          title: 'Feedback Blockquote author'
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
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
