var avgGrade = null;
var studentName = undefined;
var course = undefined;
var studentGrade = 0;

var student_array = [ /*pushing info into array*/ ];
//onclick add function

function student_add () {
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

    var i = student_array.length-1;

//create new table row with data shown

    var studentIndex = student_array.length - 1;

    var new_tr = $('<tr>', {
        class: 'student_row'
    });

    var td_name = $('<td>', {
        text: studentName
    });

    var td_course = $('<td>', {
        text: course
    });

    var td_grade = $('<td>', {
        text: studentGrade
    });

    var td_operation = $('<td>', {
        button: "delete",
        type: "button",
        class: "btn btn-danger",
        text: "Delete",
        student_index: studentIndex
    });

//click function to be called

    td_operation.click(function(){
        student_delete(this);
    });
    $(new_tr).append(td_name, td_course, td_grade, td_operation);
    $('tbody').append(new_tr);
    // average function call
    calculateAverage();
    console.log(calculateAverage());
}


//delete button functionality

function student_delete(target_element){
    console.log($(target_element).attr('student_index'));
    var index = $(target_element).attr('student_index');
    delete student_array[index];
    $(target_element).parent().remove();
    calculateAverage();
    console.log(calculateAverage());
    console.log("delete ran");
}

//calculate average function

    function calculateAverage() {
        var sum = 0;
        for (var i = 0; i < student_array.length; i++) {
            if (student_array[i] == undefined){
                student_array.splice(i, 1);
                console.log('houston... we got a prob');
                continue;
            }
            sum += Number(student_array[i].grade);
            console.log("calculate average ran, student array is now: " + student_array);
            console.log("student array ", student_array.length, "i is ", i );
        }
        var average = sum / student_array.length;
        var avgGrade = Math.round(average);
        if (student_array.length === 0) {
            avgGrade = 0;
        }
        $('.avgGrade').text(avgGrade);
        return avgGrade;
    }

//cancel button to clear input fields and set global variables to undefined

function student_cancel () {
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

/**
 * addStudentToDom - take in a student object, create html elements from the values and then append the elements
 * into the .student_list tbody
 * @param studentObj
 * place into the update studentList section
 *
 */

/** line 50-57 project 4 - resetting the entire table to nothing
 * reset - resets the application to initial state. Global variables reset, DOM get reset to initial load state
 */


/**
 * Listen for the document to load and reset the data to the initial state
 */