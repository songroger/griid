<template>
  <Layout>
    <article v-for="edge in $page.allBlogPost.edges" class="article">
      <h2 class="article__title">
        <a :href="edge.node.slug">{{ edge.node.title }}</a>
        <time datetime="2016-10-12">{{ edge.node.date }}</time>
      </h2>
      <a v-if="edge.node.coverdisplay" :href="edge.node.slug" class="article__cover_thumbnail">
            <div class="article_cover_image">
                <div v-bind:style='{ backgroundImage: "url(" + edge.node.cover + ")", }'></div>
            </div>
            <div class="article_cover_desc">
                <p class="article__excerpt">
                  {{ edge.node.description }}
              </p>
            </div>
      </a>
      <p v-else class="article__excerpt">
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
        coverdisplay
        cover
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

  .article__cover_thumbnail {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    .article_cover_image {
        flex-basis: 52%;
        width: 52%;
        box-sizing: border-box;
        -ms-flex-preferred-size: 52%;
        -webkit-box-sizing: border-box;
        div {
            /* background-color:  black; */
            /* width: 52%; */
            height: 0;
            padding-bottom: 60%;
            background: no-repeat 50%;
            background-size: cover;
            opacity: 1;
            -webkit-transition: .3s ease-in-out;
            transition: .3s ease-in-out;
            &:hover {
                opacity: .7;
            }

        }
    }
    .article_cover_desc {
        width: 48%;
        -ms-flex-preferred-size: 48%;
        flex-basis: 48%;
        padding-left: 40px;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
    }
}

@media screen and (max-width: 734px) {
  .article__cover_thumbnail {
    display: block;
    position: relative;
    .article_cover_image {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 1;
        div {
            padding-bottom: 0;
            height: 100%;
        }
    }
    .article_cover_desc {
        position: relative;
        width: 100%;
        z-index: 2;
        padding: 120px 40px 40px;
        background-color: rgba(0,0,0,.42);
        -webkit-transition: background-color .2s ease;
        transition: background-color .2s ease;
        &:hover {
            background-color: rgba(0,0,0,.68);
        }
        .article__excerpt {
            color: var(--color-desc);
        }
    }
  }
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

.article__date {
  display: block;
  margin-bottom: .8rem;
  font-size: .7501rem;
}

.article__cover {
  margin-bottom: 0.5rem;
  img {
    width: 100%
  }
}

.article__more {
  color: var(--color2);
  text-decoration: none;
  &:hover {
      transition:all 0.5s ease-in;
      -webkit-transition:all 0.5s ease-in;
      color: var(--color-text);
      text-decoration: none;
    }
}
</style>
