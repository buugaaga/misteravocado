import React from "react"
import {  StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Article from "../components/article"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <StaticQuery 
      query={graphql`
      {
        allContentfulMisteravocado {
          edges {
            node {
              id
              title
              content {
                content
              }
              publishedAt
            }
          }
        }
      }
    `} render = { ({allContentfulMisteravocado : { 
          edges 
        }
      })  => edges.map(({ node }) => (
          <Article key={node.id} content={node} />
        )
      )}
    />
  </Layout>
)

export default IndexPage;
