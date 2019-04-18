<template>
  <v-app>
    <Toolbar/>
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar.vue'
import Footer from './components/Footer.vue'
console.log(Toolbar)
export default {
  name: 'App',
  components: {
    Toolbar,
    Footer
  },
  data () {
    return {
      searchString: ''
    }
  },
  methods: {
    searchMovie () {
      this.$router.push('/search/' + this.searchString)
      this.searchString = ''
    }
  },
  computed: {
    dataAvailable () {
      return this.searchString !== null && this.searchString !== ''
    }
  }
}
</script>
