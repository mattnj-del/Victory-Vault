$("#submitBtn").click(function() {
    // 1. Get the value from the input field
    var mascot = $("#mascotInput").val();

    // 2. Output the cheer to the screen
    // If they type "Tigers", it displays "Go Tigers!"
    $("#output").text("Go " + mascot + "!");
});$(document).ready(function() {
  $("#hideBtn").click(function() {
    // 1. Toggle the box (this handles the showing/hiding)
    $("#box").toggle("slow");

    // 2. Change the button text based on the box's visibility
    if ($("#box").is(":visible")) {
      $(this).text("Show Box");
    } else {
      $(this).text("Hide Box");
    }
  });
});
