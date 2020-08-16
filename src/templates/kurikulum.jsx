import React  from 'react'
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PaginateNew from "../components/page/pagination"
import Dropdown from "../components/dropdown/index"
export const kurikulumQuery = graphql`
query KurikulumQuery ($skip: Int!, $limit: Int!) {
  allCockpitDemo(filter: {lang: {eq: "id"}, published: {value: {eq: true}}, tags: {value: {eq: "kurikulum"}}}, skip: $skip, limit: $limit) {
    edges {
      node {
        id
        title { 
          value
          slug
        }
        content { 
            value {
              childMarkdownRemark {
                frontmatter {
                  author
                }
              }
            }
          }

      }
    }
  }
}
`

const Kurikulum = ({ data, pageContext, location}) => {

  const posts = data.allCockpitDemo.edges

  return (
    <Layout location={ location} >

      <div className="paginate-name-div">
        <h1 className="paginate-h1">Pendidikan</h1>
        <Dropdown />

      </div>
      <PaginateNew data={posts} />

  </Layout>

  )}
export default Kurikulum

