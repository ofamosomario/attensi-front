<template>

  <div>

    <ImageLogo></ImageLogo>

    <v-card
      class="mx-auto"
      max-width="100%"
      outlined
      elevation="1"
      style="width:100%"
    >

      <v-card-text>
    
        <v-tabs icons-and-text centered right v-model="tab" height="60">

          <v-tab key="top">
            Top Rated
            <v-icon>mdi-trophy</v-icon>
          </v-tab>
          <v-tab key="firstLast" @click="getRatedUsers()">
            First and Last User
            <v-icon>mdi-chart-box</v-icon> 
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item>

            <h3>TOP USERS</h3>

            <v-text-field
              label="Week Number"
              name="weeknumber"
              append-outer-icon="add"
              @click:append-outer="increment"
              prepend-icon="remove" 
              @click:prepend="decrement"
              type="text"
              @keypress="onlyNumber"
              v-model="weekNumber"
            ></v-text-field>

            <v-card-actions class="justify-center">
              <v-btn text outlined 
                @click="getTopUsers()"
                color="primary">
                FILTER
              </v-btn>
            </v-card-actions>

            <br />
            <br />

            <v-divider v-if="weekReturn"></v-divider>

            <UsersList
            :headersRated="headersTop"
            :usersRated="usersTop"
            :firstAndLastReturn="weekReturn">
            </UsersList>

          </v-tab-item>
          <v-tab-item>

            <h3>FIRST AND LAST USER</h3>

            <UsersList
            :headersRated="headersRated"
            :usersRated="usersRated"
            :firstAndLastReturn="firstAndLastReturn">
            </UsersList>

          </v-tab-item>
        </v-tabs-items>

      </v-card-text>

    </v-card>
  </div>
</template>

<script>
import moment from 'moment'
import Api from '@/backend/Api'
import UsersList from '@/components/userList/List'
import ImageLogo from '@/components/images/Logo'
export default {
  name: "Index",
  components: {
    UsersList,
    ImageLogo
  },
  data: () => ({
    tab: null,
    weekReturn: false,
    firstAndLastReturn: false,
    weekNumber: 0,
    headersTop: 
    [
      { text: 'Name', value: 'name', sortable: true} ,
      { text: 'Score', value: 'score', sortable: true} ,
      { text: 'Time Spent', value: 'time_spent', sortable: true} ,
    ],
    headersRated: 
    [
      { text: 'Name', value: 'name', sortable: true} ,
      { text: 'Score', value: 'score', sortable: true} ,
      { text: 'Time Spent', value: 'time_spent', sortable: true} ,
      { text: 'Total played', value: 'total_played', sortable: true} ,
    ],
    usersTop:[],
    usersRated:[],
  }),

  mounted() {
    this.currentWeekNumber()
  },

  methods: {

    currentWeekNumber () {
      this.weekNumber = moment().isoWeek()+1
    },

    onlyNumber ($event) {
      let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
      if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
        $event.preventDefault();
      }
    },

    increment () {
      this.weekNumber = parseInt(this.weekNumber,10) + 1
    },

    decrement () {
      if( this.weekNumber <= 0) {
        this.weekNumber = 1
      } else {
        this.weekNumber = parseInt(this.weekNumber,10) - 1
      }
    },
    
    getTopUsers(){
      Api().get(`/api/v1/users/top/${this.weekNumber}`)
      .then(response => {
        this.usersTop = []
        for( var a=0; a<response.data.data.length; a++){
          this.usersTop.push({
            name: response.data.data[a].attributes['full-name'],
            score: response.data.data[a].attributes['score-total'],
            time_spent: response.data.data[a].attributes['time-spent-total']
          });
        }

        this.weekReturn = true

        if ( response.data == '' ) {
          this.needCreateCategory = true
        }
      });
    },

    getRatedUsers(){
      Api().get('/api/v1/users/bestRated')
      .then(response => {
        this.usersRated = []
        for( var a=0; a<response.data.data.length; a++){
          this.usersRated.push({
            name: response.data.data[a].attributes['full-name'],
            score: response.data.data[a].attributes['score-total'],
            time_spent: response.data.data[a].attributes['time-spent-total'],
            total_played: response.data.data[a].attributes['total-played']
          });
        }

        this.firstAndLastReturn = true

        if ( response.data == '' ) {
          this.needCreateCategory = true
        }
      });
    }

  }
};
</script>