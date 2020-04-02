<template>
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/archive">Archive</g-link>
        <g-link class="nav__link" to="/about">About</g-link>
      </nav>
    </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /*margin-bottom: 20px;*/
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>