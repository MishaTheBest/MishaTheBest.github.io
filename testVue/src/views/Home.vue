<template>
  <div class="container-fluid">
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <b-table
            striped
            hover
            responsive
            show-empty
            :items="$store.getters.getAppointmentsList"
            :fields="fields"
          >
            <template v-slot:cell(actions)="data">
              <div class="d-flex align-items-center">
                <b-form-checkbox v-model="data.item.is_completed" @change="value => $store.commit('changeAppointmentCompleteState', { item: data.item, value })" class="mx-2">Complete</b-form-checkbox>
                <b-button
                  size="sm"
                  class="mx-2"
                  @click="remove(data.item)"
                  variant="outline-danger"
                >Remove</b-button>
              </div>
            </template>
            <template v-slot:empty="scope">
              <div class="w-100 text-center">
                <h6>No appointments scheduled</h6>
              </div>
            </template>
          </b-table>
          <div class="w-100 d-flex justify-content-end">
            <b-button to="/create" variant="success">+ Add</b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../Appointment.js";

export default {
  name: "Home",
  data() {
    return {
      fields: [
        {
          key: "name",
          label: "Name",
        },
        {
          key: "date",
          label: "Date",
        },
        {
          key: "note",
          label: "Note",
        },
        {
          key: "actions",
          label: "Actions",
        },
      ],
    };
  },
  methods: {
    remove(item) {
      if (confirm("Delete appointment?")) {
        this.$store.commit("removeAppointment", item);
      }
    },
  },
};
</script>
