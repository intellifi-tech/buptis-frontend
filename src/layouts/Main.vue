<template>
  <div>
    <div class="content-area__content">
      <transition mode="out-in">
        <router-view @changeRouteTitle="changeRouteTitle"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routeTitle: this.$route.meta.pageTitle
    };
  },
  watch: {
    $route() {
      this.routeTitle = this.$route.meta.pageTitle;
    }
  },
  methods: {
    changeRouteTitle(title) {
      this.routeTitle = title;
    }
  }
};
</script>

<style>
</style>
