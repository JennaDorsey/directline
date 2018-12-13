<template>
  <div class="tasks">
    <h1>Task Page</h1>
    <h1>Submit a Task:</h1>
    <form>
      
      <v-text-field
        v-model="Problem"
        v-validate="'required|max:150'"
        :counter="150"
        :error-messages="errors.collect('problem')"
        label="Whats the Problem"
        data-vv-name="problem"
        required
      ></v-text-field>
      <v-text-field
        v-model="Where"
        v-validate="{
          required: true,
          regex:/[A-Z]{2,5}\s\d{3}[A-Z]?/,
          unique: true
        }"
        :counter="100"
        :error-messages="errors.collect('where')"
        label="Date, Time, Location"
        data-vv-name="where"
        required
      ></v-text-field>
      <v-text-field
        v-model="Description"
        v-validate="'required|max:150'"
        :counter="150"
        :error-messages="errors.collect('description')"
        label="Description with photo"
        data-vv-name="description"
        required
      ></v-text-field>
     
    
      <v-btn xs4 xs-offset-5 color="secondary" to="/home">Login</v-btn>
    </form>
  </div>
</template>