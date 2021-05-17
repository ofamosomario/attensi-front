<template>
  <div id="app-base-container">

    <br />

    <ImageLogo></ImageLogo>

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
          
      <v-card
        class="mx-auto"
        max-width="100%"
        outlined
        elevation="1"
        style="width:100%"
      >

        <v-card-text>
          
          <v-tabs icons-and-text centered right v-model="tab" height="60">

            <v-tab key="signin">
              SING IN
              <v-icon>mdi-trophy</v-icon>
            </v-tab>
            <v-tab key="signup">
              SIGN UP
              <v-icon>mdi-account-plus</v-icon> 
            </v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item>

              <v-row align="center" justify="center">
                <v-col class="d-flex child-flex" cols="6">
                  <center><h3>SIGN IN</h3></center>
                </v-col>
              </v-row>
              <v-row align="center" justify="center">
                <v-col cols="12" sm="8" md="4">
                  
                  <v-divider></v-divider>

                  <v-card class="elevation-0">

                    <v-form @submit.prevent="signIn" ref="form" v-model="valid" :lazy-validation="lazy">

                      <v-card-text style="border:0px">
                        
                        <v-text-field
                          label="E-Mail"
                          name="email"
                          prepend-icon="mdi-account"
                          type="text"
                          v-model="email"
                          :rules="rul.req"
                        ></v-text-field>

                        <v-text-field
                          id="password"
                          label="Senha"
                          name="password"
                          prepend-icon="mdi-lock"
                          type="password"
                          v-model="password"
                          :rules="rul.req"
                        ></v-text-field>
                      
                      </v-card-text>

                      <v-card-actions class="justify-center">
                      
                        <v-btn text outlined 
                          type="submit"
                          color="success"
                          :disabled="!valid">
                          Sign In
                        </v-btn>

                      </v-card-actions>

                      <v-card-actions>
                      </v-card-actions>

                    </v-form>
                    
                  </v-card>
                </v-col>
              </v-row>

            </v-tab-item>
            <v-tab-item>

              <h3>SIGN UP</h3>

            </v-tab-item>
          </v-tabs-items>

        </v-card-text>

      </v-card>

    </v-container>

  </div>
</template>


<script>
import Api from '@/backend/Api'
import ImageLogo from '@/components/images/Logo'
export default {
  name: 'Auth',
  components: {
    ImageLogo
  },
  data: () => ({
    tab: '',
    valid: true,
    lazy: false,
    email: '',
    password: '',
    sb: {
      multiLine: true,
      snackbar: false,
      text: ''
    },
    rul: {
      req: [
        v => !!v || 'O campo é obrigatório.',
      ]
    },
  }),

  methods: {

    signIn() {
      
      Api().request({
        method: 'POST',
        url:'/api/v1/auth',
        data: {
          email: this.email,
          password: this.password 
        }
      }).then(() => {
        this.$router.push("/management-panel");
      });

    }

  }

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
    color: #4d4c4c !important;
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