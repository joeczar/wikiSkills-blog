export default {
  name: 'comment',
  type: 'document',
  title: 'Comment',
  fields: [
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
      name: 'pagecontext',
      type: 'string',
      title: 'Page Context'
    }
  ]
}
