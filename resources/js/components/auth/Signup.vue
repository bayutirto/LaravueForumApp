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
          <v-form @submit.prevent="signup">
            <v-card tile class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Sign Up</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>


                  <v-text-field
                    label="Full Name"
                    v-model="form.name"
                    prepend-icon="mdi-account"
                    type="text"
                    :error-messages="errors.name"
                    required
                  />

                  <v-text-field
                    label="Email"
                    v-model="form.email"
                    prepend-icon="mdi-account"
                    type="email"
                    :error-messages="errors.email"
                    required
                  />

                  <v-text-field
                    id="password"
                    label="Password"
                    v-model="form.password"
                    prepend-icon="mdi-lock"
                    type="password"
                    :error-messages="errors.password"
                    required
                  />

                  <v-text-field
                    id="password"
                    label="Confirm Password"
                    v-model="form.password_confirmation"
                    prepend-icon="mdi-lock"
                    type="password"
                    :error-messages="errors.password_confirmation"
                    required
                  />

              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <router-link to="/login">
                    <v-btn tile text class="ma-2">Back</v-btn>
                </router-link>
                <v-btn tile color="blue darken-2 white--text" type="submit">Sign Up</v-btn>
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
                name:null,
                email:null,
                password:null,
                password_confirmation:null
            },
            errors:{}
        }
    },
    created(){
        if(User.loggedIn()){
            this.$router.push({name: 'forum'})
        }
    },
    methods:{
        signup(){
            axios.post('/api/auth/signup',this.form)
            .then(res => {
                User.responseAfterLogin(res)
                this.$router.push({name: 'forum'})
                })
            .catch(error => this.errors = error.response.data.errors)
        }
    }

}
</script>

<style>

</style>
