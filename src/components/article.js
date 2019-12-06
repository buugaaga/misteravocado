import React from "react"

const Article = ({ 
  content: {
    title,
    content: {
      content
    },
    publishedAt
  }
}) => (
  <div>
    <h2>{title}</h2>
    
    <p>
      {content}
    </p>
    <h5>{publishedAt}</h5>
  </div>
)

export default Article