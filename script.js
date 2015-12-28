var avgGrade = null;
var studentName = undefined;
var course = undefined;
var studentGrade = 0;

var student_array = [/*pushing info into array*/];
//onclick add function
$(document).ready(function(){
	student_populate();
	calculateAverage();
    //highlightMinMaxStudent();
});
function student_add() {
	studentName = document.getElementById('studentName').value;
	course = document.getElementById('course').value;
	studentGrade = document.getElementById('studentGrade').value;
	console.log("Student:",studentName);
	console.log("Course:", course);
	console.log("Grade:", studentGrade);
	var studentGrade = Number(studentGrade);
	//object of student with name, course, grade created
	var student = {
		"name": studentName,
		"course": course,
		"grade": studentGrade
	};
	student_array.push(student); //pushes object of student into student array
	create_new_student(student);
	student_populate();
	console.log(student_array + "This is the student array");
//add student to dom code
	addStudentToDom(student);
	calculateAverage();
	console.log(calculateAverage());
}


//delete button functionality
function student_delete(target_element) {
	console.log($(target_element).attr('student_index'));
	var index = $(target_element).attr('index');
	student_array.splice(index, 1);
	$(target_element).parent().remove();
	studentClear();
	updateStudentList();
	calculateAverage();
	console.log("Delete ran");
	delete_student_button(index);
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
}

	function student_populate() {
		console.log('Student Populate ran');
		$.ajax({
			dataType: 'json',
			//data: {
			//api_key: "TDDR4ZFpj6",
			//},
			method: "GET",
			//url: "http://s-apis.learningfuze.com/sgt/get",
			url: "populate.php",
			//crossDomain:true,
			//timeout: 3000,
			success: function (result) {
				console.log('AJAX Success student_populate function called, with the following result:',
					result);
				global_result = result;

				if (result.success == true) {
					student_array = result.data;
					updateStudentList();
					calculateAverage();
					//highlightMinMaxStudent();
				}
			}
			//    else{
			//
			//        alert(result.error[0]);
			//    }
			//
			//},
			//    error: function(jqXHR, exception) {
			//        if (jqXHR.status === 0) {
			//            alert('Not connect.n Verify Network.');
			//        } else if (jqXHR.status == 404) {
			//            alert('Requested page not found. [404]');
			//        } else if (jqXHR.status == 500) {
			//            alert('Internal Server Error [500].');
			//        } else if (exception === 'parsererror') {
			//            alert('Requested JSON parse failed.');
			//        } else if (exception === 'timeout') {
			//            alert('Time out error.');
			//        } else if (exception === 'abort') {
			//            alert('Ajax request aborted.');
			//        } else {
			//            alert('Uncaught Error.n' + jqXHR.responseText);
			//        }
			//}

			//     });
			//};
		});
	}
function create_new_student(student) {
	console.log("Create new student works");
	console.log("STUDENT", student);
	//api_key:the string for my API access
	//student:object that contains all of this student's data
	$.ajax({
		dataType: "json",
		data: {
			//    api_key: "TDDR4ZFpj6",
			name: student.name,
			course: student.course,
			grade: student.grade
			},
			method: "POST",
			url: "create.php",
			success: function (result) {
				console.log('AJAX Success create new student function called, with the following result:', result);
				global_result = result;
				if (result.success == true) {
					//student_array = result.data;
					updateStudentList();
                    //highlightMinMaxStudent();
					return result;
				}
				else {
					console.log(result.error);
				}
			},
			error: function () {
				console.log("error loading data from server")
			}
		})
}

function delete_student_button(index){
	console.log("Delete student_working");
	$.ajax({
		dataType:"json",
		data: {
			//api_key: "TDDR4ZFpj6",
			student_id:index,
		},
		method:"POST",
		url:'http://localhost:8888/lfz/SGT/deletestudent.php',
		crossDomain:true,
		success:function(delete_student_result){
			console.log("AJAX Success create delete student function called, with the following result:", delete_student_result);
			global_result=delete_student_result;
			if(delete_student_result.success===true) {
				student_array = delete_student_result.data;
				updateStudentList();
			}
			else{
				//alert(delete_student_result.error);
			}
		},



	})
}
function updateStudentList() {
	clear_list();
	for (var i = 0; i < student_array.length; i++) {
		addStudentToDom(student_array[i], i);
        //highlightMinMaxStudent();
	}
}

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
		student_index: student.id
	});

	td_operation.attr('index', studentIndex);
//click function to be called

	td_operation.click(function () {
		delete_student_button($(this).attr('student_index'));
		student_delete(this);

	});
	$(new_tr).append(td_name, td_course, td_grade, td_operation);
	$('tbody').append(new_tr);
	//highlightMinMaxStudent();
}

/** line 50-57 project 4 - resetting the entire table to nothing
 * reset - resets the application to initial state. Global variables reset, DOM get reset to initial load state
 */


/**
 * Listen for the document to load and reset the data to the initial state
 */
 function sortGrade() {
	student_array.sort(function (a, b) {
		if (a.grade < b.grade) return -1;
		if (a.grade > b.grade) return 1;
		return 0;
		console.log("Sort grade working");
	});
	updateStudentList();
}
function sortGradebottom() {
	student_array.sort(function (a, b) {
		if (a.grade > b.grade) return -1;
		if (a.grade < b.grade) return 1;
		return 0;
		console.log("Sort grade bottom working");
	});
	updateStudentList();
}


function sortName(){
	student_array.sort(function (a,b){
		if(a.name < b.name) return-1;
		if(a.name > b.name) return 1;
		return 0;
		console.log("Sort Name working");
	});
	updateStudentList();
}
function sortNameZtoA() {
	student_array.sort(function (a, b) {
		if (a.name > b.name) return -1;
		if (a.name < b.name) return 1;
		return 0;
		console.log("Z to A working");
	});
	updateStudentList();
}

function sortCourse(){
	student_array.sort(function(a,b){
		if(a.course < b.course) return -1;
		if(a.course > b.course) return 1;
		return 0;
		console.log("Sort Course working");
	});
	   updateStudentList();
}
function sortCourseZtoA(){
	student_array.sort(function(a,b){
		if(a.course > b.course) return -1;
		if(a.course < b.course) return 1;
		return 0;
		console.log("Sort Course Z to A working");
	});
	updateStudentList();
}

function clear_list(){
	$("tbody").html("");
}
//function highlightMinMaxStudent(){
//		//remove previous highlighting
//			$("tr").removeAttr("style");
//		//Set the min & max to the grade value of the first index in array
//		var min = student_array[0].grade;
//		var max = student_array[0].grade;
//	   //iterate through array and find the min & max grade value
//			for(var i = 1; i < student_array.length; i++){
//				if(student_array[i].grade > max){
//						max = student_array[i].grade;
//					}
//				if(student_array[i].grade < min){
//						min = student_array[i].grade;
//					}
//			}
//
//			//highlight the rows with a grade that matches the min or max
//			   var gradeCells = $("td:nth-child(3)");
//		for(var j = 0; j < gradeCells.length; j++){
//				//check the value of each grade cell
//			var $currentCell = $(gradeCells)[j];
//				var gradeValue = $($currentCell).text();
//				if(gradeValue == max){
//						$($currentCell).parent().css("background-color", "#b3ffb3");
//					} else if (gradeValue == min) {
//						$($currentCell).parent().css("background-color", "#ffd9b3");
//					}
//			}
//	}