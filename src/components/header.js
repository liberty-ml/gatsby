import * as React from 'react'

// Step 1: Import the useStaticQuery hook and graphql tag
import { useStaticQuery, graphql } from 'gatsby'

const headingStyles = {
  marginTop: 0,
  marginBottom: 24,
  paddingTop: 24,
  paddingBottom: 24,
  paddingLeft: 24,
  fontFamily: "Knewave, cursive",
  color: '#ffffff',
  fontSize: 24
}

const Header = () => {
  /* Step 2: Use the useStaticQuery hook and
    graphql tag to query for data
    (The query gets run at build time) */
    /*
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  */

  return (
    <header>
      <h1 style={headingStyles}>SOVEREIGN MUTUAL</h1>
      {/* Step 3: Use the data in your component */}
      {/*<h1>{ data.site.siteMetadata.title }</h1> */}
    </header>
  )
}

export default Header
