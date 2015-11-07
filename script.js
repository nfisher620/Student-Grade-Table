var avgGrade = null;
var studentName = undefined;
var course = undefined;
var studentGrade = 0;

var student_array = [/*pushing info into array*/];
//onclick add function
$(document).ready(function(){
    $('#add-from-db-button').click(function () {
        student_populate(this);
    });
});
$(document).ready(function() {
  //stuff to do on load goes HERE
});
function student_add() {
    studentName = document.getElementById('studentName').value;
    course = document.getElementById('course').value;
    studentGrade = document.getElementById('studentGrade').value;
    console.log('working');
    console.log(studentName);
    console.log(course);
    console.log(studentGrade);
    var studentGrade = Number(studentGrade);
    //object of student with name, course, grade created
    var student = {
        "name": studentName,
        "course": course,
        "grade": studentGrade
    };
    student_array.push(student); //pushes object of student into student array
    console.log(student);
    console.log(student_array + "This is the student array");
//add student to dom code
    addStudentToDom(student);
    calculateAverage();
    console.log(calculateAverage());
}


//delete button functionality

function student_delete(target_element) {
    console.log($(target_element).attr('student_index'));
    var index = $(target_element).attr('student_index');
    student_array.splice(index, 1);
    $(target_element).parent().remove();
    studentClear();
    updateStudentList();
    calculateAverage();
    console.log(calculateAverage());
    console.log("delete ran");
}
//clear student list function
function studentClear() {
    $('tbody').html("");
}
//calculate average function

function calculateAverage() {
    var sum = 0;
    var count = 0;
    for (var i = 0; i < student_array.length; i++) {

        sum += Number(student_array[i].grade);
        count++;
        console.log("calculate average ran, student array is now: " + student_array);
        console.log("student array ", student_array.length, "i is ", i);

    }

    var average = sum / count;
    var avgGrade = Math.round(average);
    if (student_array.length === 0) {
        avgGrade = 0;
    }

    $('.avgGrade').text(avgGrade);
    return avgGrade;
}

//cancel button to clear input fields and set global variables to undefined

function student_cancel() {
    document.getElementById('studentName').value = '';
    document.getElementById('course').value = '';
    document.getElementById('studentGrade').value = '';
    studentName = undefined;
    course = undefined;
    studentGrade = 0;
    console.log('cancel working');
    console.log(studentName);
    console.log(course);
    console.log(studentGrade);
}

    function student_populate(button) {
        console.log('click initiated');
        $.ajax({
            dataType: 'json',
            data: {
                api_key: "TDDR4ZFpj6",
            },
            method: "POST",
            url: "http://s-apis.learningfuze.com/sgt/get",
            crossDomain:true,
            timeout: 3000,
            success: function (result) {
                console.log('AJAX Success function called, with the following result:',
                    result);
                global_result=result;
                if(result.success==true){
                    student_array=result.data;
                    updateStudentList();
                }
                else{

                    alert(result.error[0]);
                }

            },
            error: function(){
                alert('error loading data from server')
            }

        });

    };



/**
 * Define all global variables here
 */
/**
 * student_array - global array to hold student objects
 * @type {Array}
 */

/**
 * inputIds - id's of the elements that are used to add students
 * @type {string[]}
 */

/**!Line 14 - 30- 1 project
 * addClicked - Event Handler when user clicks the add button
 * example onclick = "id=student_add"
 */

/**
 * cancelClicked - Event Handler when user clicks the cancel button, should clear out student form
 * example onclick = "id=student_cancel"
 */

/**
 * addStudent - creates a student objects based on input fields in the form and adds the object to global student array
 * object {}; add the students info from previous data entry
 * @return undefined
 */

/**
 * clearAddStudentForm - clears out the form values based on inputIds variable
 */

/**line 32- 35 2 project
 * calculateAverage - loop through the global student array and calculate average grade and return that value
 *
 * @returns {number}
 */

/** double check lines 37-48 project 3* updateData - centralized function to update the average and call student list update
 */

/**
 * updateStudentList - loops through global student array and appends each objects data into the student-list-container > list-body
 */
function updateStudentList() {
    for (var i = 0; i < student_array.length; i++) {
        addStudentToDom(student_array[i], i);
    }
}

/**
 * addStudentToDom - take in a student object, create html elements from the values and then append the elements
 * into the .student_list tbody
 * @param studentObj
 * place into the update studentList section
 *
 */
function addStudentToDom(student, studentIndex) {


//create new table row with data shown


    var new_tr = $('<tr>', {
        class: 'student_row'
    });

    var td_name = $('<td>', {
        text: student.name
    });

    var td_course = $('<td>', {
        text: student.course
    });

    var td_grade = $('<td>', {
        text: student.grade
    });

    var td_operation = $('<td>', {
        button: "delete",
        type: "button",
        class: "btn btn-danger",
        text: "Delete",
        student_index: studentIndex
    });

//click function to be called

    td_operation.click(function () {
        student_delete(this);
    });
    $(new_tr).append(td_name, td_course, td_grade, td_operation);
    $('tbody').append(new_tr);
    // average function call
}

/** line 50-57 project 4 - resetting the entire table to nothing
 * reset - resets the application to initial state. Global variables reset, DOM get reset to initial load state
 */


/**
 * Listen for the document to load and reset the data to the initial state
 */