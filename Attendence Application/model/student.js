var mongoose = require('mongoose');
var schema = mongoose.Schema;

var students = new schema({
    rollno: Number,
    name: String,
    attendence: {
        date_1_2_2020: {type: String, default: "false"},
        date_2_2_2020: {type: String, default: "false"},
        date_3_2_2020: {type: String, default: "false"},
        date_4_2_2020: {type: String, default: "false"},
        date_5_2_2020: {type: String, default: "false"},
        date_6_2_2020: {type: String, default: "false"},
        date_7_2_2020: {type: String, default: "false"},
        date_8_2_2020: {type: String, default: "false"},
        date_9_2_2020: {type: String, default: "false"},
        date_10_2_2020: {type: String, default: "false"},
        date_11_2_2020: {type: String, default: "false"},
        date_12_2_2020: {type: String, default: "false"},
        date_13_2_2020: {type: String, default: "false"},
        date_14_2_2020: {type: String, default: "false"},
        date_15_2_2020: {type: String, default: "false"},
        date_16_2_2020: {type: String, default: "false"},
        date_17_2_2020: {type: String, default: "false"},
        date_18_2_2020: {type: String, default: "false"},
        date_19_2_2020: {type: String, default: "false"},
        date_20_2_2020: {type: String, default: "false"},
        date_21_2_2020: {type: String, default: "false"},
        date_22_2_2020: {type: String, default: "false"},
        date_23_2_2020: {type: String, default: "false"},
        date_24_2_2020: {type: String, default: "false"},
        date_25_2_2020: {type: String, default: "false"},
        date_26_2_2020: {type: String, default: "false"},
        date_27_2_2020: {type: String, default: "false"},
        date_28_2_2020: {type: String, default: "false"},
        date_29_2_2020: {type: String, default: "false"},
        date_30_2_2020: {type: String, default: "false"},
        date_31_2_2020: {type: String, default: "false"}
    }
});

module.exports = mongoose.model('Student', students);