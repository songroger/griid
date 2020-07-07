// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: `Gridsome Blog`,
  titleTemplate: `%s - Gridsome`,
  pathPrefix: '/griid',

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: '_post/*.md',
        typeName: 'BlogPost',
        route: '/:slug'
      }
    }
  ],
  templates: {
    BlogPost: [
      {
        path: '/:slug',
        component: './src/templates/BlogPost.vue'
      }
    ]
  }
}
