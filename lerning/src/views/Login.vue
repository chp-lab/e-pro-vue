<template>
  <div class="login">
    <v-container class="grey lighten-5">
      <h1> {{header}} </h1>
      <h2 v-if="show"> {{ label }}</h2>
      <li v-for="(item, index) in items" :key="index">
        {{ item.message }}
      </li>
      
    </v-container>
    <v-container class="grey lighten-5">
      <v-row>
        <v-col
        cols="6"
        xs="2"
        sm="4"
        md="6"
        lg="8"
        xl="10"
        >
          <v-text-field 
            label="Email"
            v-model="email"
          >
          </v-text-field>
          <v-text-field 
            label="Total score"
            v-model="score"
          >
          </v-text-field>
        </v-col>
        <v-col
          cols="6"
          xs="2"
          sm="4"
          md="6"
          lg="8"
          xl="10"
        >
          <h3>Calculate</h3>
          <v-btn color="primary" @click="display">Enter</v-btn>
          <h3>Grade</h3>
          <v-card
            class="pa-2"
            outline
            title
            v-model="email"
            >
            {{ score }}
          </v-card>
          
        </v-col>
        
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    header: 'Login page',
    label: 'Items',
    show: true,
    items: [
      {message: 'first'},
      {message: 'second'},
      {message: 'third'}
    ],
    email:'mycontact@email.com',
    score: '0',
    message: 'HelloWorld!'
  }),
methods: {
  display () {
    alert('Hello World!')
  },
}
};
</script>
<style>
h1 {
  background-color: lightblue;
}
</style>