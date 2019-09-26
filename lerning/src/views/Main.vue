<template>
  <v-card class="overflow-hidden">
  <v-app-bar
  color="teal lighten-1"
  elevate-on-scroll
  app
  >
  <v-app-bar-nav-icon
  @click.stop="drawer = !drawer"
  ></v-app-bar-nav-icon>

  <v-toolbar-title>{{title}}</v-toolbar-title>

  <div class="flex-grow-1"></div>

  <v-btn icon>
  <v-icon>mdi-magnify</v-icon>
  </v-btn>

  <v-btn icon>
  <v-icon>mdi-heart</v-icon>
  </v-btn>

  <v-btn icon>
  <v-icon>mdi-dots-vertical</v-icon>
  </v-btn>
  </v-app-bar>
  <v-sheet
  id="scrolling-techniques"
  class="overflow-y-auto"
  color="teal lighten-5"
  
  >
  <v-container class="blue-grey lighten-3">
  <v-row justify="center">
  
  <router-view />
  
  </v-row>
  <v-navigation-drawer
  v-model="drawer"
  app
  temporary

  >
  <v-list-item>
  <v-list-item-avatar>
  <v-img src="https://randomuser.me/api/portraits/men/21.jpg"></v-img>
  </v-list-item-avatar>

  <v-list-item-content>
  <v-list-item-title> {{user}} </v-list-item-title>
  </v-list-item-content>

  <v-list-item-icon>
    <v-icon @click="close">{{close_nav}}</v-icon>
  </v-list-item-icon>
  </v-list-item>
  

  <v-divider></v-divider>
  <v-list dense>
  <v-list-item
  v-for="item in items"
  :key="item.title"
  link
  @click="goTo(item.goto)"
  >
  <v-list-item-icon>
  <v-icon>{{ item.icon }}</v-icon>
  </v-list-item-icon>

  <v-list-item-content>
  <v-list-item-title>{{ item.title }}</v-list-item-title>
  </v-list-item-content>
  </v-list-item>
  </v-list>
  </v-navigation-drawer>
  </v-container>
  </v-sheet>

  <v-footer
  
  class="font-weight-medium"
  >
  <v-col
  class="text-center"
  cols="12"
  >
  {{ new Date().getFullYear() }} — <strong>Chp-Lab</strong>
  </v-col>
  </v-footer>

  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        drawer: null,
        items: [
          { title: 'Factory', icon: 'mdi-factory', goto: '/factory'},
          { title: 'Department', icon: 'mdi-office-building' , goto: '/department'},
          { title: 'Machine', icon: 'mdi-robot-industrial' , goto: '/machine'},
          { title: 'Admin', icon: 'mdi-settings' , goto: '/admin'},
          { title: 'Logout', icon: 'mdi-account', goto: '/login' },
        ],
        title: 'Menu',
        user: 'CTO',
        close_nav: 'mdi-backspace'
      }
    },
    methods: {
        async goTo (url) {
            console.log(url)
            if(url == '/login')
            {
                const {value: logout} = await this.$swal({
                    title: '<strong>Logout!</strong>',
                    type: 'warning',
                    showCloseButton: true,
                    showCancelButton: true,
                    focusConfirm: false,
                    confirmButtonText:
                        'Confirm',
                    confirmButtonAriaLabel: 'Thumbs up, great!',
                    cancelButtonText:
                        'Cancle',
                    cancelButtonAriaLabel: 'Thumbs down'
                })
                console.log(logout)
                if(logout)
                {
                    this.$router.push(url)
                }
            }
            else
            {
                this.$router.push(url)
            }
            
            
        },
        close () {
          console.log("close")
          this.drawer = !this.drawer
        }
    },
    
  }
</script>