class Appointment {
    constructor(name = "", date = new Date(), note = "") {
        this.name = name;
        this.date = date instanceof Date ? date.toJSON().slice(0, 10).replace(/-/g, '-') : date;
        this.note = note;
        this.is_completed = false;
        this.insertedDateTime = new Date();
    }
}
export default Appointment;