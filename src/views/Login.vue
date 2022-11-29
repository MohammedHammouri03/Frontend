<template>
  <div class="p-5 bg-image" style="
        background-image: url('https://toppng.com/uploads/preview/textured-backgrounds-for-websites-1155398483840bc0kagkc.jpg');
        height: 730px;
        "></div>
  <form class="createbox">
    <h1>Login</h1>
    <input type="text" name="" placeholder="E-Mail">
    <input type="password" name="" placeholder="Passwort">
    <input type="submit" name="" value="Login">
    <a href="/register">Noch kein Account? Registrieren</a>
  </form>
</template>
<script>
export default {
  name: 'login'
}
</script>
<style scoped>
body {
  marign: 0;
  padding: 0;
  font-family: sans-serif;
  background: #34495e;
}

.createbox {
  width: 500px;
  padding: 80px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #191919;
  text-align: center;
}

.createbox h1 {
  color: white;
  text-transform: uppercase;
  font-weight: 500;
}

.createbox input[type="text"], .createbox input[type="password"] {
  border: 0;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #3498db;
  padding: 14px 10px;
  width: 200px;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25s;
}

.createbox input[type="text"]:focus, .createbox input[type="password"]:focus {
  width: 280px;
  border-color: #2ecc71;
}

.createbox input[type="submit"] {
  border: 0;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid #2ecc71;
  padding: 14px 40px;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25s;
  cursor: pointer;
  font-max-size: large;
}

.createbox input[type="submit"]:hover {
  background: #2ecc71;
}
</style>
