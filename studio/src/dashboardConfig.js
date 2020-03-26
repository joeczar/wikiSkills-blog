export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e7b645a1b01ca01c79068d9',
                  title: 'Sanity Studio',
                  name: 'wikiSkills-blog-studio',
                  apiId: 'd5ab75a4-a22d-474d-a9b2-a0576ee7e536'
                },
                {
                  buildHookId: '5e7b645a1a6ccd020d15dca7',
                  title: 'Blog Website',
                  name: 'wikiSkills-blog',
                  apiId: '96b27841-7bda-4aaa-89ed-9cb903e0758b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/joeczar/wikiSkills-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://wikiSkills-blog.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
