<template>
  <div class="users">
    <form v-on:submit.prevent="addUser">
      <input type="text" v-model="newUser.name" placeholder="Name" autofocus>
      <input type="email" v-model="newUser.email" placeholder="Email">
      <button type="submit" id="submit">Add user</button>
    </form>
    <div class="users-list">
      <div class="user-data" v-for="user in users.slice().sort((a, b) => b.id - a.id)" :key="user.id">
        <span>{{user.id}}</span>
        <span>{{user.name}}</span>
        <span>{{user.email}}</span>
        <span><button @click="deleteUser(user)">Delete</button></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  name: 'users',
  data() {
    return {
      users: [],
      newUser: {},
      indexs:0
    }
  },
  methods: {
    addUser() {
      this.indexs++;
      let newUsers =
        {
          id:this.indexs, 
          name:this.newUser.name ,
          email: this.newUser.email
        }
        this.users.unshift(newUsers);
        this.newUser = {name: '', email: '' };
    },
    deleteUser(user) {
      this.users.splice(this.users.indexOf(user), 1);
    }
  },
  created() {
    this.$http.get('https://jsonplaceholder.typicode.com/users')
    .then(res =>{
        this.users = res.data;
        this.indexs = this.users.length;
      })
  }
}
</script>

<style lang="css">
  .users{
    position: relative;
    max-width: 100%;
    max-height: 100%;
    max-width: 80%;
    max-height: 80%;
    box-shadow: 0 0 49px 11px #00000066;
    border-radius: 15px;
    width: 80%;
    overflow: hidden;
    height: 80%;
    background: rgb(0 0 0 / 5%);
  }
  form{
    position: absolute;
    height: 100px;
    margin-top: 20px;
    margin: 20px auto;
    width: 100%;
  }
  form input,
  form button{
    border: none;
    padding: 15px;
    margin: 10px;
    border-radius: 5px;
    font-size: 1em;
    
  }
  form button{
    background: #128e00;
  }
  .users-list{
    border-top: 1px solid #ffffff63;
    text-align: center;
    margin: 100px auto;
    width: 95%;
    position: absolute;
    left: 2.5%;
    height: calc(100% - 100px);
    overflow: auto;
  }
  .users-list span{
    display: block;
    margin: 10px;
  }
  .user-data{
    display: flex;
    transition: 0.2s;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ffffff1a;
  }
  .user-data:hover{
    background: rgba(153, 0, 255, 0.151);
  }
  .user-data span{
    padding: 5px;
  }
  .user-data span:nth-child(2),
  .user-data span:nth-child(3){
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
    width: 315px;
  }
  .user-data span:nth-child(4) button{
    border: none;
    border-radius: 5px;
    background: #ff008a;
    cursor: pointer;
    font-size: 22px;
    padding: 5px;
  }
  .user-data span:nth-child(4) button:active,
  #submit:active{
    background: rgb(38, 0, 255);
    color: aliceblue;
  }
</style>
