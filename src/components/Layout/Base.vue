<template>
  <div id="app-base-container">

    <v-app-bar
      app
      color="secondary"
      elevation="1"
      dark
    >
      <v-container>

        <v-row 
          align="center" 
          justify="center"
          no-gutters
        >
          <v-col align="left" justify="center">
          </v-col>
          
          <v-col align="center" justify="center">
            <span 
              class="white--text headline"
            >
              Quiz Game
            </span>
          </v-col>
          
          <v-col align="right" >
          </v-col>
        </v-row>

      </v-container>
    </v-app-bar>
    
    <v-container id="main-container">
      <router-view></router-view>
    </v-container>

    <v-footer class="footer" padless
    >
      <v-card
        flat
        tile
        width="100%"
        color="secondary"
        class="text-center "
      >
        <div class="footer">
          <div layout="row" layout-align="center center" class="layout-align-center layout-row">
            <div layout="row" layout-xs="column" class="layout-xs-column layout-row">
              <div flex="100" flex-xs="100" class="flex-xs-100 flex-100 footer-copyright">
                Mário Augusto - 2021 - tkyakow@gmail.com
              </div>
            </div>
          </div>
        </div>
      </v-card>
    </v-footer>

  </div>
</template>


<script>
export default {
  name: 'BaseLayout',
  components: {
  },
  data: () => ({
  }),
};
</script>

<style scoped>
  #main-container {
    height: 100%;
    min-height: calc(100vh - 123px);
    max-width: 1182px;
  }
  .footer {
    width: 100%;
    margin: 0;
    height:60px;
    z-index: 1;
    position: relative;
    list-style: outside none none;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 12px !important;
    line-height: 1.42857143 !important;
    box-sizing: border-box;
  }

  .footer-copyright {
    margin-top: 15px;
    color: #fff;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 0 0px;
    line-height: 12px;
    display: inline-block;
    cursor: pointer;
    text-decoration: none;
    background-color: transparent;
    list-style: outside none none;
    box-sizing: border-box;
  }
</style>