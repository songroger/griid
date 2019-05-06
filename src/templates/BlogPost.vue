<template>
  <Layout>
    <div class="article">
      <h2>{{ $page.blogPost.title }}</h2>
      <time class="article__date">{{ $page.blogPost.date }}</time>
      <g-image :src="$page.blogPost.image"/>
      <div class="content" v-html="$page.blogPost.content" />
    </div>
    <div class="blocks">
        <div class="block__item block__item--mr">
            <a href="">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEjSURBVEhL7dW9SgNBFMXxRcTOxhcQJVjZ+RIBsbZQML1v4EdqW0tFK5/AThAFERvB2sJeWxsFBZP8D2ThMtxZ9g6LVQ78SNjsnZOBZbaapass4Bg3uC2kWa2htbIZYtwRlWVzB2+ohNbK5hHeUAmtlU2k6BtPeDXX/sz3UNE1PpJrosWXUWcbe3hHfU+oaBdreDHXZBNp1vGA+p5Q0QmUeQxwj0+sIs0B7GyoSAt7i85NP20uYGdDRadom2fY2VDRD3bg7cBGD4Z94iRUJGdYRFPOkc6Fi7SrfSzBSx8jpHPhIj1ll1hBmi18IZ2R1kW/uEIPaTag37yd1MI7kjfokNSR450UnqKiEo1F//aaOII3VOIQ2XT1KtcfbnyVz9IyVTUBiAUlXQ8i9twAAAAASUVORK5CYII=">
            </a>
        </div>
        <div class="block__item">
            <a href="">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADpSURBVEhL7dU9CsIwGMbxTO6Co3gCdxcHBxfxAKI3ET8mPYCHULyBgji5OnkL3TyB/t/hhVCTEJt06wO/pX2Tp7SFmDq50sAKZ1xKkrWyh+zlzRqfTKTMmytci8qQvby5wbXI54gpehjAfiOylzf/FLlezRh6P0vRC8WP3cQEOpOl6ARNG08UZ7IU7aEZwTWTvcj+LrakohmG6ELTglwTO+hsUlEHoWyhs5UWHaCzSUUP3LGBpg+5Jt7Q2aQiVfnPoOqin8QeEzFFwWNiCdeiopiiBbyJPcrn0MhZZN+TtfLAwaO8TmSM+QK/Li8ZbRWAnwAAAABJRU5ErkJggg==">
            </a>
        </div>
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
      date (format: "MMMM D, YYYY")
      content
      image
      slug
    }
  }
</page-query>

<style lang="scss">
.blocks {
  display: flex;
  align-items: center;
  margin-top: 0.2rem;
}

.blocks--space {
  justify-content: space-between;
}

.block__item--mr {
  margin-right: .8rem;
}

.blocks__item {
}

.article__date {
  margin-bottom: .8rem;
  font-size: .7501rem;
}

.article {
    margin-top: 15px;
    border-bottom: 1px solid rgba(0,0,0,.04);

    h2 {
        font-size: 1.5rem;
        line-height: 2.4rem;
    }

    img {
        width: 100%;
        border-radius: 5px;
        margin-top: .8rem;
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