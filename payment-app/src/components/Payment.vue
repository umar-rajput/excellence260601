<template>
  <div class="payment">
    <div class="payment-main d-flex justify-center my-8">
      <v-card class="w-50 pa-7">
        <v-card-title
          class="text-center text-h3 font-weight-medium text py-4 mb-6"
        >
          Credit Card Info
        </v-card-title>
        <v-card-item>
          <v-form class="pa-2" @submit.prevent="submit">
            <v-text-field
              v-model="cardHolderName"
              label="Card Holder Name"
              :rules="cardHolderNameRules"
              class="mb-2"
            ></v-text-field>
            <v-text-field
              v-model="cardNumber"
              label="Card Number"
              :rules="cardNumberRules"
              :counter="16"
              class="mb-2"
            ></v-text-field>
            <v-text-field
              v-model="expiryDate"
              label="Expiry Date"
              type="date"
              :rules="expiryDateRules"
              class="mb-2"
            ></v-text-field>
            <v-text-field
              v-model="cvv"
              label="CVV"
              :rules="cvvRules"
              :counter="3"
              class="mb-2"
            ></v-text-field>
            <v-select
              label="Brand"
              :items="brands"
              :rules="brandsRules"
              class="mb-4"
            ></v-select>
            <v-card-action>
              <v-btn class="w-100 bg-grey-darken-4" @click="submit">
                Submit
              </v-btn>
            </v-card-action>
          </v-form>
        </v-card-item>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: `Payment`,
  data() {
    return {
      cardHolderName: "",
      cardNumber: "",
      expiryDate: "",
      cvv: null,
      brands: [
        "Mastercard",
        "PayPal",
        "Visa",
        "Capital One",
        "American Express",
        "Discover",
      ],
      cvvRules: [
        (value) => {
          if (value) return true;

          return "CVV is required.";
        },

        (value) => {
          if (/[^a-z && A-Z]/.test(value)) return true;

          return "CVV does not contain alphabets.";
        },

        (value) => {
          if (value?.length == 3) return true;

          return "Enter valid cvv.";
        },
      ],
      cardNumberRules: [
        (value) => {
          if (value) return true;

          return "Card number is required.";
        },

        (value) => {
          if (/[^a-z && A-Z]/.test(value)) return true;

          return "Card number does not contain alphabets.";
        },

        (value) => {
          if (value?.length == 16) return true;

          return "Enter valid card number.";
        },
      ],
      cardHolderNameRules: [
        (value) => {
          if (value) return true;

          return "Name is required.";
        },
      ],
      expiryDateRules: [
        (value) => {
          if (value) return true;

          return "Expiry date is required.";
        },
      ],
      brandsRules: [
        (value) => {
          if (value) return true;

          return "Please select a brand.";
        },
      ],
    };
  },
};
</script>
