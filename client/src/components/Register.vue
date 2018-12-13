<template>
  <div class="register">
    <h6 class="temp">Register.vue (/register)</h6>

    <h1>Inregistrare useri</h1>
    <div class="forms">
      <fieldset>
      <input type="text" name="firstName" placeholder="First name" v-model="firstName">
      <br/>
      <input type="text" name="lastName" placeholder="Last name" v-model="lastName">
      <br/>
      <input type="email" name="username" placeholder="Username" v-model="username">
      <br/>
      <input type="password" name="password" placeholder="password" v-model="password">
      <br/>
      <button id="submit-user" @click="register" v-if="!inregistrat">Add user</button>
      <p v-if="serverError">{{serverMessage.message}}</p>
      <button id="reset" @click="reset" v-if="inregistrat">Add more</button>
      <hr/>
      </fieldset>
    </div>
    <div class="users">
      <hr/>
      <button @click="showUsers ()">Show user list</button>
      <ul>
        <li v-for="(user, key) in users" v-bind:key="key"> {{ user.username }} - {{ user.firstName }}</li>
      </ul>
    </div>
    
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import GetAllUsers from '@/services/GetAllUsers'
export default {
  data(){
    return {
      firstName: '',
      lastName:'',
      username:'',
      password:'',
      inregistrat: false,
      serverMessage:{},
      serverError: false,
      users:[{}]
    }
  },
  methods: {
    async register () {
      try {
      const response = await AuthenticationService.register({
        firstName: this.firstName,
        lastName: this.lastName,
        username: this.username,
        password: this.password
      })
       if (response.status === 200) {
        this.inregistrat = true
        this.serverError = false
        }
      this.serverMessage = response.data
      this.showUsers ()
      } catch (error) {
        this.serverMessage = {message: error.response.data.message}
        this.serverError = true
      }
    },
    reset () {
      this.inregistrat = false
      this.firstName = ''
      this.lastName = ''
      this.username = ''
      this.password = ''
      this.serverMessage = {}
    },
    async showUsers () {
      try {
      const response = await GetAllUsers.getusers()

      this.users = response.data
      } catch (error) {
        this.serverMessage = {message: error.response.data.message}
        this.serverError = true
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.register{
  border: 1px greenyellow solid;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
