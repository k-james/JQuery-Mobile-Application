$(document).ready(function () {
    $.getJSON("json.js", function (employees) {
        
        var employee = '';
        var employeeId = '';
        
        $('body').on('click', '#list', function (e) {
            console.log(this);
            var employeeIndexStr = $(this).attr('class').split(" ")[0] - 1001;
            //console.log(employStr);
            employee = parseInt(employeeIndexStr, 10);
            //console.log(employee);
            $('#info').empty();
            employeeId = employees.employees[employee].id;
            $('#info').append(
                "<li>" + "<img src='" + employees.employees[employee].imagePath + "'>" + "<h2>" + employees.employees[employee].name + "</h2>" + "<p>" + employees.employees[employee].title + "</p>" + "</li>"
            );
            
            var report = jQuery.grep(employees.employees, function (val, index) {
                return val.reportsTo === employeeId;
            });
            
            var managers = parseInt(employees.employees[employee].reportsTo - 1001, 10);
            console.log(managers);
            var managerName = employees.employees[managers].name;
            var managerId = employees.employees[managers].id;
            var reports = report.length;
            var appendid = " class='" + managerId + "'";
            
            $('#detail').empty();
            $('#detail').append(
                "<li" + appendid + "><a>" + "<h2>View Manager</h2><p>" + managerName + "</p></a></li>" + "<li><a><h2>View Direct Reports</h2><p>" + reports + "</p></a></li>" + "<li>" + "<a href=" + "'tel:" + employees.employees[employee].officeNumber + "'>" + "<h2>Call Office</h2>" + "<p>" + employees.employees[employee].officeNumber + "</p></a></li>" + "<li>" + "<a href=" + "'tel:" + employees.employees[employee].cellNumber + "'>" + "<h2>Call Cell</h2>" + "<p>" + employees.employees[employee].cellNumber + "</p></a></li>" + "<li>" + "<a href=" + "'mailto:" + employees.employees[employee].email + "'><h2>E-mail " + employees.employees[employee].name + "</h2><p>" + employees.employees[employee].email + "</p></a>" + "</li>"

            );
            
            $('#detail').listview('refresh');
            $('#info').listview('refresh');
        });
    });
});


//$(document).ready(function () {
//$(document).on('pagebeforeshow', '#employeePage', function () {
//    $.getJSON("json.js", function (data) {
//        var employee = data.item;
//        //console.log(employee);
//                $('#employee').text(employees.name);
//        
//                //$('#employee').listview().listview('refresh');
//            });
//        });
//    });
//});
//
