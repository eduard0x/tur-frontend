<template>
  <div class="hello">
    <form @submit.prevent="loguear">
      <input type="text" placeholder="Correo" v-model="credencial.correo" />
      <input type="password" v-model="credencial.password" />
      <button>Login</button>
      {{ credencial.correo }}
    </form>
  </div>
</template>

<script>
class credencial {
  constructor(correo, password) {
    this.correo = correo;
    this.password = password;
  }
}
export default {
  data() {
    return {
      credencial: new credencial(),
    };
  },
  methods: {
    loguear() {
      fetch("http://localhost:3001/api/usuarios/login", {
        method: "POST",
        body: JSON.stringify(this.credencial),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => console.log(data));

      this.credencial = new credencial();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
