import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO"

const About = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <SEO title="About" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>About Us.</h2>
            <p>
              Ex do pariatur veniam do. Nisi occaecat quis id nisi sit irure.
              Incididunt officia dolor officia aute sint qui. Sint sit commodo
              dolore do veniam do cupidatat. Quis non ex mollit officia
              excepteur excepteur labore pariatur elit.
            </p>
            <p>
              Eu duis irure et commodo id exercitation nulla excepteur cupidatat
              id proident aliquip irure. Consectetur et esse nulla in
              adipisicing incididunt dolor ullamco minim velit qui voluptate.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person Pouring Salt in Bowl"
            className="about-img"
            placeholder="tracedSVG"
          />
        </section>
        <section className="featured-recipes">
          <h5>Check out our featured recipes!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        prepTime
        cookTime
        image {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
    }
  }
`

export default About
