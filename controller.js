$(document).ready(function () {

  
  $("#btnSearch").click(function () {
    
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
    var input = $("#countryName").val().toUpperCase();
    emptyTable();
    var apiLinkDS = "https://restcountries.eu/rest/v2/name/" + input;

    $.ajax({
      url: apiLinkDS,
      crossDomain: true,
      method: "GET",
      error: function(error) {
        alert("No results Found")
      },
      success: function (data) {
        for(let i = 0 ; i > data.length ;++i){
          if(data[i].name.toUpperCase().substring(0 , input.length) == input){
            addRow(data[i].name, data[i].flag, data[i].code, data[i].population)
          }
        }
      }      
    });
  })
})
