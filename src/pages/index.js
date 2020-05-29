import React, { Fragment } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Landing from "../components/landing"
import Cv from "../components/cv"

const IndexPage = () => (<Fragment>
  <Landing />
  <Cv />
</Fragment>)

export default IndexPage
