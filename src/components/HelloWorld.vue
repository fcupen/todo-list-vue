<template>
  <h1 >{{ msg }}</h1>

  <button v-on:click="updateTitle()">Cambiar</button>
  {{ $store.state.title }}
  {{ title }}
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { computed, ComputedRef } from "vue";
import { useStore } from "vuex";

@Options({
  props: {
    msg: String,
  },
})
export default class HelloWorld extends Vue {
  msg!: string;
  store = useStore();
  title: ComputedRef<any> | null = null;
  updateTitle() {
    this.store.commit("UPDATE_TITLE", new Date().getTime());
    this.$router.push('/')
  }
  created() {
    this.title = computed(() => this.store.state.title);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
