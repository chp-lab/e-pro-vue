/* eslint-disable */
<template>
      <v-container class="fill-height">
      <v-row
        align="center"
        justify="center"
      >
        <v-card
            class="mx-auto"
            height="300"
            width="500"
        >
            <v-container class="grey lighten-5">
                <v-form
                    ref="form1"
                    v-model="valid"
                    lazy-validation
                >
                        <h1 :class=mystyle> {{header}} </h1>
                        <v-row
                            class="px-4"    
                        >
                            <v-col
                                cols="6"
                            >
                                <v-text-field
                                    v-model="email"
                                    :rules="emailRules"
                                    label="E-mail"
                                    name="email"
                                    required
                                    v-on:keypress="checkInput($event)"
                                >
                                </v-text-field>
                            </v-col>
                            <v-col 
                                cols="6"
                            >
                                <v-text-field
                                    v-model="password"
                                    :append-icon="show1 ? visibility : visibility_off"
                                    :prepend-icon="icon"
                                    :rules="[rules.required, rules.min]"
                                    :type="show1 ? 'text' : 'password'"
                                    name="password"
                                    label="Normal with hint text"
                                    hint="At least 8 characters"
                                    counter
                                    @click:append="show1 = !show1"
                                    v-on:keypress="checkInput($event)"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col :class=mystyle2 cols="12">
                                <v-btn :disabled="!valid" class="mr-4" @click="submit">submit</v-btn>
                                <v-btn @click="clear">clear</v-btn>
                            </v-col>
                        </v-row>
                        <v-row
                            align="center"
                        >
                        </v-row>
                    
                </v-form>
            </v-container>

        </v-card>
      </v-row>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
        valid: true,
        header: 'Inet Hatyai Login',
        email:'',
        password:'',
        show1: false,
        rules: {
            required: value => !!value || 'Required.',
            min: v => v.length >= 8 || 'Min 8 characters',
            emailMatch: () => ('The email and password you entered don\'t match'),
        },
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
        icon: 'mdi-fingerprint',
        visibility: 'mdi-eye',
        visibility_off: 'mdi-eye-off',
        mystyle: "blue mx-1 white--text text-center py-3",
        mystyle2: "mx-1 white--text text-center py-3",
        mystyle3: "mx-1 grey--text text-right",
        credit:'Cr.Chatepth'
    }),

    methods: {
        async submit () {
            var url = 'http://localhost:8081/api/v1/users/login'
            console.log(this.email)
            console.log(this.password)
            try {
                // var {data} = await this.axios.get(url)
                var {data} = await this.axios.post(url, {"username": this.email, "password": this.password})
                this.$swal(this.header, data.message, data.type ? 'info':'error')
                console.log(data)
            } catch (err){
                console.log(err.message)
            }
            
        },
        clear () {
            this.$refs.form1.reset()
            this.email = ''
            this.password = ''
        },
        checkInput (event) {
            if(event.key == 'Enter')
            {
                this.submit()
            }
        }
    },
  }
</script>
