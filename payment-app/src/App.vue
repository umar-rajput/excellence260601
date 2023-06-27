<template>
  <div class="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <!-- <router-view /> -->

    <v-card>
      <v-layout>
        <v-navigation-drawer expand-on-hover rail>
          <v-list>
            <v-list-item
              prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
              title="Sandra Adams"
              subtitle="sandra_a88@gmailcom"
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
            <!-- <v-list-item
              prepend-icon="mdi-star"
              title="Starred"
              value="starred"
            ></v-list-item> -->
          </v-list>
        </v-navigation-drawer>

        <v-main style="height: 100vh"><router-view /></v-main>
      </v-layout>
    </v-card>

    <!-- <p>app</p> -->
  </div>
</template>

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
</style>
