<template>
<footer class="footer">
    <div class="col">
        © 2019-2021 {{ $static.metadata.siteName }} </a>
    </div>
</footer>
</template>
<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<style lang="scss">
.footer {
  padding: 1.6rem 0;
  box-shadow: inset 0 1px 0 var(--color-border);
  .col {
      font-size: 13px;
      text-align: center;
  }
}
</style>