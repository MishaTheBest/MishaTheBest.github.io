<template>
  <div class="container-fluid">
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-md-5">
          <b-card no-body>
            <b-tabs content-class="mt-3" card fill v-model="step">
              <make-appointment-form-tab @updateValidState="updateValidState" @nextStep="nextStep"></make-appointment-form-tab>
              <make-appointment-result-tab :isFormValid="isFormValid" @prevStep="prevStep"></make-appointment-result-tab>
            </b-tabs>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Appointment from "@/Appointment";
import MakeAppointmentFormTab from '@/components/MakeAppointment/MakeAppointmentFormTab';
import MakeAppointmentResultTab from '@/components/MakeAppointment/MakeAppointmentResultTab'
export default {
  name: "MakeAppointment",
  components:{
      MakeAppointmentFormTab,
      MakeAppointmentResultTab
  },
  data() {
    return {
      AppointmentTemp: new Appointment("", ""),
      validated: false,
      step: 0,
      isFormValid: false
    };
  },
  
  methods: {
   
   
    updateValidState(value){
      this.isFormValid = value;
    },
    prevStep(){
        this.step = 0;
        console.log(this.step)
    },
     nextStep(){
        this.step = 1;
        console.log(this.step)
    }
  },
};
</script>

<style>
</style>