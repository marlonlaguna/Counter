$(document).ready(function(){
    $("#Count").val(0);

    $("#countButton").click(function(){

        var countVar = $("#Count").val();
      $("#Count").val(parseInt(countVar) + 1);
    });
  });