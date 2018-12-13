<template>
  <div class="contacts">

    <center><h1>Contact List</h1></center>

    <template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    class="elevation-1"
  >
    <template slot="no-data">
      <v-alert :value="true" color="error" icon="warning">
        Sorry, nothing to display here :(
      </v-alert>
    </template>
  </v-data-table>
</template>



   
  </div>
</template>