jQuery(document).ready(function ($) {

  /*
  Software
  */

  // Gets results of apprenticeship thus far
  $.ajax({
      url: "./data/software.csv",
      type: "GET",
      dataType: "text"
    })
    .done(function (responeData) {

      var jsonData = $.csv.toObjects(responeData);

      for (i = 0; i < jsonData.length; ++i) {

        var content =
          "<tr>" +
          "<td>" + jsonData[i]["Course Code"] + "</td>" +
          "<td>" + jsonData[i]["Course Module"] + "</td>" +
          "<td>" + jsonData[i]["Grade"] + "</td>" +
          "</tr>";
        $("#software").append(content);

      }

    })
    .fail(function (responseError) {

      var errorContent =
        "<tr>" +
        "<td colspan='4'>We are sorry, an error occured. Download the file <a href='/data/software.csv'>here</a>.</td>" +
        "</tr>";
      $("#software").append(errorContent);

    });

  /*
    Masters
    */
  $.ajax({
      url: "./data/masters.csv",
      type: "GET",
      dataType: "text"
    })
    .done(function (responeData) {

      var jsonData = $.csv.toObjects(responeData);

      for (i = 0; i < jsonData.length; ++i) {

        var content =
          "<tr>" +
          "<td>" + jsonData[i]["Course Code"] + "</td>" +
          "<td>" + jsonData[i]["Course Module"] + "</td>" +
          "<td>" + jsonData[i]["Grade"] + "</td>" +
          "<td>" + jsonData[i]["GPA"] + "</td>" +
          "</tr>";
        $("#masters").append(content);

      }

    })
    .fail(function (responseError) {

      var errorContent =
        "<tr>" +
        "<td colspan='4'>We are sorry, an error occured. Download the file <a href='/data/masters.csv'>here</a>.</td>" +
        "</tr>";
      $("#masters").append(errorContent);

    });

  /*
  Year 3
  */
  $.ajax({
      url: "./data/year_3.csv",
      type: "GET",
      dataType: "text"
    })
    .done(function (responeData) {

      var jsonData = $.csv.toObjects(responeData);

      for (i = 0; i < jsonData.length; ++i) {

        var content =
          "<tr>" +
          "<td>" + jsonData[i]["Course Code"] + "</td>" +
          "<td>" + jsonData[i]["Course Module"] + "</td>" +
          "<td>" + jsonData[i]["Grade"] + "</td>" +
          "<td>" + jsonData[i]["GPA"] + "</td>" +
          "</tr>";
        $("#year3").append(content);

      }

    })
    .fail(function (responseError) {

      var errorContent =
        "<tr>" +
        "<td colspan='4'>We are sorry, an error occured. Download the file <a href='/data/year_3.csv'>here</a>.</td>" +
        "</tr>";
      $("#year3").append(errorContent);

    });

  /*
  Year 2
  */
  $.ajax({
      url: "./data/year_2.csv",
      type: "GET",
      dataType: "text"
    })
    .done(function (responeData) {

      var jsonData = $.csv.toObjects(responeData);

      for (i = 0; i < jsonData.length; ++i) {

        var content =
          "<tr>" +
          "<td>" + jsonData[i]["Course Code"] + "</td>" +
          "<td>" + jsonData[i]["Course Module"] + "</td>" +
          "<td>" + jsonData[i]["Grade"] + "</td>" +
          "<td>" + jsonData[i]["GPA"] + "</td>" +
          "</tr>";
        $("#year2").append(content);

      }

    })
    .fail(function (responseError) {

      var errorContent =
        "<tr>" +
        "<td colspan='4'>We are sorry, an error occured. Download the file <a href='/data/year_2.csv'>here</a>.</td>" +
        "</tr>";
      $("#year2").append(errorContent);

    });

  /*
  Year 1
  */
  $.ajax({
      url: "./data/year_1.csv",
      type: "GET",
      dataType: "text"
    })
    .done(function (responeData) {

      var jsonData = $.csv.toObjects(responeData);
      for (i = 0; i < jsonData.length; ++i) {

        var content =
          "<tr>" +
          "<td>" + jsonData[i]["Course Code"] + "</td>" +
          "<td>" + jsonData[i]["Course Module"] + "</td>" +
          "<td>" + jsonData[i]["Grade"] + "</td>" +
          "<td>" + jsonData[i]["GPA"] + "</td>" +
          "</tr>";
        $("#year1").append(content);

      }

    })
    .fail(function (responseError) {

      var errorContent =
        "<tr>" +
        "<td colspan='4'>We are sorry, an error occured. Download the file <a href='/data/year_1.csv'>here</a>.</td>" +
        "</tr>";
      $("#year1").append(errorContent);

    });

});
