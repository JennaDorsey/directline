<template>
  <div class="container page">
    <h1>Create Account</h1>
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
        v-model="first_names"
        v-validate="{
          required: true,
          regex:/[A-Z]{2,5}\s\d{3}[A-Z]?/,
          unique: true
        }"
        :counter="10"
        :error-messages="errors.collect('name')"
        label="First Name"
        data-vv-name="name"
        required
      ></v-text-field>
      <v-text-field
        v-model="last_names"
        v-validate="'required|max:35'"
        :counter="35"
        :error-messages="errors.collect('name')"
        label="Last Name"
        data-vv-name="name"
        required
      ></v-text-field>
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
      <v-select
        v-validate="'required'"
        :items="business_codes"
        v-model="code"
        :error-messages="errors.collect('codes')"
        label="Business Codes"
        data-vv-name="code"
        required
      ></v-select>
      <v-text-field
        v-model="groups"
        v-validate="{
          required: true,
          regex:/[A-Z]{2,5}\s\d{3}[A-Z]?/,
          unique: true
        }"
        :counter="10"
        :error-messages="errors.collect('group')"
        label="Group"
        data-vv-name="group"
        required
      ></v-text-field>
      <v-btn @click="submit" class="secondary">Submit</v-btn>
    </form>
  </div>
</template>



<script>
// import the necessary database service functions
import { addusers, getusers } from "@/services/users";
// configure the New user component (i.e. this page)
export default {
  name: "NewUser",
  // variables defined for use in our template
  data: () => ({
    // the 'user' is a default blank course object that
    // receive the values in the form so we can create a 
    // new user in the database
    first_names: {
      last_names: "",
      business_codes: "",
      difficulty: null
    },
    // this variable will be populated if there is an error
    // when we try to submit the user to the database, but
    // it defaults to `null`
    creationError: null,
    // these are the values that show up in the dropdown
    // menu for Business Codes
    difficulties: ["190485", "849503", "395827"],
    // the 'dictionary' provides additional configuration info
    // to Vee Validate, including customized error messages
  
  methods: {
    async submit() {
      // validate the form
      const valid = await this.$validator.validateAll();
      // if everthing is okay...
      if (valid) {
        try { // try to create the user in the database
          const users = await addusers(this.users);
          // then redirect back to the users page with
          // a success message
          this.$router.replace({
            name: "users",
            query: {
              status: "success",
              message: `Success! The user "${first_names}: ` +
                `${last_names}" has been added to the database!`
            }
          });
        } catch(err) {
          // uh-oh! there was a problem creating the user
          this.creationError = err;
        }
      }
    }
  },
  mounted() {
    // tell Vee Validate to use our custom dictionary
    this.$validator.localize("en", this.dictionary);
    // below is a custom validator that will check the database
    // to make sure that the Business Codes is unique BEFORE we are
    // allowed to submit this form; using custom validators like
    // this is an advanced technique but can greatly improve the
    // user experience as well as the data integrity of your app.
    this.$validator.extend("unique", {
      getMessage: field => 
        `This ${field} already exists in the database. It must be unique.`,
      validate: value => {
        // query the database for a course with the code entered in the form.
        // if the number of returned results is NOT zero, then a course with
        // this code already exists in the database and we should return false.
        return business_codes({ query: { code: value } })
          .then(res => res.data.length === 0);
      }
    }, { immediate: false });
  },
  // initialize Vee Validate
  $_veeValidate: {
    validator: "new"
  }
}
,<script>