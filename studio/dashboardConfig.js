export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '624483fcb70e6b28897e5a18',
                  title: 'Sanity Studio',
                  name: 'test-sa-studio',
                  apiId: '88bcdfcf-7175-4814-9eae-5bb1152bb6d7'
                },
                {
                  buildHookId: '624483fc0e969914a4a72217',
                  title: 'Portfolio Website',
                  name: 'test-sa',
                  apiId: 'fc5602b0-47c6-483f-85d7-d4b203d41c31'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DemchukOles/test-sa',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://test-sa.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
