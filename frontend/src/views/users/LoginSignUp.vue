<template>
  <div class="container page">
    <v-img
      alt="DirectLine Logo"
      :src="require('../../assets/logo.png')"
    ></v-img>
    <h1>Welcome to DirectLine!</h1>
    <v-container fluid>
      <v-layout column>
        <v-flex xs12>
          <v-btn xs4 xs-offset-5 color="primary" to="/login">Login</v-btn>
          <v-btn xs4 xs-offset-5 color="secondary" to="/signup">Signup</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "LoginSignUp"
}
</script>
