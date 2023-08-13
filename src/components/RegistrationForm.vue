<template>
  <form
    @submit.prevent="handleSubmit"
    class="form is-flex-grow-1 mx-6 p-4 is-rounded"
  >
    <div class="content">
      <div class="title is-4">{{ eventName }}</div>
      <div class="subtitle is-6">Register guest to system</div>
      <p><small>Please fill out all the fields.</small></p>
    </div>
    <TextField
      label="Name"
      input-id="nameField"
      v-model="name"
      placeholder="Enter full name"
    />
    <TextField
      @input="verifyEmail"
      label="Email"
      input-id="emailField"
      v-model="email"
      :validity="isEmailValid"
      placeholder="guest@email.com"
    />
    <TextField
      @input="verifyMobileNumber"
      label="Mobile Number"
      input-id="mobileNumberField"
      v-model="mobileNumber"
      :validity="isNumberValid"
      placeholder="Enter 11 digit number"
    />
    <TextField
      label="Affiliation"
      input-id="affiliationField"
      v-model="affiliation"
      placeholder="Enter company name"
    />

    <div class="field">
      <FormButton :disabled="!canSubmit" type="submit" button-classes="is-black"
        >Register Guest</FormButton
      >
    </div>
    <div class="field">
      <FormButton type="reset" button-classes="is-light">Reset</FormButton>
    </div>
  </form>
  <div :class="['modal', { 'is-active': showModalSuccess }]">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="modal-card-body">Successfully Registered</div>
    </div>
    <button
      @click="toggleModalSuccess"
      class="modal-close is-large"
      aria-label="close"
    ></button>
  </div>
</template>
<script>
import FormButton from '@/components/form/FormButton.vue';
import TextField from '@/components/form/TextField.vue';
import { mapState } from 'vuex';
import axios from 'axios';

export default {
  name: 'RegistrationForm',
  components: { TextField, FormButton },
  data() {
    return {
      showModalSuccess: false
    };
  },
  mounted() {
    this.$store.dispatch('resetState');
  },
  methods: {
    toggleModalSuccess() {
      this.showModalSuccess = !this.showModalSuccess;
    },
    handleSubmit() {
      const url = 'http://127.0.0.1:5000/api/guest/create';
      const data = {
        name: this.name,
        email: this.email,
        mobile_number: this.mobileNumber,
        affiliation: this.affiliation
      };
      const config = {
        headers: { 'content-type': 'application/x-www-form-urlencoded' }
      };
      axios
        .post(url, data, config)
        .then(() => {
          this.toggleModalSuccess();
        })
        .catch(e => console.error(e));
    },

    verifyEmail(e) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      this.$store.commit({
        type: 'setIsEmailValid',
        value: emailRegex.test(e.target.value)
      });
    },
    verifyMobileNumber(e) {
      const mobileNumberRegex = /^\d{11}$/;
      this.$store.commit({
        type: 'setIsNumberValid',
        value: mobileNumberRegex.test(e.target.value)
      });
    }
  },
  computed: {
    ...mapState(['isEmailValid', 'isNumberValid', 'eventName']),
    name: {
      get() {
        return this.$store.state.name;
      },
      set(value) {
        this.$store.commit({ type: 'setName', value });
      }
    },
    email: {
      get() {
        return this.$store.state.email;
      },
      set(value) {
        this.$store.commit({ type: 'setEmail', value });
      }
    },

    mobileNumber: {
      get() {
        return this.$store.state.mobileNumber;
      },
      set(value) {
        this.$store.commit({ type: 'setMobileNumber', value });
      }
    },

    affiliation: {
      get() {
        return this.$store.state.affiliation;
      },
      set(value) {
        this.$store.commit({ type: 'setAffiliation', value });
      }
    },

    canSubmit() {
      return (
        this.name.length &&
        this.affiliation.length &&
        this.isEmailValid &&
        this.isNumberValid
      );
    }
  }
};
</script>

<style scoped lang="scss">
@media screen and (max-width: 768px) {
  //.form {
  //  background: rgba(40, 34, 34, 0.85);
  //}
  .form * {
    color: #f1f1f1;
  }
}
</style>
