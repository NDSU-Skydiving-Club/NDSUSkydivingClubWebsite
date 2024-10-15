document.addEventListener("DOMContentLoaded", function () {
    // Get the current day of the month
    const currentDay = new Date().getDate();

    // Choose color based on the day (odd: yellow, even: green)
    const themeColor = currentDay % 2 === 1 ? "bisonGreen" : "bisonYellow";

    // Set the theme color in the body class
    document.body.classList.add(themeColor);

    // Define alternate image sources
    const imageSources = {
        instagram: currentDay % 2 === 1 ? "/NDSUSkydivingClubWebsite/assets/logos/instagram2.png" : "/NDSUSkydivingClubWebsite/assets/logos/instagram1.png",
        facebook: currentDay % 2 === 1 ? "/NDSUSkydivingClubWebsite/assets/logos/facebook2.png" : "/NDSUSkydivingClubWebsite/assets/logos/facebook1.png",
        myndsu: currentDay % 2 === 1 ? "/NDSUSkydivingClubWebsite/assets/logos/myndsu2.png" : "/NDSUSkydivingClubWebsite/assets/logos/myndsu1.png"
    };

    // Update footer images based on the current day
    document.getElementById('instagram-icon').src = imageSources.instagram;
    document.getElementById('facebook-icon').src = imageSources.facebook;
    document.getElementById('myndsu-icon').src = imageSources.myndsu;
});
