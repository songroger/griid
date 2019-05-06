<template>
  <Layout>
    <div class="article">
      <h1>{{ $page.blogPost.title }}</h1>
      <span>{{ $page.blogPost.date }}</span>
      <g-image :src="$page.blogPost.image"/>
      <div class="content" v-html="$page.blogPost.content" />
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.blogPost.title
    }
  }
}
</script>

<page-query>
  query BlogPost ($path: String!) {
    blogPost (path: $path) {
      title
      date (format: "D MMMM, YYYY")
      content
      image
    }
  }
</page-query>

<style lang="scss">
.article {
    margin-top: 15px;

    h1 {
        font-size: 40px;
    }

    img {
        width: 100%;
        border-radius: 5px;
    }

    a {
        color: #4dba87;
        text-decoration: underline;

        &:hover {
            text-decoration: none;
        }

    }

    span {
        font-size: 80%;
        margin-bottom: 20px;
    }

    ol, ul {
        list-style-position: outside;
    }

    ul {
        list-style: disc;
        padding-left: 20px;
    }

    .content {
        p:first-child {
            margin-top: 15px;
        }

        p {
            margin-top: 0;
            margin-bottom: 10px;
            line-height: 1.5;
        }

    }

}
</style>