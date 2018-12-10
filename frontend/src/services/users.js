// import the users service from feathers
import { users } from "@/services/feathers";

// create a function to sign up a new users
// i.e. create a new user
export const signUp = (userData, params) => users.create(userData, params);

