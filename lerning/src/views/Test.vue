<template>
  <div class="test">
        <v-row>
            <v-col cols="12" class="text-center">
                <h1> {{header}} </h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-card
                    :class=mystyle
                    color="blue"
                    outlined
                    tile
                >
                {{ message }}
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col
                v-for="n in 2"
                :key="n"
                cols="6"
            >
                <v-card
                    :class=mystyle
                    color="yellow"
                    outlined
                    tile
                >
                {{ message }}
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col
                v-for="n in 3"
                :key="n"
                cols="4"
            >
                <v-card
                    :class=mystyle
                    color="red"
                    outlined
                    tile
                >
                {{ message }}
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col
                v-for="n in 4"
                :key="n"
                cols="3"
            >
                <v-card
                    :class=mystyle
                    color="green"
                    outlined
                    tile
                >
                {{ message }}
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col
                v-for="n in 6"
                :key="n"
                cols="2"
            >
                <v-card
                    :class=mystyle
                    color="pink"
                    outlined
                    tile
                >
                {{ message }}
                </v-card>
            </v-col>
        </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    header: "แบบทดสอบ Vue",
    message: "Vuetify",
    mystyle: "mx-2 white--text text-center py-3"
  }),
};
</script>
<style>

</style>