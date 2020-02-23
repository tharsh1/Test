var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Student = require('./model/student');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var db = mongoose.connect('mongodb://localhost/AttendenceApplication');

app.get('/', function(req, res) {
    res.send("Server started");
});

app.post('/addStudent', function(req, res) {
    Student.insertMany(req.body, function(err, students) {
        if(err) {
            res.status(500).send({error: "Could not add students"});
        } else {
            res.send(students);
        } 
    });
});

app.get('/displayStudents', function(req, res) {
    Student.find({}, function(err, students) {
        if(err) {
            res.status(500).send({error: "Could not fetch students"});
        } else {
            res.send(students);
        }
    });
});

app.delete('/removeStudent', function(req, res) {
    Student.remove({"rollno": req.body.rollno}, function(err, students) {
        if(err) {
            res.status(500).send({error: "Could not delete student"});
        } else {
            res.send("Deleted RollNo: " + req.body.rollno);
        }
    });
    /*var delStudents = req.body;
    delStudents.forEach(function(student) {
        Student.remove({"rollno": student.rollno}, function(err, students) {
            if(err) {
                res.status(500).send({error: "Could not delete student"});
            } else {
                res.send("Deleted RollNo: " + student.rollno);
            }
        });
    });*/
    
});

app.put('/markAttendence', function(req, res) {
    var today = new Date();
    var date = today.getDate();
    var month = today.getMonth()+1;
    var year = today.getFullYear();
    var todayDate = "date_"+date+"_"+month+"_"+year;
    console.log(todayDate);
    Student.findOne({"rollno": req.body.rollno}, function(err, presentStudent) {
        if(err) {
            res.status(500).send({error: "Could not find student"});
        } else {
            Student.update({"rollno": req.body.rollno}, {$set: {"attendence.date_1_2_2020": "true"}}, function(err, students) {
                if(err) {
                    res.status(500).send({error: "Could not mark attendence of student"});
                } else {
                    res.send(students);
                }       
            });
        }
    });
    
});

app.listen(5000, function() {
    console.log("Server running on port 5000");
});