<template>
  <div class="profile">
    <div class="profile-main d-flex justify-center my-8">
      <v-card class="w-50 pa-7">
        <v-card-title
          class="text-center text-h2 font-weight-medium text py-4 mb-6"
        >
          Profile
        </v-card-title>
        <v-card-item class="justify-center mb-8">
          <v-avatar size="130">
            <v-img src="../assets/profileBlack.png"></v-img
          ></v-avatar>
        </v-card-item>
        <v-card-item>
          <v-form :readonly="true">
            <v-text-field v-model="name" label="Name"></v-text-field>
            <v-text-field v-model="gender" label="Gender"></v-text-field>
            <v-text-field v-model="dob" label="Date Of Birth"></v-text-field>
          </v-form>
        </v-card-item>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: `Profile`,
  data() {
    return {
      name: "Umar Rajput",
      gender: "Male",
      dob: "26/07/2003",
    };
  },
};
</script>
