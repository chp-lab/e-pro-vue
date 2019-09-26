<template>
<v-container>
  <v-card
    class="mx-auto"
    color="red lighten-1"
  >
  <v-row
    align="center"
    justify="center"
  >
      <v-col cols="5">
        <v-card
            class="mx-auto"
            height="300"
            width="500"
        >
        <v-img
          src="https://www.upslide.net/content/uploads/2016/07/Stock-Exchange.gif"
          lazy-src="https://picsum.photos/id/11/10/6"
          aspect-ratio="1"
          class="grey lighten-2"
          max-width="500"
          max-height="300"
        ></v-img>
        </v-card>
      </v-col>
      <v-col cols="5">
        <v-card
            class="mx-auto"
            height="300"
            width="500"
        >
        <v-img
          src="https://www.upslide.net/content/uploads/2016/07/Clustered-Column.gif"
          lazy-src="https://picsum.photos/id/11/10/7"
          aspect-ratio="1"
          class="grey lighten-2"
          max-width="500"
          max-height="300"
        ></v-img>
        </v-card>
      </v-col>
  </v-row>
  </v-card>
</v-container>
</template>
<script>
  export default {
    data: () => ({
      mystyle2: "mx-1 white--text text-right py-3",
    }),
    methods: {
        
    }
  }
</script>