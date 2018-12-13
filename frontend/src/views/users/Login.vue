<template>
  <div class="container page">
    <h1>Login</h1>
    <v-alert
      v-if="creationError"
      v-model="creationError"
      dismissable
      type="warning"
      transition="fade-transition"
    >
      {{ creationError.code }} {{ creationError.name }}: {{ creationError.message }}
    </v-alert>
    <form>
      
      <v-text-field
        v-model="contactid"
        v-validate="'required|max:35'"
        :counter="35"
        :error-messages="errors.collect('contactid')"
        label="Contact ID"
        data-vv-name="contactid"
        required
      ></v-text-field>
      <v-text-field
        v-model="passwords"
        v-validate="{
          required: true,
          regex:/[A-Z]{2,5}\s\d{3}[A-Z]?/,
          unique: true
        }"
        :counter="10"
        :error-messages="errors.collect('password')"
        label="Password"
        data-vv-name="password"
        required
      ></v-text-field>
     
    
      <v-btn @click="submit" class="secondary">Submit</v-btn>
    </form>
  </div>
</template>