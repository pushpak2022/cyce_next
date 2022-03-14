import React, { Fragment } from "react"
import MetaTags from "react-meta-tags"
import LayoutOne from "../layouts"
import Breadcrumb from "../components/UI/breadcrumb"
import BlogFeatured from "../containers/blog/blog-featured"
import BlogPostWithSidebar from "../containers/blog/blog-post-with-sidebar"

const Blog = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>pod | Blog</title>
        <meta name="description" content="Automating Your Tedious Processes With Artificial Intelligence." />
      </MetaTags>
      <LayoutOne>
        {/* breadcrumb */}
        <Breadcrumb title="Voopo News" />
        {/* blog featured */}
        <BlogFeatured />
        {/* blog post with sidebar */}
        <BlogPostWithSidebar />
      </LayoutOne>
    </Fragment>
  )
}

export default Blog
