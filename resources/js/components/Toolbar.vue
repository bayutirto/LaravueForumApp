<template>
     <v-toolbar class="blue darken-2 white--text">

        <v-toolbar-title class="mx-4">Forum App</v-toolbar-title>

        <v-spacer></v-spacer>

        <div class="hidden-sm-and-down">

        <router-link to="/forum">
          <v-btn tile text class="ma-2 white--text"><span>Forum</span></v-btn>
        </router-link>

        <router-link to="/question">
          <v-btn tile text class="ma-2 white--text"><span>Question</span></v-btn>
        </router-link>

        <router-link to="/category">
          <v-btn tile text class="ma-2 white--text"><span>Category</span></v-btn>
        </router-link>

        <router-link to="/login">
          <v-btn tile class="ma-2 white--text" outlined color="white"><span>Login</span></v-btn>
        </router-link>

        </div>

      </v-toolbar>

</template>

<script>
export default {

}
</script>

<style>

</style>
