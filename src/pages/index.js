import * as React from "react"
//import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Hi-Risk Records | Hip Hop" />
    <section class="hero">
    <StaticImage
      src="../images/hr.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Hi Risk Records"
      style={{ marginBottom: `1.45rem` }}
    />
      </section>

  </Layout>
)

export default IndexPage
