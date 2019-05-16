<template>
  <Layout>
    <h2 class="article__title article__title--single">Archive</h2>
    <ul>
      <div v-for="edge in $page.allBlogPost.edges" class="arch-item">
        <li>
          <a :href="edge.node.slug" class="arch-title">{{ edge.node.title }}</a>
          <time>{{ edge.node.date }}</time>
        </li>
        <div v-if="edge.node.description" class="arch-desc">{{ edge.node.description }}</div>
      </div>
    </ul>
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
.arch-item {
  margin-bottom: 10px;
  animation: itemshow 0.9s linear;
  -webkit-animation: itemshow 0.9s linear;
  -moz-animation: itemshow 0.9s linear;
  li {
    list-style-type: lower-greek;
  }
}
.arch-title {
  color: var(--color-text);
  font-size: 20px;
  font-family: Lora,Georgia,"Hiragino Sans GB",sans-serif;
  font-weight: bold;
  padding-right: 10px;
  &:hover {
    background: -webkit-gradient(linear,left top,right top,from(#d00606),to(#1c5dc1));
    background: linear-gradient(90deg,#d00606,#1c5dc1);
    -webkit-text-fill-color:transparent;
    text-shadow:none;
    -webkit-background-clip:text;
    -webkit-box-decoration-break:clone;
    box-decoration-break:clone;
  }
}
.arch-desc {
  color: var(--color2);
}

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
