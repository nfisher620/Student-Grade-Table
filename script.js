var avgGrade = null;
var studentName = undefined;
var course = undefined;
var studentGrade = undefined;
/* sample of how the data will be compiled.

var student_table = {name:"name",
                     course:"course",
                     grade:"grade",
                     element: //point to certain areas in the table
                    };
                    there's a .val() method that will get you the value of all text input fields (as an array if there are multiple values
*/
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



}
function student_cancel () {
    document.getElementById('studentName').value = '';
    document.getElementById('course').value = '';
    document.getElementById('studentGrade').value = '';
    studentName = undefined;
    course = undefined;
    studentGrade = undefined;
    console.log('cancel working');
    console.log(studentName);
    console.log(course);
    console.log(studentGrade);

}
// td creation add back into the add button function




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
 */

/** line 50-57 project 4 - resetting the entire table to nothing
 * reset - resets the application to initial state. Global variables reset, DOM get reset to initial load state
 */


/**
 * Listen for the document to load and reset the data to the initial state
 */