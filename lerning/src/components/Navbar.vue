<template>
<v-container>
  <v-card
    class="mx-auto"
    color="blue-grey darken-1"
    dark
  >
  <v-row>
      <v-col :class=mystyle2 cols="12">
        <h1>{{header}}</h1>
      </v-col>
  </v-row>
  </v-card>
</v-container>
</template>
<script>
  export default {
    data: () => ({
      header: 'Chp Lab Co.,Ltd',
      mystyle2: "mx-4 white--text text-left py-3",
    }),
  }
</script>