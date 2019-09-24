<template>
  <div class="login">
    <v-container class="grey lighten-5">
      <h1> {{header}} </h1>
      <h2> {{email}} </h2>
      <h3 v-if="show"> {{ label }}</h3>
      <li v-for="(item, index) in items" :key="index">
        {{ item.message }}
      </li>
      
    </v-container>
    <v-container class="grey lighten-5">
      <v-row>
        <v-col
        cols="6"
        >
          <v-text-field 
            label="Email"
            v-model="email"
          >
          </v-text-field>
        </v-col>
        <v-col
          cols="6"
        >
          <v-text-field 
            label="Total score"
            v-model="score"
            v-on:keypress="checkInput($event)"
            v-mask="'###'"
          >
          </v-text-field>
        </v-col>
        <v-col
          cols="6"
        >
          <h3>Calculate</h3>
          <v-btn color="primary" @click="display">Enter</v-btn>
          <h3>Grade</h3>
          <v-card
            :class=mystyle
            color="blue"
            tile
            outline
            >
            {{ grade }}
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
    grade: '-',
    message: 'HelloWorld!',
    mystyle: "mx-2 white--text text-center py-3"
  }),
methods: {
  display () {
    console.log(this.score)
    var tmp_score = parseInt(this.score)
    if(tmp_score >= 80)
    {
      this.grade = 'A'
    }
    else if(tmp_score >= 70)
    {
      this.grade = 'B'
    }
    else if(tmp_score >= 60)
    {
      this.grade = 'C'
    }
    else if(tmp_score >= 50)
    {
      this.grade = 'D'
    }
    else
    {
      this.grade = 'F'
    }
  },
  checkInput($event) {
    console.log($event.key)
    if(!isNaN($event.key))
    {
      console.log("number")
    }
    else
    {
      console.log("not number")
    }
  }
}
};
</script>