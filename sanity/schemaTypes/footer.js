export default {
  name: 'footer',
  type: 'document',
  title: 'Footer',
  fields: [
    {
      name: 'logo',
      type: 'image',
      title: 'Logo',
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
              title: 'Footer contact  title',
            },
            {
              name: 'text',
              type: 'array',
              title: 'Footer contact  text',
              of: [
                {
                  type: 'block',
                },
              ],
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
                      title: 'Footer link text',
                    },
                    {
                      name: 'url',
                      type: 'url',
                      title: 'Footer link url',
                      description:
                        '⚡️ Enter a valid URL starting with http://, https://, mailto: or tel:',
                      validation: (Rule) =>
                        Rule.uri({
                          scheme: ['http', 'https', 'mailto', 'tel'],
                        }),
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
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
              title: 'Footer social link text',
            },
            {
              name: 'url',
              type: 'url',
              title: 'Footer social link url',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'socialIcon',
              type: 'image',
              title: 'Footer social icon',
            },
            {
              name: 'socialIconAlt',
              type: 'string',
              title:
                'Feedback social icon description for screen readers & SEO',
              description:
                '⚡️ Optional but highly encouraged to make the content more accessible',
            },
          ],
        },
      ],
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
              title: 'Footer policy link text',
            },
            {
              name: 'url',
              type: 'url',
              title: 'Footer policy link url',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      name: 'copyright',
      type: 'array',
      title: 'Footer copyright',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'partnersList',
      type: 'array',
      title: 'Footer partners list',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'url',
              type: 'url',
              title: 'Footer partners url',
            },
            {
              name: 'image',
              type: 'image',
              title: 'Footer partners image',
              description: '⚡️ Optional, but svg format is better.',
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Descriptive label image for screen readers & SEO',
              description:
                '⚡️ Optional but highly encouraged to make the content more accessible',
            },
          ],
        },
      ],
    },
  ],
}
