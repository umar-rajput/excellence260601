<template>
  <div class="profile-view">
    <Profile></Profile>
    <!-- <p>Payment button</p> -->

    <!-- </stripe-checkout> -->
  </div>
</template>

<script>
import Profile from "../components/Profile.vue";
// import {StripeCheckout} from @vue-s
export default {
  name: "ProfileView",
  components: { Profile },
  // data() {},
};
</script>
