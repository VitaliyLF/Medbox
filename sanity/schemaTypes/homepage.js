import { HeaderSchema } from './schemaSection/HeaderSchema'

const header = HeaderSchema()

const heroSection = {
  name: 'hero',
  type: 'object',
  title: 'Hero section',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
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
      title: 'Subtitle'
    },
    {
      name: 'text',
      type: 'array',
      title: 'Paragraph',
      of: [
        {
          type: 'block'
        }
      ]
    },
    {
      name: 'btnText',
      type: 'string',
      title: 'Button text',
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
      title: 'Image',
      description: '⚡️ Optional, but png format is better.'
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Hero descriptive label image for screen readers & SEO',
      description: '⚡️ Optional but highly encouraged to make the content more accessible'
    }
  ]
}

const videoSection = {
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
      title: 'Poster video'
    }
  ]
}

const lineListSection = {
  name: 'lineList',
  type: 'object',
  title: 'List line section',
  fields: [
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle'
    },
    {
      name: 'text',
      type: 'array',
      title: 'Paragraph',
      of: [
        {
          type: 'block'
        }
      ]
    },
    {
      name: 'linkText',
      type: 'string',
      title: 'Link text',
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
      title: 'List text',
      of: [
        {
          type: 'document',
          fields: [
            {
              name: 'content',
              type: 'string',
              title: 'Item text'
            }
          ]
        }
      ]
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image'
    },
    {
      name: 'stars',
      type: 'number',
      title: 'Stars review',
      validation: (Rule) => Rule.max(5).min(1).integer().required(),
      description: '⚡️ Represents the star rating (from 1 to 5, integers only).'
    },
    {
      name: 'socialIcon',
      type: 'image',
      title: 'Social icon review'
    },
    {
      name: 'socialIconAlt',
      type: 'string',
      title: 'List line social icon description for screen readers & SEO',
      description: '⚡️ Optional but highly encouraged to make the content more accessible'
    },
    {
      name: 'socialUrl',
      type: 'url',
      title: 'Social url link review',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'blockquote',
      type: 'object',
      title: 'Blockquote review',
      fields: [
        {
          name: 'text',
          type: 'string',
          title: 'Blockquote text'
        },
        {
          name: 'author',
          type: 'string',
          title: 'Blockquote author'
        }
      ]
    }
  ]
}

const benefitsSection = {
  name: 'benefits',
  type: 'object',
  title: 'Benefits section',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle'
    },
    {
      name: 'text',
      type: 'array',
      title: 'Paragraph',
      of: [
        {
          type: 'block'
        }
      ]
    },
    {
      name: 'btnText',
      type: 'string',
      title: 'Buttton text',
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
      title: 'Image'
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Descriptive label image for screen readers & SEO',
      description: '⚡️ Optional but highly encouraged to make the content more accessible'
    }
  ]
}

const stickyListSection = {
  name: 'stickyList',
  type: 'object',
  title: 'Sticky list section',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle'
    },
    {
      name: 'listImages',
      type: 'array',
      title: 'List images',
      of: [
        {
          type: 'document',
          fields: [
            {
              name: 'image',
              type: 'image',
              title: 'Image',
              description: '⚡️ Optional, but png format is better.'
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Descriptive label image for screen readers & SEO',
              description: '⚡️ Optional but highly encouraged to make the content more accessible'
            }
          ]
        }
      ]
    },

    {
      name: 'list',
      type: 'array',
      title: 'List',
      of: [
        {
          type: 'document',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'List Title'
            },
            {
              name: 'text',
              type: 'array',
              title: 'List Text',
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
      name: 'linkText',
      type: 'string',
      title: 'Link text',
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
}

const infoBlockSection = {
  name: 'infoBlock',
  type: 'object',
  title: 'Info block section',
  fields: [
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle'
    },
    {
      name: 'text',
      type: 'array',
      title: 'Paragraph',
      of: [
        {
          type: 'block'
        }
      ]
    },
    {
      name: 'url',
      type: 'url',
      title: 'Phone link url',
      description: '⚡️ Enter a valid URL starting with http://, https://, mailto: or tel: This field is required.',
      validation: (Rule) =>
        Rule.required().uri({
          scheme: ['http', 'https', 'mailto', 'tel']
        })
    },
    {
      name: 'linkText',
      type: 'string',
      title: 'Phone link text'
    },
    {
      name: 'btnText',
      type: 'string',
      title: 'Button text',
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
      title: 'Image',
      description: '⚡️ Optional, but png format is better.'
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Descriptive label image for screen readers & SEO',
      description: '⚡️ Optional but highly encouraged to make the content more accessible'
    },
    {
      name: 'stars',
      type: 'number',
      title: 'Stars review',
      validation: (Rule) => Rule.max(5).min(1).integer().required(),
      description: '⚡️ Represents the star rating (from 1 to 5, integers only).'
    },
    {
      name: 'socialIcon',
      type: 'image',
      title: 'Social icon review'
    },
    {
      name: 'socialIconAlt',
      type: 'string',
      title: 'Info Block social icon description for screen readers & SEO',
      description: '⚡️ Optional but highly encouraged to make the content more accessible'
    },
    {
      name: 'socialUrl',
      type: 'url',
      title: 'Social link url',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'blockquote',
      type: 'object',
      title: 'Blockquote review',
      fields: [
        {
          name: 'text',
          type: 'string',
          title: 'Blockquote text'
        },
        {
          name: 'author',
          type: 'string',
          title: 'Blockquote author'
        }
      ]
    }
  ]
}

const statesSection = {
  name: 'states',
  type: 'object',
  title: 'States section',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle'
    },
    {
      name: 'text',
      type: 'array',
      title: 'Paragraph',
      of: [
        {
          type: 'block'
        }
      ]
    },
    {
      name: 'textContact',
      type: 'array',
      title: 'Text contact',
      of: [
        {
          type: 'block'
        }
      ]
    },
    {
      name: 'btnText',
      type: 'string',
      title: 'Button Text',
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
      title: 'Image',
      description: '⚡️ Optional, but png format is better.'
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Descriptive label image for screen readers & SEO',
      description: '⚡️ Optional but highly encouraged to make the content more accessible'
    }
  ]
}

const feedbackSection = {
  name: 'feedback',
  type: 'object',
  title: 'Feedback section',
  fields: [
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle'
    },
    {
      name: 'text',
      type: 'array',
      title: 'Paragraph',
      of: [
        {
          type: 'block'
        }
      ]
    },
    {
      name: 'list',
      type: 'array',
      title: 'List',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'stars',
              type: 'number',
              title: 'Stars review',
              validation: (Rule) => Rule.max(5).min(1).integer()
            },
            {
              name: 'socialIcon',
              type: 'image',
              title: 'Social icon review'
            },
            {
              name: 'socialIconAlt',
              type: 'string',
              title: 'Feedback social icon description for screen readers & SEO',
              description: '⚡️ Optional but highly encouraged to make the content more accessible'
            },
            {
              name: 'socialUrl',
              type: 'url',
              title: 'Social link url',
              validation: (Rule) => Rule.required()
            },
            {
              name: 'blockquote',
              type: 'object',
              title: 'Blockquote review',
              fields: [
                {
                  name: 'text',
                  type: 'string',
                  title: 'Blockquote text'
                },
                {
                  name: 'author',
                  type: 'string',
                  title: 'Blockquote author'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'subtext',
      type: 'array',
      title: 'Subparagraph',
      of: [
        {
          type: 'block'
        }
      ]
    },
    {
      name: 'linkText',
      type: 'string',
      title: 'Link Text',
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
      name: 'url',
      type: 'url',
      title: 'Link url',
      validation: (Rule) => Rule.required()
    }
  ]
}

const faqSection = {
  name: 'faq',
  type: 'object',
  title: 'FAQ’s section',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle'
    },
    {
      name: 'list',
      type: 'array',
      title: 'List',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'summary',
              type: 'string',
              title: 'Summary Title'
            },
            {
              name: 'text',
              type: 'array',
              title: 'text',
              of: [
                {
                  type: 'block'
                }
              ]
            },
            {
              name: 'url',
              type: 'url',
              title: 'Link url'
            },
            {
              name: 'linkText',
              type: 'string',
              title: 'Link Text'
            },
            {
              name: 'image',
              type: 'image',
              title: 'Image',
              description: '⚡️ Optional, but jpg format is better.'
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Descriptive label image for screen readers & SEO',
              description: '⚡️ Optional but highly encouraged to make the content more accessible'
            }
          ]
        }
      ]
    },
    {
      name: 'linkText',
      type: 'string',
      title: 'Link Text',
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
}

const supportingSection = {
  name: 'supporting',
  type: 'object',
  title: 'Supporting section',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle'
    },
    {
      name: 'list',
      type: 'array',
      title: 'List',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'url',
              type: 'url',
              title: 'Link url'
            },
            {
              name: 'image',
              type: 'image',
              title: 'Image',
              description: '⚡️ Optional, but png format is better.'
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Descriptive label image for screen readers & SEO',
              description: '⚡️ Optional but highly encouraged to make the content more accessible'
            }
          ]
        }
      ]
    }
  ]
}

const resourcesSection = {
  name: 'resources',
  type: 'object',
  title: 'Resources section',
  fields: [
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle'
    },
    {
      name: 'text',
      type: 'array',
      title: 'text',
      of: [
        {
          type: 'block'
        }
      ]
    },
    {
      name: 'linkText',
      type: 'string',
      title: 'Link Text',
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
      name: 'url',
      type: 'url',
      title: 'Link url'
    },
    {
      name: 'list',
      type: 'array',
      title: 'List blog items',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'url',
              type: 'url',
              title: 'Blog item url'
            },
            {
              name: 'image',
              type: 'image',
              title: 'Blog item image',
              description: '⚡️ Optional, but jpg format is better.'
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Descriptive label image for screen readers & SEO',
              description: '⚡️ Optional but highly encouraged to make the content more accessible'
            },
            {
              name: 'tag',
              type: 'string',
              title: 'Blog item tag',
              options: {
                list: [
                  { title: 'Exercise', value: 'Exercise' },
                  { title: 'Independent Living', value: 'Independent Living' },
                  { title: 'Mental Health & Wellbeing', value: 'Mental Health & Wellbeing' },
                  { title: 'Health & Nutrition', value: 'Health & Nutrition' },
                  { title: 'Products for Seniors', value: 'Products for Seniors' },
                  { title: 'Retirement', value: 'Retirement' },
                  { title: 'Safety', value: 'Safety' },
                  { title: 'Technology', value: 'Technology' }
                ]
              }
            },
            {
              name: 'subtitle',
              type: 'string',
              title: 'Blog item subtitle'
            }
          ]
        }
      ]
    }
  ]
}

const signUp = {
  name: 'signUp',
  type: 'object',
  title: 'SignUp section',
  fields: [
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle'
    },
    {
      name: 'image',
      type: 'image',
      title: 'SignUp Success image'
    },
    {
      name: 'text',
      type: 'string',
      title: 'SignUp Success Text'
    }
  ]
}

const footer = {
  name: 'footer',
  type: 'object',
  title: 'Footer',
  fields: [
    {
      name: 'footerLogo',
      type: 'image',
      title: 'Logo'
    },
    {
      name: 'contactList',
      type: 'array',
      title: 'Footer contact list',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Footer contact  title'
            },
            {
              name: 'text',
              type: 'array',
              title: 'Footer contact  text',
              of: [
                {
                  type: 'block'
                }
              ]
            },
            {
              name: 'sublist',
              type: 'array',
              title: 'Footer links',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'linkText',
                      type: 'string',
                      title: 'Footer link text'
                    },
                    {
                      name: 'url',
                      type: 'url',
                      title: 'Footer link url',
                      description: '⚡️ Enter a valid URL starting with http://, https://, mailto: or tel:',
                      validation: (Rule) =>
                        Rule.uri({
                          scheme: ['http', 'https', 'mailto', 'tel']
                        })
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'socialList',
      type: 'array',
      title: 'Footer social list',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'linkText',
              type: 'string',
              title: 'Footer social link text'
            },
            {
              name: 'url',
              type: 'url',
              title: 'Footer social link url',
              validation: (Rule) => Rule.required()
            },
            {
              name: 'socialIcon',
              type: 'image',
              title: 'Footer social icon'
            },
            {
              name: 'socialIconAlt',
              type: 'string',
              title: 'Feedback social icon description for screen readers & SEO',
              description: '⚡️ Optional but highly encouraged to make the content more accessible'
            }
          ]
        }
      ]
    },
    {
      name: 'policyList',
      type: 'array',
      title: 'Footer policy list',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'linkText',
              type: 'string',
              title: 'Footer policy link text'
            },
            {
              name: 'url',
              type: 'url',
              title: 'Footer policy link url',
              validation: (Rule) => Rule.required()
            }
          ]
        }
      ]
    },
    {
      name: 'copyright',
      type: 'array',
      title: 'Footer copyright',
      of: [
        {
          type: 'block'
        }
      ]
    },
    {
      name: 'parthersList',
      type: 'array',
      title: 'Footer parthers list',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'url',
              type: 'url',
              title: 'Footer parthers url'
            },
            {
              name: 'image',
              type: 'image',
              title: 'Footer parthers image',
              description: '⚡️ Optional, but svg format is better.'
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Descriptive label image for screen readers & SEO',
              description: '⚡️ Optional but highly encouraged to make the content more accessible'
            }
          ]
        }
      ]
    }
  ]
}

export default {
  name: 'homepage',
  type: 'document',
  title: 'Homepage',
  fields: [
    header,
    heroSection,
    videoSection,
    lineListSection,
    benefitsSection,
    stickyListSection,
    infoBlockSection,
    statesSection,
    feedbackSection,
    faqSection,
    supportingSection,
    resourcesSection,
    signUp,
    footer
  ],
  preview: {
    select: {
      title: 'hero.title',
      subtitle: 'hero.subtitle',
      media: 'header.logo'
    }
  }
}
