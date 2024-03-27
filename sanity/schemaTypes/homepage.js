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
          name: 'logo',
          type: 'image',
          title: 'Header logo Image'
        },
        {
          name: 'links',
          type: 'array',
          title: 'Header navigation links',
          of: [
            {
              type: 'document',
              fields: [
                {
                  name: 'text',
                  type: 'string',
                  title: 'Header link text',
                  description: 'Enter link text'
                }
              ]
            }
          ]
        },
        {
          name: 'btnText',
          type: 'string',
          title: 'Header Button text',
          options: {
            list: [
              { title: 'Get started', value: 'Get started' },
              { title: 'Check My Coverage', value: 'Check My Coverage' },
              { title: 'Learn About Medbox', value: 'Learn About Medbox' },
              { title: 'Check Insurance Coverage', value: 'Check Insurance Coverage' },
              { title: 'Read More Reviews', value: 'Read More Reviews' },
              { title: 'See Full FAQ’s Page', value: 'See Full FAQ’s Page' },
              { title: 'See All Resources', value: 'See All Resources' }
            ]
          }
        },
        {
          name: 'btnTextMobile',
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
          name: 'title',
          type: 'string',
          title: 'Hero Title'
        },
        {
          name: 'slug',
          type: 'slug',
          title: 'Slug of homepage',
          options: {
            source: 'hero.title'
          }
        },
        {
          name: 'subtitle',
          type: 'string',
          title: 'Hero Subtitle'
        },
        {
          name: 'text',
          type: 'array',
          title: 'Hero paragraph',
          of: [
            {
              type: 'block'
            }
          ]
        },
        {
          name: 'btnText',
          type: 'string',
          title: 'Hero button text',
          options: {
            list: [
              { title: 'Get started', value: 'Get started' },
              { title: 'Check My Coverage', value: 'Check My Coverage' },
              { title: 'Learn About Medbox', value: 'Learn About Medbox' },
              { title: 'Check Insurance Coverage', value: 'Check Insurance Coverage' },
              { title: 'Read More Reviews', value: 'Read More Reviews' },
              { title: 'See Full FAQ’s Page', value: 'See Full FAQ’s Page' },
              { title: 'See All Resources', value: 'See All Resources' }
            ]
          }
        },
        {
          name: 'image',
          type: 'image',
          title: 'Hero image',
          description: '⚡️ Optional, but png format is better.'
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Hero descriptive label image for screen readers & SEO',
          description: '⚡️ Optional but highly encouraged to make the content more accessible'
        }
      ]
    },
    {
      name: 'videoSection',
      type: 'object',
      title: 'Video section',
      fields: [
        {
          name: 'file',
          type: 'file',
          title: 'File',
          options: {
            accept: 'video/*'
          }
        },
        {
          name: 'title',
          type: 'string',
          title: '⚡️ Descriptive label video for screen readers & SEO'
        },
        {
          name: 'poster',
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
          name: 'subtitle',
          type: 'string',
          title: 'List line Subtitle'
        },
        {
          name: 'text',
          type: 'array',
          title: 'List line paragraph',
          of: [
            {
              type: 'block'
            }
          ]
        },
        {
          name: 'btnText',
          type: 'string',
          title: 'List line link text',
          options: {
            list: [
              { title: 'Get started', value: 'Get started' },
              { title: 'Check My Coverage', value: 'Check My Coverage' },
              { title: 'Learn About Medbox', value: 'Learn About Medbox' },
              { title: 'Check Insurance Coverage', value: 'Check Insurance Coverage' },
              { title: 'Read More Reviews', value: 'Read More Reviews' },
              { title: 'See Full FAQ’s Page', value: 'See Full FAQ’s Page' },
              { title: 'See All Resources', value: 'See All Resources' }
            ]
          }
        },
        {
          name: 'list',
          type: 'array',
          title: 'List line items',
          of: [
            {
              type: 'document',
              fields: [
                {
                  name: 'content',
                  type: 'string',
                  title: 'List line item text'
                }
              ]
            }
          ]
        },
        {
          name: 'image',
          type: 'image',
          title: 'List line image'
        },
        {
          name: 'stars',
          type: 'number',
          title: 'List line stars',
          validation: (Rule) => Rule.max(5).min(1).integer().required(),
          description: '⚡️ Represents the star rating (from 1 to 5, integers only).'
        },
        {
          name: 'socailIcon',
          type: 'image',
          title: 'List line social icon'
        },
        {
          name: 'socailIconAlt',
          type: 'string',
          title: 'List line social icon description for screen readers & SEO',
          description: '⚡️ Optional but highly encouraged to make the content more accessible'
        },
        {
          name: 'url',
          type: 'url',
          title: 'List line social url',
          validation: (Rule) => Rule.required()
        },
        {
          name: 'blockquote',
          type: 'object',
          title: 'List line Blockquote',
          fields: [
            {
              name: 'text',
              type: 'string',
              title: 'List line Blockquote text'
            },
            {
              name: 'author',
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
          name: 'title',
          type: 'string',
          title: 'Benefits title'
        },
        {
          name: 'subtitle',
          type: 'string',
          title: 'Benefits subtitle'
        },
        {
          name: 'text',
          type: 'array',
          title: 'Benefits paragraph',
          of: [
            {
              type: 'block'
            }
          ]
        },
        {
          name: 'btnText',
          type: 'string',
          title: 'Benefits buttton text',
          options: {
            list: [
              { title: 'Get started', value: 'Get started' },
              { title: 'Check My Coverage', value: 'Check My Coverage' },
              { title: 'Learn About Medbox', value: 'Learn About Medbox' },
              { title: 'Check Insurance Coverage', value: 'Check Insurance Coverage' },
              { title: 'Read More Reviews', value: 'Read More Reviews' },
              { title: 'See Full FAQ’s Page', value: 'See Full FAQ’s Page' },
              { title: 'See All Resources', value: 'See All Resources' }
            ]
          }
        },
        {
          name: 'image',
          type: 'image',
          title: 'Benefits image'
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Descriptive label for screen readers & SEO',
          description: '⚡️ Optional but highly encouraged to make the content more accessible'
        }
      ]
    },
    {
      name: 'stickyList',
      type: 'object',
      title: 'Sticky list section',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Sticky list title'
        },
        {
          name: 'subtitle',
          type: 'string',
          title: 'Sticky list subtitle'
        },
        {
          name: 'image',
          type: 'image',
          title: 'Sticky list image',
          description: '⚡️ Optional, but png format is better.'
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Descriptive label for screen readers & SEO',
          description: '⚡️ Optional but highly encouraged to make the content more accessible'
        },
        {
          name: 'list',
          type: 'array',
          title: 'Sticky list items',
          of: [
            {
              type: 'document',
              fields: [
                {
                  name: 'title',
                  type: 'string',
                  title: 'Sticky list title'
                },
                {
                  name: 'text',
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
          name: 'btnText',
          type: 'string',
          title: 'Sticky list text button',
          options: {
            list: [
              { title: 'Get started', value: 'Get started' },
              { title: 'Check My Coverage', value: 'Check My Coverage' },
              { title: 'Learn About Medbox', value: 'Learn About Medbox' },
              { title: 'Check Insurance Coverage', value: 'Check Insurance Coverage' },
              { title: 'Read More Reviews', value: 'Read More Reviews' },
              { title: 'See Full FAQ’s Page', value: 'See Full FAQ’s Page' },
              { title: 'See All Resources', value: 'See All Resources' }
            ]
          }
        }
      ]
    },
    {
      name: 'infoBlock',
      type: 'object',
      title: 'Info block section',
      fields: [
        {
          name: 'subtitle',
          type: 'string',
          title: 'Info block Subtitle'
        },
        {
          name: 'text',
          type: 'array',
          title: 'Info block paragraph',
          of: [
            {
              type: 'block'
            }
          ]
        },
        {
          name: 'url',
          type: 'url',
          title: 'Info block phone url',
          description: '⚡️ Enter a valid URL starting with http://, https://, mailto: or tel: This field is required.',
          validation: (Rule) =>
            Rule.required().uri({
              scheme: ['http', 'https', 'mailto', 'tel']
            })
        },
        {
          name: 'linkText',
          type: 'string',
          title: 'Info block phone text'
        },
        {
          name: 'btnText',
          type: 'string',
          title: 'Info block button text',
          options: {
            list: [
              { title: 'Get started', value: 'Get started' },
              { title: 'Check My Coverage', value: 'Check My Coverage' },
              { title: 'Learn About Medbox', value: 'Learn About Medbox' },
              { title: 'Check Insurance Coverage', value: 'Check Insurance Coverage' },
              { title: 'Read More Reviews', value: 'Read More Reviews' },
              { title: 'See Full FAQ’s Page', value: 'See Full FAQ’s Page' },
              { title: 'See All Resources', value: 'See All Resources' }
            ]
          }
        },
        {
          name: 'image',
          type: 'image',
          title: 'Info block image',
          description: '⚡️ Optional, but png format is better.'
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Descriptive label for screen readers & SEO',
          description: '⚡️ Optional but highly encouraged to make the content more accessible'
        },
        {
          name: 'stars',
          type: 'number',
          title: 'List line stars',
          validation: (Rule) => Rule.max(5).min(1).integer().required(),
          description: '⚡️ Represents the star rating (from 1 to 5, integers only).'
        },
        {
          name: 'socailIcon',
          type: 'image',
          title: 'Info Block social icon'
        },
        {
          name: 'socailIconAlt',
          type: 'string',
          title: 'Info Block social icon description for screen readers & SEO',
          description: '⚡️ Optional but highly encouraged to make the content more accessible'
        },
        {
          name: 'socailUrl',
          type: 'url',
          title: 'Info Block social url',
          validation: (Rule) => Rule.required()
        },
        {
          name: 'blockquote',
          type: 'object',
          title: 'Info Block Blockquote',
          fields: [
            {
              name: 'text',
              type: 'string',
              title: 'Info Block Blockquote text'
            },
            {
              name: 'author',
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
          name: 'title',
          type: 'string',
          title: 'States Title'
        },
        {
          name: 'subtitle',
          type: 'string',
          title: 'States Subtitle'
        },
        {
          name: 'text',
          type: 'array',
          title: 'States paragraph',
          of: [
            {
              type: 'block'
            }
          ]
        },
        {
          name: 'textContact',
          type: 'array',
          title: 'States text contact',
          of: [
            {
              type: 'block'
            }
          ]
        },
        {
          name: 'btnText',
          type: 'string',
          title: 'States Button Text',
          options: {
            list: [
              { title: 'Get started', value: 'Get started' },
              { title: 'Check My Coverage', value: 'Check My Coverage' },
              { title: 'Learn About Medbox', value: 'Learn About Medbox' },
              { title: 'Check Insurance Coverage', value: 'Check Insurance Coverage' },
              { title: 'Read More Reviews', value: 'Read More Reviews' },
              { title: 'See Full FAQ’s Page', value: 'See Full FAQ’s Page' },
              { title: 'See All Resources', value: 'See All Resources' }
            ]
          }
        },
        {
          name: 'image',
          type: 'image',
          title: 'State image',
          description: '⚡️ Optional, but png format is better.'
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Descriptive label for screen readers & SEO',
          description: '⚡️ Optional but highly encouraged to make the content more accessible'
        }
      ]
    },
    {
      name: 'feedback',
      type: 'object',
      title: 'Feedback section',
      fields: [
        {
          name: 'subtitle',
          type: 'string',
          title: 'Feedback subtitle'
        },
        {
          name: 'text',
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
                      title: 'Feedback social url',
                      validation: (Rule) => Rule.required()
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
      title: 'hero.title',
      subtitle: 'hero.heroSubtitle',
      media: 'header.headerLogo'
    }
  }
}
