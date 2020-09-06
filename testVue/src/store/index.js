import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import Appointment from "@/Appointment";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        AppointmentTemp: new Appointment("", ""),
        appointmentsList: [
            new Appointment(
                "First Appointment",
                new Date("2020-06-06"),
                "Test comment"
            ),
        ],
    },
    mutations: {
        editAppointmentTemp(state, { field, value }) {
            state.AppointmentTemp[field] = value;
        },
        resetAppointmentTemp(state) {
            state.AppointmentTemp = new Appointment("", "");
        },
        createAppointment(state, item) {
            state.appointmentsList.push(item);
        },
        changeAppointmentCompleteState(state, { item, value }) {
            const index = state.appointmentsList.indexOf(item);
            if (index > -1) {
                state.appointmentsList[index].is_completed = value;
            }
        },
        removeAppointment(state, item) {
            const index = state.appointmentsList.indexOf(item);
            if (index > -1) {
                state.appointmentsList.splice(index, 1);
            }
        },
    },
    getters: {
        getAppointmentTemp(state) {
            return state.AppointmentTemp;
        },
        getAppointmentsList(state) {
            return state.appointmentsList;
        },
    },
    plugins: [createPersistedState()],
});