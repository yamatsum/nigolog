module.exports = {
  siteMetadata: {
    title: `ニゴログ`,
    author: `yamatsum`,
    description: `技術ブログ`,
    siteUrl: `https://nigolog.netlify.com`,
    social: {
      twitter: `tomato_mus`,
    },
    categories: [
      {
        name: "デザイン",
        slug: "design",
        color: "#0c9ee4"
      }
    ]
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-code-titles`,
          {
            resolve: "gatsby-remark-embed-youtube",
            options: {
              width: 650,
              height: 365
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
              linkImagesToOriginal: false
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-twemoji-shortcut`,
            options: {
              classname: "twemoji"
            }
          },
          {
            resolve: "gatsby-remark-custom-blocks",
            options: {
              blocks: {
                simple: {
                  classes: "simple",
                  title: "optional"
                },
                info: {
                  classes: "info",
                  title: "optional"
                },
                alert: {
                  classes: "alert",
                  title: "optional"
                },
                notice: {
                  classes: "notice",
                  title: "optional"
                },
                imageSmall: {
                  classes: "image-small"
                },
                imageMedium: {
                  classes: "image-medium"
                }
              }
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              noInlineHighlight: false
            }
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: "UA-134661352-1"
    //   }
    // },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`
      }
    },
    `gatsby-plugin-twitter`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography`,
    //   },
    // },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-styled-components`,
  ],
}
