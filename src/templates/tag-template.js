import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO"

const TagTemplate = ({ pageContext: { tag }, data }) => {
  const recipes = data.allContentfulRecipe.nodes
  console.log(recipes)
  return (
    <Layout>
      <SEO title={tag} />
      <main className="page">
        <h2>{tag}</h2>
        <div className="tag-recipes">
          <RecipesList recipes={recipes} />
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query GetRecipeByTag($tag: String) {
    allContentfulRecipe(filter: { content: { tags: { eq: $tag } } }) {
      nodes {
        title
        prepTime
        cookTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

export default TagTemplate
