/**
 * Created by nicolespence on 1/13/16.
 */
var app = angular.module('SGTApp', []);
app.controller('formController', function(){
    var self=this;
    self.student = {};
    self.students = [
        {name: "Mavrick",
            course: "Avionics 101",
            grade: "95"},
        {name: "Goose",
            course: "Acting 95",
            grade: "64"}
    ];

    self.addStudent = function(){
        self.students.push(self.student);
        self.student = {};
    }
});