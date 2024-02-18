


  document.addEventListener("DOMContentLoaded", function() {
    var initialColor = document.body.style.backgroundColor; // Store the initial background color
    var isLightGrey = true; // Flag to track the current background color state
  
    // Get the image element
    var image = document.getElementById("profile");
  
    // Add click event listener
    image.addEventListener("click", function() {
      // Toggle background color between light grey and initial color
      if (isLightGrey) {
        document.body.style.backgroundColor = initialColor;
        document.body.style.color="black";

      } else {
        document.body.style.backgroundColor = "rgb(33,33,33)";
        document.body.style.color="white";
      }
      isLightGrey = !isLightGrey; // Toggle the flag
    });
  });

