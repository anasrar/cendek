<template>
  <v-app>
    <v-toolbar color="indigo darken-4" dark app fixed>
      <v-flex md2 class="hidden-sm-and-down"></v-flex>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>

      <v-toolbar-title class="text-uppercase">
        <router-link to="/" class="white--text no-underline">
          <span>CEN</span>
          <span class="font-weight-light">DEK</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-for="item in menu" :key="item.icon" :href="item.link" flat>
        <v-icon left>{{ item.icon }}</v-icon>
        {{ item.title }}
      </v-btn>
      <v-flex md2 class="hidden-sm-and-down"></v-flex>
    </v-toolbar>
    <v-content></v-content>
    <v-layout column>
      <router-view></router-view>
      <v-footer height="auto" color="indigo darken-4">
        <v-layout justify-center row wrap>
          <v-btn v-for="item in menu" :key="item.title" :href="item.link" color="white" flat round>
            <v-icon left>{{ item.icon }}</v-icon>
            {{ item.title }}
          </v-btn>
          <v-flex indigo darken-2 py-3 text-xs-center white--text xs12>
            &copy;{{ year }} —
            <strong>Anas RAR</strong>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-layout>
  </v-app>
</template>

<script>
export default {
  data: () => ({})
};
</script>

<style scoped>
.no-underline {
  text-decoration: none;
}
</style>
