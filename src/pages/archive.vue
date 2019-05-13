<template>
  <Layout>
    <article v-for="edge in $page.allBlogPost.edges" :key="edge.node.id" class="article">
      <h2 class="article__title">
        <a :href="edge.node.slug">{{ edge.node.title }}</a>
        <time datetime="2016-10-12">{{ edge.node.date }}</time>
      </h2>

        <p class="article__excerpt">
          {{ edge.node.description }}
        </p>
    </article>
    <Pager :info="$page.allBlogPost.pageInfo"/>
  </Layout>
</template>

<script>
import { Pager } from 'gridsome'

export default {
  components: {
    Pager
  }
}
</script>

<page-query>
query Blog ($page: Int) {
  allBlogPost (perPage: 3, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        slug
        description
        date (format: "MMMM D, YYYY")
      }
    }
  }
}
</page-query>

<style lang="scss">
  [role="navigation"] {
    text-align: center;
    a {
        display: inline-block;
        background-color: rgba(0,0,0,.18);
        width: 15px;
        text-align: center;
        border-radius: 16px;
        color: #f5f2f2;
        font: 900 13px/16px -apple-system,BlinkMacSystemFont,Helvetica Neue,sans-serif;
        vertical-align: middle;
        margin-right: 2px;
        &:hover {
            color: #fff;
            background-color: rgba(0,0,0,.98);
        }
    }
    .active--exact {
        color: #fff;
        background-color: rgba(0,0,0,.98);
        }
  }
</style>
