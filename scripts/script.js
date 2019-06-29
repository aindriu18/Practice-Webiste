$(function() {

    $(".myBook").mouseenter(function(){

        $(".myBook").animate({fontSize:'50px'}, "fast");
        $(".myBook").animate({fontSize: '30px'},"slow");

    });
      /* from its starting position, the cloud gradually moves left before coming back to its original position*/
    $(document).ready(function() {
      function topCloudLeft() {
          $(".top-cloud").animate({left: "+=500"}, 20000, "swing", topCloudRight);
      }
      function topCloudRight() {
          $(".top-cloud").animate({left: "-=500"}, 20000, "swing", topCloudLeft);
      }
      topCloudRight();
    });

      /* from its starting position, the cloud gradually moves right before coming back to its original position*/
    $(document).ready(function() {
        function bottomCloudLeft() {
          $(".bottom-cloud").animate({left: "+=300"}, 20000, "swing", bottomCloudRight);
      }
      function bottomCloudRight() {
          $(".bottom-cloud").animate({left: "-=300"}, 20000, "swing", bottomCloudLeft);
      }
      bottomCloudRight();
    });



/* ---- pulling education details from a .csv file 
  that represents each year of education and the 
  corresponding modules and results*/

    $.ajax({
      type: "GET",
      url: "./Masters.csv",
      dataType: "text",
      success: function(data) {
        dataMasters(data);

      }
    });

    $.ajax({
      type: "GET",
      url: "./Year-3.csv",
      dataType: "text",
      success: function(data) {
        dataYear3(data);

      }
    });

    $.ajax({
      type: "GET",
      url: "./Year-2.csv",
      dataType: "text",
      success: function(data) {
        dataYear2(data);

      }
    });

    $.ajax({
      type: "GET",
      url: "./Year-1.csv",
      dataType: "text",
      success: function(data) {
        dataYear1(data);

      }
    });


    // -- masters data
    function dataMasters(data) {
      

      var jsonData = $.csv.toObjects(data);
      console.table(jsonData);

 


      $("#masters").append();
      for (i = 0; i < jsonData.length; ++i) {
        //Looping through data to add data from csv file

        var content = "<tr>" +
          "<td>" + jsonData[i]["Course Code"] + "</td>" +
          "<td>" + jsonData[i]["Course Module"] + "</td>" +
          "<td>" + jsonData[i]["Grade"] + "</td>" +
          "<td>" + jsonData[i]["GPA"] + "</td>";
        "</tr>";

        $("#masters").append(content);

      }
    }

    
    // ----Year 3 data
    function dataYear3(data) {
    

      var jsonData = $.csv.toObjects(data);
      console.table(jsonData);

      $("#year3").append();
      for (i = 0; i < jsonData.length; ++i) {
        //Looping through data to add data from csv file

        var content = "<tr>" +
          "<td>" + jsonData[i]["Course Code"] + "</td>" +
          "<td>" + jsonData[i]["Course Module"] + "</td>" +
          "<td>" + jsonData[i]["Grade"] + "</td>" +
          "<td>" + jsonData[i]["GPA"] + "</td>";
        "</tr>";

        $("#year3").append(content);

      }
    }

    // ----Year 2 data
    function dataYear2(data) {
    

      var jsonData = $.csv.toObjects(data);
      console.table(jsonData);

      $("#year2").append();
      for (i = 0; i < jsonData.length; ++i) {
        //Looping through data to add data from csv file

        var content = "<tr>" +
          "<td>" + jsonData[i]["Course Code"] + "</td>" +
          "<td>" + jsonData[i]["Course Module"] + "</td>" +
          "<td>" + jsonData[i]["Grade"] + "</td>" +
          "<td>" + jsonData[i]["GPA"] + "</td>";
        "</tr>";

        $("#year2").append(content);

      }
    }

    // ----Year 1 data
    function dataYear1(data) {
    

      var jsonData = $.csv.toObjects(data);
      console.table(jsonData);

      $("#year1").append();
      for (i = 0; i < jsonData.length; ++i) {
        //Looping through data to add data from csv file

        var content = "<tr>" +
          "<td>" + jsonData[i]["Course Code"] + "</td>" +
          "<td>" + jsonData[i]["Course Module"] + "</td>" +
          "<td>" + jsonData[i]["Grade"] + "</td>" +
          "<td>" + jsonData[i]["GPA"] + "</td>";
        "</tr>";

        $("#year1").append(content);

      }
    }

});

/* facilitates responsive viewing for the navbar on mobile devices */
function menu() {
  var x = document.getElementById("myNavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}


/* gives data table structure and definition. Achieved through datatables CDN on education.html  */

$(document).ready( function () {
  $('#masters').DataTable();
} );

$(document).ready( function () {
  $('#year3').DataTable();
} );

$(document).ready( function () {
  $('#year2').DataTable();
} );

$(document).ready( function () {
  $('#year1').DataTable();
} );