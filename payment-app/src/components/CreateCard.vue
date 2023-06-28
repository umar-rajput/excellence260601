<template>
  <div>
    <StripeElements
      v-if="stripeLoaded"
      v-slot="{ elements }"
      ref="elms"
      :stripe-key="stripeKey"
      :instance-options="instanceOptions"
      :elements-options="elementsOptions"
    >
      <StripeElement
        ref="card"
        :elements="elements.create('card')"
        :options="cardOptions"
      />
    </StripeElements>
    <button type="button" @click="pay">Pay</button>
  </div>
</template>

<script>
import { StripeElements, StripeElement } from "vue-stripe-js";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "CreateCard",

  components: {
    StripeElements,
    StripeElement,
  },

  data() {
    const stripeKey = ref(
      "pk_test_51NNZUoSEp9XSs9ZfZ10F7l3WlLlsXk2WjfXZ9ieypTDK7SpZLt87EFaK39i4e9IvJPBrsPFwCWxTLYjKzswGxKyb00VWGqqnIu"
    ); // test key
    var stripe = Stripe(
      "pk_test_51NNZUoSEp9XSs9ZfZ10F7l3WlLlsXk2WjfXZ9ieypTDK7SpZLt87EFaK39i4e9IvJPBrsPFwCWxTLYjKzswGxKyb00VWGqqnIu"
    );
    const instanceOptions = ref({
      //https://stripe.com/docs/js/initializing#init_stripe_js-options
      stripe,
    });
    var elements = stripe.elements({
      clientSecret:
        "pi_1GszZ42eZvKYlo2Ceviws009_secret_WT4sd8OBnZuzLX5vA0RTvWQZj",
    });
    const elementsOptions = ref({
      // https://stripe.com/docs/js/elements_object/create#stripe_elements-options
      elements,
    });
    const cardOptions = ref({
      // https://stripe.com/docs/stripe.js#element-options
      value: {
        postalCode: "12345",
      },
    });
    const stripeLoaded = ref(false);
    const card = ref();
    const elms = ref();

    // onBeforeMount(() => {
    //   const stripePromise = loadStripe(stripeKey.value);
    //   stripePromise.then(() => {
    //     stripeLoaded.value = true;
    //   });
    // });

    return {
      stripeKey,
      stripeLoaded,
      instanceOptions,
      elementsOptions,
      cardOptions,
      card,
      elms,
    };
  },

  methods: {
    pay() {
      // Get stripe element
      const cardElement = this.card.stripeElement;

      // Access instance methods, e.g. createToken()
      this.elms.instance.createToken(cardElement).then((result) => {
        // Handle result.error or result.token
        console.log(result);
      });
    },
  },
  mounted() {
    const stripePromise = loadStripe(this.stripeKey.value);
    stripePromise.then(() => {
      this.stripeLoaded.value = true;
    });
  },
});
</script>
