<?php
    function isValidGrade($grade){
        //Solution 1
//        $grade = (int)$grade;
//        return ($grade >= 0 && $grade <= 100);
        //Solution 2
      $regex = '/^100$|^[1-9]?[0-9]$/';
      return preg_match($regex,$grade);
    }
    function isValidName($name)
    {
        $regex = '/[A-Za-z\- ]*/';
        return preg_match($regex, $name);
    }
    function isValidCourse($course){
        $regex = '/[ A-Za-z\-0-9]*/';
        return preg_match($regex,$course);
    }
?>