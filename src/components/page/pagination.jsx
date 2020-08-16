import React from 'react'

import { Link } from "gatsby"

class PaginationNew extends React.Component {

    render() {
        const posts = this.props.data


        
    return (
        <>
            <ul className="paginate-ul">
                {posts.map(({ node, }) => {
                    return (
                        <li className="paginate-li" key={node.id}>
                            <Link to={`/${node.title.slug}`} className="paginate-link">
                                <div className="paginate-div1" >

                                </div>
                                <div className="paginate-div2">
                                    <h3 dangerouslySetInnerHTML={{ __html: node.title.value }} className="paginate-h3" />
                                    <p className="paginate-written"> Ditulis Oleh {node.content.value.childMarkdownRemark.frontmatter.author} </p>

                                </div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
}

export default PaginationNew