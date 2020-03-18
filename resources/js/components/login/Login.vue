<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
          <v-form @submit.prevent="login">
            <v-card tile class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>

                  <v-text-field
                    label="Email"
                    v-model="form.email"
                    prepend-icon="mdi-account"
                    type="email"
                    required
                  />

                  <v-text-field
                    id="password"
                    label="Password"
                    v-model="form.password"
                    prepend-icon="mdi-lock"
                    type="password"
                    required
                  />

              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn tile color="blue darken-2 white--text" type="submit">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-form>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
    data(){
        return {
            form :{
                email:null,
                password:null
            }
        }
    },
    methods: {
        login(){
            User.login(this.form)
        }
    }

}
</script>

<style>

</style>
