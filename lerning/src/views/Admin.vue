<template>
  <v-data-table
    v-model="selected"
    :headers="headers"
    :items="desserts"
    :single-select="singleSelect"
    item-key="name"
    show-select
    class="white elevation-1 my-10"
  >
    <template v-slot:top>
      <v-switch v-model="singleSelect" label="Single select" class="teal accent-3 pa-3"></v-switch>
    </template>
  </v-data-table>
</template>

<script>
  export default {
    created () {
        this.getData()
        console.log(process.env.VUE_APP_API)
    },
    data () {
      return {
        singleSelect: false,
        selected: [],
        headers: [],
        desserts: [],
      }
    },
    methods: {
        async getData () {
            console.log("get data")
            try {
                var res = await this.axios.get(process.env.VUE_APP_API + 'api/v1/admin')
            } catch (error) {
                console.log(error)
            }
            console.log(res)
            var data = res['data']
            console.log(data)
            this.headers = data.headers
            this.desserts = data.message
        }
    },
  }
</script>