// Optional JS logic can be added here
document.addEventListener("DOMContentLoaded", function () {
    // Get the current day of the month
    const currentDay = new Date().getDate();
  
    // Choose color based on the day (even: yellow, odd: green)
    const themeColor = currentDay % 2 === 0 ? "bisonYellow" : "bisonGreen";
  
    // Set the theme color in the body class
    document.body.classList.add(themeColor);
  });