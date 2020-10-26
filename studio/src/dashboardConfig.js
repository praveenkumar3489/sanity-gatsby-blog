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
                  buildHookId: '5f9693d5c7fa31b44111a8a1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-7ez9csx9',
                  apiId: '523d9416-cb5e-46c6-963f-34285dbfe50d'
                },
                {
                  buildHookId: '5f9693d60a395195a993b15a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-tifx6ax6',
                  apiId: '7f91e082-ec6c-4145-b54f-1c046c3fe5b6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/praveenkumar3489/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-tifx6ax6.netlify.app', category: 'apps' }
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
