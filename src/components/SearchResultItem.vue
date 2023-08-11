<template>
  <a
    @click.prevent="toggleModal"
    class="item box is-primary my-1 is-shadowless"
  >
    <div class="content">
      <p class="title is-6">{{ nameField }}</p>
    </div>
  </a>

  <div :class="['modal', { 'is-active': isExpanded }]">
    <div class="modal-background"></div>

    <div class="modal-content">
      <div class="modal-card-head"></div>
      <div class="modal-card-body">
        <div class="field">
          <div class="label">Name:</div>
          <div class="control">
            <input
              class="input"
              type="text"
              :readonly="isReadOnly"
              v-model="nameField"
            />
          </div>
        </div>
        <div class="field">
          <div class="label">Email:</div>
          <div class="control">
            <input
              class="input"
              type="text"
              :readonly="isReadOnly"
              v-model="emailField"
            />
          </div>
        </div>

        <div class="field">
          <div class="label">Mobile Number:</div>
          <div class="control">
            <input
              class="input"
              type="text"
              :readonly="isReadOnly"
              v-model="numField"
            />
          </div>
        </div>

        <div class="field">
          <div class="label">Affiliation:</div>
          <div class="control">
            <input
              class="input"
              type="text"
              :readonly="isReadOnly"
              v-model="affiliationField"
            />
          </div>
        </div>
      </div>
      <div class="modal-card-foot">
        <div class="field is-grouped">
          <button
            v-show="isReadOnly"
            @click.prevent="toggleReadonly"
            class="button is-primary"
          >
            Edit
          </button>

          <button
            v-show="!isReadOnly"
            @click.prevent="updateGuest"
            class="button is-info"
          >
            Save
          </button>
          <button class="button is-success">Assign to Event</button>
        </div>
      </div>
    </div>
    <button
      @click.prevent="toggleModal"
      class="modal-close is-large"
      aria-label="close"
    ></button>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'SearchResultItem',
  props: [
    'name',
    'id',
    'email',
    'mobileNumber',
    'affiliation',
    'isRegistered',
    'selected'
  ],
  mounted() {
    this.nameField = this.name;
    this.emailField = this.email;
    this.numField = this.mobileNumber;
    this.affiliationField = this.affiliation;
    this.isRegisteredField = this.isRegistered;
    this.isExpanded = this.selected;
  },
  data() {
    return {
      isExpanded: false,
      isReadOnly: true,
      nameField: '',
      emailField: '',
      numField: '',
      affiliationField: '',
      isRegisteredField: false
    };
  },
  methods: {
    toggleModal() {
      this.isExpanded = !this.isExpanded;
      this.isReadOnly = true;
    },
    toggleReadonly() {
      this.isReadOnly = !this.isReadOnly;
    },
    updateGuest() {
      this.toggleReadonly();
      const url = 'http://127.0.0.1:5000/api/guest/update';
      const data = {
        name: this.nameField,
        email: this.emailField,
        mobile_number: this.numField,
        affiliation: this.affiliationField,
        guest_id: this.id
      };
      const config = {
        headers: { 'content-type': 'application/x-www-form-urlencoded' }
      };
      axios
        .patch(url, data, config)
        .then(res => console.log(res))
        .catch(e => console.error(e));
    }
  }
};
</script>

<style scoped>
.item {
  border: solid white 1px;
}
.item:hover {
  border: solid 1px grey;
}
</style>
