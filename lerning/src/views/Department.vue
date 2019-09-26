<template>
<v-row>
    <v-cols cols=6
        v-for="item in items"
        :key="item.title"
    >
  <v-card
    class="mx-auto"
    outlined
  >
    <v-list-item three-line
        
    >
      <v-list-item-content>
        <div class="overline mb-4">{{item.title}}</div>
        <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn text>Button</v-btn>
      <v-btn text>Button</v-btn>
    </v-card-actions>
  </v-card>
    </v-cols>
</v-row>
</template>

<script>
  export default {
    data: () => ({
        items: [
          { title: 'Management', icon: 'mdi-factory', goto: '/factory'},
          { title: 'Production', icon: 'mdi-office-building' , goto: '/department'},
          { title: 'R&D', icon: 'mdi-robot-industrial' , goto: '/machine'},
          { title: 'Testing', icon: 'mdi-settings' , goto: '/admin'},
          { title: 'Maintainance', icon: 'mdi-settings' , goto: '/admin'},
          { title: 'Logout', icon: 'mdi-account', goto: '/login' },
        ],
    }),

    methods: {
        
    },
  }
</script>