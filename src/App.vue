<template>
  <div id="app">
    <img src="./assets/3.jpg" alt="">
    <div class="container">
      <nav>
        <span class="logo">
          <img src="./assets/logo.png" alt="">
        </span>
        <span>
          <router-link to="/">
              Home 1
          </router-link>
        </span>
        <span>
          <router-link to="/Users">
              Users
          </router-link>
        </span>
      </nav>
      <section id="router-view">
        <router-view></router-view>
      </section>
      <footer>
        <span>© 2023 Moisés Iglesias</span>
      </footer>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Users from './components/User';


export default {
  name: 'App',
  components: {
    HelloWorld,
    Users
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1.5em;
  text-align: center;
  color: #f5f5f5;
  margin: 0;
  padding: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
}
#app img{
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 0;
}
#app .container{
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  backdrop-filter: blur(10px);
}
nav{
  position: absolute;
  height: 100px;
  width: 100%;
  text-align: right;
  display: flex;
  backdrop-filter: blur(20px);
  background: rgba(0, 0, 0, 0.185);
}
nav span{
  text-decoration: none;
  margin: 40px;
}
nav .logo{
  height: 70px;
  width: 100px;
  overflow: hidden;
  position: relative;
  top: 15px;
  left: 0px;
  z-index: 0;
}
nav span:nth-child(1){
  margin: 0 20px;
}
nav span a{
  text-decoration: none;
  color: #f5f5f5;
}

#router-view{
  position: absolute;
  width: 100%;
  max-width: 100%;
  height: calc(100% - 200px);
  left: 0;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
footer{
  position: absolute;
  height: 100px;
  width: 100%;
  text-align: center;
  bottom: 0px;
  backdrop-filter: blur(20px);
  background: rgba(0, 0, 0, 0.185);
  display: flex;
}
footer span{
  margin: 40px auto;
}
@media screen and (max-width: 1370px) {
  #app{
    font-size: 1.2em;
  }    
}
</style>
