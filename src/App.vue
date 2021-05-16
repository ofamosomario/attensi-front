<style>
@import url('https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css');
@import url('https://fonts.googleapis.com/css?family=Material+Icons');

#app {
  background-color: #f0f2f2
}

</style>


<template>
  <v-app id="quiz-game" color="background">
    <div>
      <v-main>

        <router-view/>
        
      </v-main>
    </div>
  </v-app>
</template>


<script>
export default {
  name: 'App',

  components: {
  },

  data: () => ({
  }),
};
</script>
