<template>
  <div>
    <!-- <Elements :stripe="{ stripeTestPromise }"> -->
    <FormIn></FormIn>
    <!-- </Elements> -->
  </div>
</template>

<script>
import { loadStripe } from "@vue-stripe/vue-stripe";
import { ref } from "vue";
// import {Elements} from "@stripe/react-stripe-js"

import FormIn from "../components/FormIn.vue";

export default {
  name: "StripeConView",
  components: { FormIn },
  data() {
    return {
      PUBLIC_KEY:
        "pk_test_51NNZUoSEp9XSs9ZfZ10F7l3WlLlsXk2WjfXZ9ieypTDK7SpZLt87EFaK39i4e9IvJPBrsPFwCWxTLYjKzswGxKyb00VWGqqnIu",
      // stripeTestPromise: loadStripe,
    };
  },
  mounted() {
    console.log("working..");
    const stripeLoaded = ref(false);
    const stripePromise = loadStripe(
      "pk_test_51NNZUoSEp9XSs9ZfZ10F7l3WlLlsXk2WjfXZ9ieypTDK7SpZLt87EFaK39i4e9IvJPBrsPFwCWxTLYjKzswGxKyb00VWGqqnIu"
    );
    stripePromise.then(() => {
      stripeLoaded.value = true;
    });
  },
};
</script>
