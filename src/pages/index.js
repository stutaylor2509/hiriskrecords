import * as React from "react"
//import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Hi-Risk Records | Hip Hop" />
    <section className="hero">
    <StaticImage
      src="../images/hr.png"
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Hi Risk Records"
      className="logo"
    />
      </section>

  </Layout>
)

export default IndexPage
