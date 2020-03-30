<template>
     <v-toolbar class="blue darken-2 white--text">

        <v-app-bar-nav-icon>
            <v-icon large color="blue lighten-4 mx-auto">mdi-alpha-b-box</v-icon>
        </v-app-bar-nav-icon>

        <v-toolbar-title>BayHub</v-toolbar-title>

        <v-spacer></v-spacer>

        <div class="hidden-sm-and-down">

        <router-link
        v-for="item in items"
        :key="item.title"
        :to="item.to"
        >
          <v-btn v-if="item.show" text tile class="ma-2 blue darken-2 white--text"><span>{{item.title}}</span></v-btn>
        </router-link>

        </div>

      </v-toolbar>

</template>

<script>
export default {
    data(){
        return {
            items:[
                {title : 'Forum', to:'/forum', show: true},
                {title : 'Question', to:'/ask-question', show: User.loggedIn()},
                {title : 'Category', to:'/category', show: User.loggedIn()},
                {title : 'Login', to:'/login', show: !User.loggedIn()},
                {title : 'Logout', to:'/logout', show: User.loggedIn()},
            ]
        }
    },
    created(){
        EventBus.$on('logout', () =>  {
            User.logout()
        })
    }

}
</script>

<style>

</style>
