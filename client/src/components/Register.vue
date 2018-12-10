<template>
  <div class="register">
    <h6 class="temp">Register.vue (/register)</h6>

    <h1>Inregistrare useri</h1>
    <div class="forms">
      <input type="email" name="email" placeholder="email" v-model="email">
      <br/>
      <input type="password" name="password" placeholder="password" v-model="password">
      <br/>
      <button id="submit-user" @click="register">Add user</button>
      <hr/>

    </div>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data(){
    return {
      email:'',
      password:''
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data, response.status)
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
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
