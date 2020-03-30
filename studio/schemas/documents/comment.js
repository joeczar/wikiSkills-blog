export default {
  name: 'comment',
  type: 'document',
  title: 'Comment',
  fields: [
    {
      _id: 'id',
      type: 'string',
      title: 'ID'
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    },
    {
      name: 'email',
      type: 'string',
      title: 'E-Mail'
    },
    {
      name: 'message',
      type: 'text',
      title: 'Message'
    },
    {
      name: 'date',
      type: 'string',
      title: 'Date'
    },
    {
      name: 'pagecontext',
      type: 'string',
      title: 'Page Context'
    }
  ]
}
  