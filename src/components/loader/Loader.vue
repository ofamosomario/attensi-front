<template>

  <v-dialog v-model="$store.state.loader" width="300" persistent>
    <v-card>
      <v-row class="fill-height" align-content="center" justify="center">
        <v-col class="subtitle-1 text-center" cols="12">
          Loading content...
        </v-col>
        <v-col cols="6">
          <v-progress-linear color="deep-purple accent-4" indeterminate rounded height="6">
          </v-progress-linear>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>

</template>