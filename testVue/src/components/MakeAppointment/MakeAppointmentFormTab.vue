<template>
  <b-tab title="First" active>
    <b-card-text>
      <b-form @submit.prevent="submit">
        <b-form-group id="name-group" label="Name:" label-for="name">
          <b-form-input
            id="name"
            placeholder="Enter name"
            :state="validated ? isNameValid : null"
            v-model="name"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="date-group" label="Date:" label-for="date">
          <b-form-datepicker id="date" v-model="date" :state="validated ? isDateValid : null"></b-form-datepicker>
        </b-form-group>
        <b-form-group id="note-group" label="Your note:" label-for="note">
          <b-form-textarea
            id="note"
            v-model="note"
            placeholder="Enter something..."
            rows="3"
            max-rows="6"
            :state="null"
          ></b-form-textarea>
        </b-form-group>
        <b-button type="submit" variant="primary">Next</b-button>
      </b-form>
    </b-card-text>
  </b-tab>
</template>

<script>
import Appointment from "@/Appointment";
export default {
  name: "MakeAppointmentFormTab",
  //   props: {
  //     Appointment: {
  //       type: Appointment,
  //       required: true,
  //     },
  //   },
  data() {
    return {
      validated: false,
    };
  },
  computed: {
    name: {
      get() {
        return this.$store.getters.getAppointmentTemp.name;
      },
      set(value) {
        this.$store.commit("editAppointmentTemp", { field: "name", value });
      },
    },
    date: {
      get() {
        return this.$store.getters.getAppointmentTemp.date;
      },
      set(value) {
        this.$store.commit("editAppointmentTemp", { field: "date", value });
      },
    },
    note: {
      get() {
        return this.$store.getters.getAppointmentTemp.note;
      },
      set(value) {
        this.$store.commit("editAppointmentTemp", { field: "note", value });
      },
    },
    isFormValid() {
      let value = this.isNameValid && this.isDateValid;
      this.$emit("updateValidState", value);
      return value;
    },
    isNameValid() {
      return this.name.length > 0;
    },
    isDateValid() {
      return this.date.length > 0;
    },
  },
  watch: {
    isFormValid(newVal, oldVal) {
      this.$emit("updateValidState", newVal);
    },
  },
  methods: {
    submit() {
      this.validated = true;
      if (this.isFormValid) {
        this.$emit("nextStep");
      }
    },
  },
};
</script>

<style>
</style>