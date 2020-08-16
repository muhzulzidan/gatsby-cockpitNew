import React from 'react'
import { graphql} from "gatsby"

import Layout from "../components/layout"

import PaginateNew from "../components/page/pagination"
import Dropdown from "../components/dropdown/index"

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    site { 
        siteMetadata {
        title
      } 
    }
   allCockpitDemo(filter: {lang: {eq: "id"}, published: {value: {eq: true}}}, skip: $skip, limit: $limit) {
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
  
`;


const  PaginateTemplate = ({data , pageContext, location}) => {

  const posts = data.allCockpitDemo.edges

return (

  <Layout location={location} >

  <div className="paginate-name-div">
     <h1 className="paginate-h1">Semua postingan</h1>
      <Dropdown/>
  </div>
   
    <PaginateNew data={posts}/>


  </Layout>
)}
export default PaginateTemplate