<template>
  <div class="profile">
    <div class="profile-main d-flex justify-center align-center h-screen">
      <v-card class="w-50 d-flex pa-7"> Profile </v-card>
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
