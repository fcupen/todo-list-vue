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
.text-checked {
  text-decoration: line-through;
}



.lds-dual-ring {
  position: absolute;
  display: inline-block;
  width: 20px;
  height: 20px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 14px;
  height: 14px;
  margin: 8px;
  border-radius: 50%;
  border: 2px solid #42b983;
  border-color: #42b983 transparent #42b983 transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
