import React from 'react'
import Content from './Content'
import {graphql, useStaticQuery, Link} from 'gatsby'
import styles from './courses.css'



//export the query from graphql


const query = graphql `{
    allStrapiContents(sort: {fields: published, order: DESC}) {
      nodes {
        url
        title
        info
        image {
          childImageSharp {
            fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        id
      }
    }
  }
  `


function LatestWork () {
    // pass the query
    //get the nodes, rename them content and assign value to allStrapiContent
    const data = useStaticQuery(query)
    const filteredData = data.allStrapiContents.nodes
    // console.log(filteredData)

   
    
    return (
        <section className="items">
  
        <div className="center">
        {
        filteredData.map(item => {
            return <Content key={item.id} {...item}></Content> 
        })
    } 
        </div>
      <Link to="/courses"> All Work </Link>
        </section>
    )
}

export default LatestWork