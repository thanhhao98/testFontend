<template>
  <v-footer
    dark
    height="auto"
  >
    <v-card
      class="flex"
      flat
      tile
    >

      <v-card-actions class="grey darken-3 justify-center">
        &copy;{{year}} — <strong>Ilearning</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
var dt = new Date()
export default {
  data: () => ({
    year: dt.getYear() + 1900
  })
}
</script>
