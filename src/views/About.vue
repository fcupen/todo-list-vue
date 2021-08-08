<template>
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "../components/HelloWorld.vue";

@Options({
  components: {
    HelloWorld,
  },
})
export default class About extends Vue {
  // // `message` will not be reactive value
  // message = undefined
  message = null;
  data() {
    return {
      hello: undefined,
    };
  }

  // firstName = 'John'
  // lastName = 'Doe'

  // // Declared as computed property getter
  // get name() {
  //   return this.firstName + ' ' + this.lastName
  // }

  // // Declared as computed property setter
  // set name(value) {
  //   const splitted = value.split(' ')
  //   this.firstName = splitted[0]
  //   this.lastName = splitted[1] || ''
  // }

  // Declare lifecycle hook
  beforeCreate() {
    console.log("beforeCreate");
  }
  created() {
    console.log("created");
  }
  beforeMounted() {
    console.log("beforeMounted");
  }
  mounted() {
    console.log("mounted");
  }
  beforeUpdate() {
    console.log("beforeUpdate");
  }
  updated() {
    console.log("updated");
  }
  activated() {
    console.log("activated");
  }
  deactivated() {
    console.log("deactivated");
  }
  beforeDestroy() {
    console.log("beforeDestroy");
  }
  destroyed() {
    console.log("destroyed");
  }
  // // Declare render function
  // render() {
  //   return <div>Hello World!</div>;
  // }
}
</script>
