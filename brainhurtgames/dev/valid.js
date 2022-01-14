if !(document.getElementById("version").innerHTML == "0500" && document.getElementById("yearweek").innerHTML > 2202 && (document.getElementById("iden") % 7) == 0 && ( document.getElementById("type") == "DEV" || document.getElementById("type") == "PPT" ) ) {
    alert("Invalid Developer Access Code. Please try again.")
} else if (document.getElementById("type") == "DEV") {
    window.location.replace("https://github.com/larrystudiosdevs/brainhurtgames/releases/download/v2.5.0-gamma.1/BrainHurtGames-v2.5.0-gamma.1.key")
} else if (document.getElementById("type") == "PPT") {
    window.location.replace("https://github.com/larrystudiosdevs/brainhurtgames/releases/download/v2.5.0-gamma.1/BrainHurtGames-v2.5.0-gamma.1.pptx")
}
