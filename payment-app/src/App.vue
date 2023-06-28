<template>
  <div class="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <!-- <router-view /> -->

    <v-card class="bg">
      <v-layout>
        <v-navigation-drawer
          v-model="drawer"
          permanent
          class="py-3"
          style="background-color: #eddad3"
        >
          <v-list>
            <v-list-item
              prepend-avatar="http://localhost:8080/img/profileBlack.a64db219.png"
              title="Umar Rajput"
              subtitle="rajput@gmail.com"
            ></v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list density="compact" nav>
            <v-list-item
              prepend-icon="mdi-account"
              title="Profile"
              value="profile"
              to="/"
            ></v-list-item>
            <v-list-item
              prepend-icon="mdi-credit-card"
              title="Payment"
              value="payment"
              to="/payment"
            ></v-list-item>
          </v-list>
        </v-navigation-drawer>

        <v-main style="min-height: 100vh; background-color: #ecdad245">
          <header
            class="px-6 py-3 d-flex justify-space-between align-center"
            style="background-color: #eddad3"
          >
            <v-btn color="grey-darken-4" @click.stop="drawer = !drawer">
              <v-icon icon="mdi-menu"></v-icon>
            </v-btn>
            <v-avatar size="50">
              <v-img src="./assets/logo2.png"></v-img
            ></v-avatar>
          </header>
          <router-view />
        </v-main>
      </v-layout>
    </v-card>

    <!-- <p>app</p> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
    };
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
/* nav {
  background-color: #ecdad245;
  overflow: hidden;
} */
</style>
