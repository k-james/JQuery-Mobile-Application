$(document).ready(function() {
    $('input').on('click', function(){
        $('#welcome').hide();
    });
    
    $.getJSON("json.js", function(employees) {

        $.each(employees, function() {
            $.each(this, function(key, value) {
                var a = jQuery.grep(employees.employees, function(val, index) {
                    return val.reportsTo == employeeid;
                });
                var employeeid = value.id;
                console.log(employeeid);
                var appendid = ' class="' + employeeid + '"';
                console.log(appendid);
            
                $('#employeeList').append(
                    '<li id="list"' + appendid + '">' + '<a href="#employeePage"><img src="' + value.imagePath + '"><h2>' + value.name + "</h2><p>" + value.title + "</p></li>"
                );
            
                $('#employeeList').listview('refresh');
            });
        });
    });
});

