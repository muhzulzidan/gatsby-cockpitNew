import React from 'react'
import { graphql, Link } from 'gatsby'



import get from 'lodash/get'

import Layout from "../components/layout"



class Markdown extends React.Component {

      
constructor(props) {
  super(props);

  this.state={ 
    position:"relative",
    bottom: "",
    left: "",
    width: "",
    }
  }
handleClick = () => {
  this.setState({
    position:"fixed",
    bottom: "0",
    left: "0",
    width: "100%",
    zIndex:"999",
  });
};
  render() {
    const post = get(this.props, 'data.markdownRemark')
    const { previous, next } = get(this.props, 'pageContext')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')



    
    return (
   
      <div className="markdown-basediv" title={siteTitle}>


        <Layout location={this.props.location}>
          <article className="markdown-article">
            <header className="markdown-header">
              <h1 className="markdown-h1">{post.frontmatter.title}</h1>
                <span className="markdown-written">Ditulis oleh {post.frontmatter.author}  </span>


            
              </header>

          <br/>
      <section className="markdown-section">

          <br/>
          <div className="markdown-image_desc">{post.frontmatter.image_desc}</div>
          <br/>

              <div dangerouslySetInnerHTML={{ __html: post.html }}/>
      </section>  

</article>
          <nav className="markdown-nav" >
            <div >
              {previous && (
                <Link to={`/${previous.frontmatter.slug}`} rel="prev" className="markdown-navLinkPrev" >
                  <div className="markdown-navPrev">
                    <h3 style={{ margin: 0, fontSize: "1em" }} >{previous.frontmatter.title}</h3>
                  </div>

                </Link>
              )}
            </div>
            <div style={{ textAlign: "-webkit-right", }}>
              {next && (
                <Link to={`/${next.frontmatter.slug}`} className="markdown-navLinkAfter" rel="next">
                  <div className="markdown-navAfter">
                    <h3 style={{ margin: 0, fontSize: "1em" }}> {next.frontmatter.title}</h3>
                  </div>

                </Link>
              )}
            </div>
          </nav>
</Layout>

 
      
</div>
    )
  }
}

export default Markdown

export const pageQuery = graphql`
query Markdown ($slug: String!){
  
  site {
    siteMetadata {
      title
      siteUrl
    }
  }
  
  markdownRemark (frontmatter: {slug: {eq: $slug}}){
    frontmatter {
      title
      date(formatString: "DD MMMM, YYYY")
      slug
      tags
      author
      image_desc
    }
    htmlAst
    html
    id
    excerpt(pruneLength: 160)
  }
}

`