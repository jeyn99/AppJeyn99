$(document).ready(function () {
  function addRow(name, flag, ccode, population) {
    var row = "<tr><td>" + name + "</td><td><img src=" + flag + ">" + "</img></td><td>" + ccode + "</td><td>" + population + "</td></tr>";
    $("tbody").append(row);
  };

  function emptyTable() {
    $("#countryDetails").empty();
  };

  $(document).ajaxStart(function () {
    $("#load").show();
    $("#btnSearch").attr("disable", true);
    $("#btnSearch").text("Searching")
  });
  $(document).ajaxStop(function () {
    $("#load").hide();
    $("#btnSearch").attr("disable", false);
    $("#btnSearch").text("Search")
  });
  
  $("#btnSearch").click(function () {
    var input = $("#countryName").val().toUpperCase();
    emptyTable();
    var apiLinkDS = "https://restcountries.eu/rest/v2/name/" + input;
    var name;
    var flag;
    var code;
    var pop;
    var status = false;

    $.get({
      url: apiLinkDS,
      crossDomain: true,
      method: "GET",
      error: function(error) {
        alert("No results!")
      },
      success: function (data) {

        for (let i = 0; i < data.length; ++i) {
          name = (data[i].name).toUpperCase();
          code = (data[i].alpha2Code).toUpperCase();
          if (name.substring(0, input.length) == input || code == input) {
            flag = (data[i].flag);
            pop = (data[i].population);
            addRow(name, flag, code, pop);
            $("table").show();
          }
        }
      }      
    });
  })
})