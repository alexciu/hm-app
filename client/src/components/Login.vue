<template>
  <div class="login">
    <h6 class="temp">Login.vue (/register)</h6>

    <h1>Inregistrare useri</h1>
    <div class="forms">
      <fieldset>
      <input type="email" name="username" placeholder="Username" v-model="username">
      <br/>
      <input type="password" name="password" placeholder="password" v-model="password">
      <br/>
      <button id="submit-user" @click="login" v-if="!logat">Login</button>
      <p v-if="serverError">{{serverMessage.message}}</p>
      <button id="reset" @click="reset" v-if="logat">Login again</button>
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
import Login from '@/services/Login'
import GetAllUsers from '@/services/GetAllUsers'
export default {
  data(){
    return {
      firstName: '',
      lastName:'',
      username:'',
      password:'',
      logat: false,
      serverMessage:{},
      serverError: false,
      users:[{}]
    }
  },
  methods: {
    async login () {
      try {
      const response = await Login.login({
        firstName: this.firstName,
        lastName: this.lastName,
        username: this.username,
        password: this.password
      })
       if (response.status === 200) {
        this.logat = true
        this.serverError = false
        }
      this.serverMessage = response.data
      this.showUsers ()
      //this.reset ()
      } catch (error) {
        this.serverMessage = {message: error.response.data.message}
        this.serverError = true
      }
    },
    reset () {
      this.logat = false
      this.firstName = ''
      this.lastName = ''
      this.username = ''
      this.password = ''
      //this.serverMessage = {}
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
.login{
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
