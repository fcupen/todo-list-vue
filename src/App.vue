<template>
  <div id="nav">
    <router-link to="/">ToDo List</router-link> 
    <!-- |
    <router-link to="/about">About</router-link> -->
  </div>
  <div class="container">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.cursor-pointer {
  cursor: pointer;
}
.flex {
  display: flex;
}
.w100 {
  width: 100%;
}
</style>
