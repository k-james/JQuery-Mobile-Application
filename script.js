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

//$(document).on('pagebeforeshow', '#home', function () {
//    //$('<ul>').attr({'data-role':'listview','id':'autocomplete'}).html('<li>Employee Names</li>').appendTo('#autocomplete');
//    $('#autocomplete').listview().listview('refresh');
//}); 
//
//$(document).on("pageinit", "#home", function () {
//    $("#autocomplete").on("filterablebeforefilter", function (e, data) {
//            //console.log("ok");
//        var $ul = $(this),
//            $input = $(data.input),
//            value = $input.val(),
//            html = "";
//        $ul.html("");
//        if (value && value.length > 2) {
//                //console.log("ok2");
//            $ul.attr({'data-role':'listview','id':'autocomplete'}).html('<li>Employee Names</li>').appendTo('#autocomplete'
//                        );
//            $ul.listview("refresh");
//            $.ajax({
//                type: "get",
//                url: "json.js",
//                dataType: "json",
//                success: function (response) {
//                      //console.log("ok");
//                    $("#autocomplete").html("");
//                    $(response).find("employees").children().each(function (
//                    ) {
//                        $("#autocomplete").append(
//                            $(this).find("name").text() + "<br>" +
//                            $(this).find("title").text() + "<br>");
//                    });
//                }
////                    data: {
////                        q: $input.val()
////                    }
//            });
//      
////                    .then(function (response) {
////                        $.each(response, function (i, val) {
////                            html += "<li>" + val + "</li>";
////                        });
////                        $ul.html(html);
////                        $ul.listview("refresh");
////                        $ul.trigger("updatelayout");
////                    });
//        }
//        
//    });
//});

    

//$(document).ready(function () {
//    $("#autocomplete-input").keypress(function () {
//        console.log("1");
//        $.getJSON("json.js", function(data) {
//            console.log(data);
//        $.each(data, function () {
//            $.each(this, function (key, value) {
//                $("#autocomplete").append(value.name + value.title);
//                });
//            });
//        });
//    });
//});

//$(document).ready(function (){
// 
//    $.ajax({
//        type: "get",
//        url: "json.js",
//        data: {},
//        dataType: "json",
//        success: function(response){
//            var data = $(response).map(function(){
//                return {value: this.name, id: this.employees};
//            }).get();
// 
//            $('#autocomplete-input').autocomplete({
//                source: function(request, response)
//                minLength: 0,
//                select: function(event,ui){
//                    $('input#id').val(ui.item.id);
//                }
//            });
//        }
//    });
// 
//});