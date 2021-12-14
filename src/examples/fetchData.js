import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query FirstQuery {
    site {
      info: siteMetadata {
        author
        description
        simpleData
        title
        complexData {
          name
          age
        }
        person {
          name
          age
        }
      }
    }
  }
`

const FetchData = () => {
  const data = useStaticQuery(getData);
  const db = data.site.info;
  return (
    <div>
      {/* <h2>Name: {data.site.siteMetadata.person.name}</h2> */}
      <h2>site title is: {db.title}</h2>
    </div>
  )
}

export default FetchData
