<template>
  <div>
    <v-data-table v-if="firstAndLastReturn"
      :headers="headersRated"
      :items="usersRated"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>
<script>
export default {
  name: "FirstAndLast",
  props: ['firstAndLastReturn', 'usersRated' , 'weekReturn', 'headersRated'],
  components: {
  },
  data: () => ({
    tab: null,
  }),

  mounted() {
  },

  methods: {

  }
};
</script>