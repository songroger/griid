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
    <span class="article__align-right">
        <a href="/archive">more</a>
    </span>
    <!-- <Pager :info="$page.allBlogPost.pageInfo"/> -->
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
  allBlogPost (perPage: 5, page: $page) @paginate {
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
  .article {
    margin-bottom: 0.1rem;
    border-bottom: 1px solid rgba(0,0,0,.04);
    padding: 20px 0 20px;
  }

  .article__title {
    &--single {
      font-family: var(--title-font);
    }

    a {
      color: var(--color-text);
      font-family: var(--title-font);
      transition:all 0.25s ease-in;
      padding-right: 10px;

      &:hover {
        color: var(--color2);
        text-decoration: none;
      }
    }
  }

  .article__excerpt {
              color: #999;
          }

  .article__align-right {
    display: flex;
    justify-content: flex-end;
    text-transform: uppercase;
    &:hover {
      background: -webkit-gradient(linear,left top,right top,from(#d00606),to(#1c5dc1));
      background: linear-gradient(0deg,#d00606,#1c5dc1);
      -webkit-text-fill-color:transparent;
      text-shadow:none;
      -webkit-background-clip:text;
      -webkit-box-decoration-break:clone;
      box-decoration-break:clone;
    }
  }
</style>
