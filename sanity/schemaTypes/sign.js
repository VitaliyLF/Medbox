export default {
  name: 'form',
  type: 'document',
  title: 'Mail',
  fields: [
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      readOnly: true
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DDTHH:mm:ssZ'
      },
      readOnly: true
    }
  ],
  initialValue: {
    createdAt: new Date().toISOString()
  }
}
