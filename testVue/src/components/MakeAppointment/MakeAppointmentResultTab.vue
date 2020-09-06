<template>
  <b-tab title="Second" :disabled="!isFormValid">
    <b-card-sub-title class="mb-2">Name:</b-card-sub-title>
    <b-card-text>{{$store.getters.getAppointmentTemp.name}}</b-card-text>
    <b-card-sub-title class="mb-2">Date:</b-card-sub-title>
    <b-card-text>{{$store.getters.getAppointmentTemp.date}}</b-card-text>
    <b-card-sub-title class="mb-2">Note:</b-card-sub-title>
    <b-card-text>{{$store.getters.getAppointmentTemp.note}}</b-card-text>
    <b-button variant="success" @click="createAppointment">Save</b-button>
    <b-button variant="outline-primary" @click="$emit('prevStep')" class="ml-2">Back</b-button>
  </b-tab>
</template>

<script>
export default {
  name: "MakeAppointmentResultTab",
  props: {
    isFormValid: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    createAppointment() {
      this.$store.commit(
        "createAppointment",
        this.$store.getters.getAppointmentTemp
      );
      this.$store.commit('resetAppointmentTemp')
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>