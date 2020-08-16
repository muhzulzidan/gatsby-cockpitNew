const Promise = require('bluebird')
const path = require('path')
const { paginate } = require('gatsby-awesome-pagination')
const axios = require('axios')

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const cockpitToken = `${process.env.COCKPIT_TOKEN}`
const cockpitUrl = `${process.env.COCKPIT_API_URL}`


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

    const markdown = path.resolve('./src/templates/markdown.jsx')
    const PaginateTemplate = path.resolve('./src/templates/paginate.jsx')


    const { createRedirect } = actions;
    createRedirect({
      fromPath: '/404/',
      toPath: '/cari/',
      isPermanent: true
    });
    
    
    const coronaPageResults = graphql(`
		{
        coronaPageResults: allCockpitMarkdown(filter: {childMarkdownRemark: {frontmatter: {title: {ne: ""}, tags: {eq: "desain"}}}}) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                title
                slug
              }
            }
          }
        }
      }
		}
	`).then(result => {
		if (result.errors) {
			Promise.reject(result.errors);
		}

		// Create blog pages
		paginate({
      createPage, 
      items: result.data.coronaPageResults.edges, 
      itemsPerPage: 5, 
      pathPrefix: '/corona', 
      component: path.resolve('./src/templates/corona.jsx'),
      // const paginateTemplate = path.resolve('./src/templates/paginate.jsx')
  
    })
	});
  
    const kurikulumPageResults = graphql(`
		{
        kurikulumPageResults: allCockpitMarkdown(filter: {childMarkdownRemark: {frontmatter: {title: {ne: ""}, tags: {eq: "kurikulum"}}}}) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                title
                slug
              }
            }
          }
        }
      }
		}
	`).then(result => {
		if (result.errors) {
			Promise.reject(result.errors);
		}


		paginate({
      createPage, 
      items: result.data.kurikulumPageResults.edges, 
      itemsPerPage: 5, 
      pathPrefix: '/kurikulum', 
      component: path.resolve('./src/templates/kurikulum.jsx'),

  
    })  
	});
    
    const allItems = graphql(
        `{
          allCockpitMarkdown(filter: {childMarkdownRemark: {frontmatter: {title: {ne: ""}}}}) {
            edges {
              node {
                childMarkdownRemark {
                  frontmatter {
                    title
                    slug
                  }
                }
              }
            }
          }
            allMarkdownRemark(filter: {frontmatter: {title: {ne: ""}}}) {
              edges {
                node {
                  frontmatter {
                    title
                    slug
                  }
                }
              }
            }


        }
          `
         ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        
        paginate({
          createPage, 
          items: result.data.allCockpitMarkdown.edges, 
          itemsPerPage: 10, 
          pathPrefix: '/',  
          component: PaginateTemplate,
        })

        const pages = result.data.allMarkdownRemark.edges
        pages.forEach(( post,index ) => {
          createPage({
            path: `/${post.node.frontmatter.slug}/`,
            component: markdown,
            context: {
              slug: post.node.frontmatter.slug,
              previous: index === 0 ? null : pages[index - 1].node,
              next: index === (pages.length - 1) ? null : pages[index + 1].node,
            },
          });
        })
    
      })
    
  return Promise.all([allItems,  kurikulumPageResults, coronaPageResults,]);
}

