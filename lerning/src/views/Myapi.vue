<template>
  <div class="myapi">
    <v-container class="grey lighten-5">
      <v-row>
        <v-col cols="12" class="text-center">
            <h1> {{header}} </h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="text-center">
            <h1> {{message}} </h1>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  created () {
    this.getData()
  },
  data: () => ({
    header: 'api tester',
    type: false,
    message: ''
  }),
methods: {
  getData() {
    const url = 'http://18.140.173.239:81/test'
    this.axios.get(url).then((response)=>{
      console.log(response.data)
      this.type = response.data.type
      console.log(this.type)
      if(this.type)
      {
        this.message = response.data.test
      }
    })
  }
}
};
</script>