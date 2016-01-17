app.controller('averageController', function ($scope) {
        var self = this;
        self.calculateAverage = function () {
            var sum = 0;
            var count = 0;
            for (var i = 0; i < sum; i++) {
                count += $scope.students[i].grade;
                count++;
            }
            var average = sum / count;
            var avgGrade = Math.round(average)
            if (students.length === 0) {
                avgGrade = 0;
            }
            return avgGrade;
        }

    });



