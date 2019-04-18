<template>
  <v-toolbar absolute
      color="grey lighten-4"
      app
      >
      <v-toolbar-title class="headline text-uppercase">
        <router-link
        to='/'
        tag='span'
        style='cursor: pointer'>
        Ilearning
        </router-link>
      </v-toolbar-title>
      <v-btn icon>
        <v-icon >apps</v-icon>
      </v-btn>
      <span class="mr-2">Categories</span>

      <v-spacer></v-spacer>
      <v-flex xs12 sm6 md3>
        <v-text-field
          label='Course name'
          v-model='searchString'
          >
        </v-text-field>
        </v-flex>
      <v-btn
        flat
        :disabled="!dataAvailable"
        @click="searchMovie"
      >
       <span class="mr-2">Search</span>
      </v-btn>
      <div v-if="isLogin" >
        <v-badge overlap>
          <template v-slot:badge>
            <span>3</span>
          </template>

          <v-avatar>
            <img
              v-bind:src="avt"
              alt="John"
            >
          </v-avatar>
        </v-badge>
      </div>
      <div v-else>
        <v-btn depressed small color="primary">Login</v-btn>
        <v-btn depressed small color="error">Register</v-btn>
      </div>
    </v-toolbar>
</template>

<script>
export default {
  data: () => ({
    isLogin: false,
    avt: 'https://cdn.vuetifyjs.com/images/john.jpg'
  })
}
</script>
