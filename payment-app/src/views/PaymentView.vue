<template>
  <div class="profile-view">
    <!-- <Payment></Payment> -->

    <!-- ------------------------------------------ -->
    <!-- <stripe-checkout
      ref="checkoutRef"
      mode="payment"
      :pk="publishableKey"
      :line-items="lineItems"
      :success-url="successURL"
      :cancel-url="cancelURL"
      @loading="(v) => (loading = v)"
    ></stripe-checkout> -->

    <!-- <button @click="submit">Pay now</button> -->
    <!-- ------------------------------------------------------------ -->
    rewu
    <CreateCard></CreateCard>
  </div>
</template>

<script>
// import Payment from "../components/Payment.vue";
// import { StripeCheckout } from "@vue-stripe/vue-stripe";

import { loadStripe } from "@stripe/stripe-js";
import { ref } from "vue";

import CreateCard from "../components/CreateCard.vue";

export default {
  name: "ProfileView",
  components: {
    // Payment,
    // StripeCheckout,
    CreateCard,
  },
  data() {
    // this.publishableKey =
    //   "pk_test_51NNZUoSEp9XSs9ZfZ10F7l3WlLlsXk2WjfXZ9ieypTDK7SpZLt87EFaK39i4e9IvJPBrsPFwCWxTLYjKzswGxKyb00VWGqqnIu";

    // onBeforeMount(() => {
    //   const stripeLoaded = ref(false);
    //   const stripePromise = loadStripe("your_key");
    //   stripePromise.then(() => {
    //     stripeLoaded.value = true;
    //   });
    // });

    return {
      // loading: false,
      // lineItems: [
      //   {
      //     price: "price_1NNbrBSEp9XSs9ZfITiU83UG",
      //     quantity: 1,
      //   },
      // ],
      // successURL: "http://localhost:8080/success",
      // cancelURL: "http://localhost:8080/error",
    };
  },
  mounted() {
    const stripeLoaded = ref(false);
    const stripePromise = loadStripe(
      "pk_test_51NNZUoSEp9XSs9ZfZ10F7l3WlLlsXk2WjfXZ9ieypTDK7SpZLt87EFaK39i4e9IvJPBrsPFwCWxTLYjKzswGxKyb00VWGqqnIu"
    );
    stripePromise.then(() => {
      stripeLoaded.value = true;
    });
  },
  // methods: {
  //   // submit() {
  //   //   // alert("payNow");
  //   //   //stripe checkout page
  //   //   this.$refs.checkoutRef.redirectToCheckout();
  //   // },
  // },
  // mounted(() => {
  //     const stripeLoaded = ref(false);
  //     const stripePromise = loadStripe("your_key");
  //     stripePromise.then(() => {
  //       stripeLoaded.value = true;
  //     });
  //   })
};
</script>
