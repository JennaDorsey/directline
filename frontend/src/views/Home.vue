<template>
  <div class="container page">
    <h1>HOME PAGE</h1>
    <v-container fluid>
      <v-layout column>
        <v-flex xs12>
          <v-btn xs4 xs-offset-5 color="secondary" to="/tasks">tasks</v-btn>
          <v-btn xs4 xs-offset-5 color="pink" to="/notifications">notifications</v-btn>
          <v-btn xs4 xs-offset-5 color="purple" to="/profile">profile</v-btn>
          <v-btn xs4 xs-offset-5 color="green" to="/contacts">contactlist</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>