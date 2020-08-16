import React from 'react'
import {  graphql } from "gatsby"

import PaginateNew from "../components/page/pagination"

import Layout from "../components/layout"

import Dropdown from "../components/dropdown/index"
export const coronaQuery = graphql`
query CoronaQuery ($skip: Int!, $limit: Int!) {


    allCockpitDemo(filter: {lang: {eq: "id"}, published: {value: {eq: true}}, tags: {value: {eq: "corona"}}}, skip: $skip, limit: $limit) {
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

const Corona = ({ data, pageContext, location }) => {

    const posts = data.allCockpitDemo.edges

    return (
        <Layout location={location} >

            <div className="paginate-name-div">
                <h1 className="paginate-h1">Corona</h1>
                <Dropdown/>
            </div>
        <PaginateNew data={posts} />

        </Layout>

    )
}
export default Corona

