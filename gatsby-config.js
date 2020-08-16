
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})


module.exports = {
  siteMetadata: {
    title: `muhzulzidan`,
    owner: `muhzulzidan`,
    description: `blog oleh pelajar dan untuk orang-orang yang ingin belajar.`,
    siteUrl: `https://muhzulzidan.com/`,
    social: {
      twitter: `muhzulzidan`,
    },
  },
  plugins: [
  
    {
      resolve: `gatsby-plugin-portal`,
      options: {
        key: 'portal',
        id: 'portal',        
      },
    },
    {
      resolve: 'gatsby-plugin-flexsearch',
      options: {
        languages: ['en'],
        type: 'MarkdownRemark',
        fields: [
          {
            name: 'title',
            indexed: true,
            resolver: 'frontmatter.title',
            attributes: {
              encode: 'balance',
              tokenize: 'strict',
              threshold: 6,
              depth: 3,
            },
            store: true,
          },
          {
            name: 'description',
            indexed: true,
            resolver: 'frontmatter.excerpt',
            attributes: {
              encode: 'balance',
              tokenize: 'strict',
              threshold: 6,
              depth: 3,
            },
            store: false,
          },
          {
            name: 'url',
            indexed: false,
            resolver: 'frontmatter.slug',
            store: true,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-scroll-indicator`,
      options: {
        // Configure color of the scroll indicator
        color: '#BE2623',
        // Configure paths where the scroll indicator will appear
        
        // Configure the z-index of the indicator element
        zIndex: 9999,
      },
    },
    

    
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'src',
          path: `${__dirname}/src/`,
        },
      },
    {
      resolve: '@fika/gatsby-source-cockpit',
      options: {
        token: `${process.env.COCKPIT_TOKEN}`,
        baseUrl:
          'https://muhzulzidan.my.id', 
        locales: ['id'], 
        collections: [], 
        singletons: [], 
        aliases: {
          collection: {
            A_COLLECTION_NAME: 'demo',

          },
          singleton: {
            A_SINGLETON_NAME: 'privacy',

          }
        }, 
        brokenImageReplacement: 'https://www.google.co.id/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png', // (6)
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/, 
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `100`,
              className: `custom-class`,
              maintainCase: false,
              removeAccents: true,
              isIconAfterHeader: true,
              enableCustomId: true,
            },
          },
          {
            resolve: "gatsby-remark-embed-youtube",
            options: {
              width: 800,
              height: 400
            }
          },
          {
            resolve: `gatsby-remark-images-anywhere`,
            options: {
              /**
               * @param {string} staticDir
               * Root folder for images. For example,
               * if your image path is `/assets/image.png`,
               * your image is located in `static/assets/image.png`,
               * then the staticDir is `static`.
               * You can also point it to whichever else folder you have locally.
               */
              staticDir: 'static',
          
              /**
               * @param {Function} createMarkup
               * A function that return string template for image
               * All sharp result will be passed in as arguments
               */
              // createMarkup: ({ src, srcSet }) => `<img src="${src}" srcSet="${srcSet}" class="hey" />`,
              createMarkup: ({
                // width,
                // height,
                src,
                srcSet,
                sizes,
                aspectRatio,
                alt,
                base64,
                presentationWidth,
              }) => {
                return `<custom-image src="${src}" srcset="${srcSet}" sizes="${sizes}" aspectratio="${aspectRatio}" 
                alt="${alt}"
         
                
                
                base64="${base64}" presentationwidth="${presentationWidth}"></custom-image>`
              },
          
              /**
               * @param {'lazy' | 'eager' | 'auto'} loading 
               * Set the output markup's 'loading' attribute. Default: 'lazy'
               */
              loading: 'lazy',
          
              /**
               * @param {string} backgroundColor
               * Background color. Default: '#fff'
               */
              backgroundColor: '#fff',
          
              /**
               * @param {boolean} linkImagesToOriginal 
               * If enabled, wraps the default markup with an <a> tag pointing to the original image.
               * Default: false
               */
              linkImagesToOriginal: true,
          
              /**
               * @param {string | Function} wrapperStyle 
               * Inject styles to the image wrapper.
               * Also accept a function that receives all image data as arguments, i.e
               * ({ aspectRatio, width, height }) => `padding-bottom: ${height/2}px;`
               * Alternatively you can also attach additional class to `.gria-image-wrapper`
               */
              // wrapperStyle: [
              //   'padding-bottom: 0.5rem;',
              //   ({ aspectRatio, width, height }) => `padding-bottom: ${height/2}px;`,
              
              // ],
              
          
              /**
               * @param {'fluid' | 'fixed' | 'resize'} sharpMethod
               * Default: 'fluid'.
               */
              sharpMethod: 'fluid',
              maxWidth: 650,
              quality: 50,
            }
          },
          {
            resolve: `gatsby-remark-remove-root-p-tag`,

          },
         
        {
          resolve: "gatsby-remark-embed-video",
          options: {
            width: 800,
            ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
            height: 400, // Optional: Overrides optional.ratio
            related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
            noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
            urlOverrides: [
              {
                id: 'youtube',
                embedURL: (videoId) => `https://www.youtube-nocookie.com/embed/${videoId}`,
              }
            ] //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
          }
        },
        {
          resolve: `gatsby-remark-table-of-contents`,
          options: {
            exclude: "Daftar Isi",
            tight: false,
            fromHeading: 1,
            toHeading: 6
          },
        },
        `gatsby-remark-responsive-iframe`,
         //  `gatsby-remark-prismjs`,
         {
          resolve: `gatsby-remark-prismjs`,
          options: {
            aliases: {
              sh: "shell",
              es6: "javascript",
              env: "bash",
              mdx: "md",
              ".json": "json",
              
            },
          },
        },
        'gatsby-remark-check-links'
          
        ]}},

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `muhzulzidan`,
        short_name: `muhzulzidan`,
        start_url: `/`,
        background_color: `#EAE8DC`,
        theme_color: `#BE2623`,
        display: `standalone`,
        icon: `src/images/zn1.svg`, 
        cache_busting_mode: 'none',
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
         workboxConfig: {
            globPatterns: ['**/*']
         }
      }
   },
    `gatsby-plugin-sass`,
    'gatsby-plugin-dark-mode',
    { 
      resolve: `gatsby-plugin-react-css-modules`,
      options: {
        filetypes: {
          ".css.js": { syntax: `postcss-cssjs` },
        },
      }
    },
    `gatsby-plugin-minify`,
      { 
        resolve: `gatsby-plugin-purgecss`,
        options: {
          printRejected: true, 
          develop: true,
          ignore: ['/markdown.css', '/sound.css', 'prismjs/', 'docsearch.js/'], 
        }
      },


  ],
}
