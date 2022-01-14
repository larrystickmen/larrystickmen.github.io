if !(document.getElementById("version").innerHTML == "0500" && document.getElementById("yearweek").innerHTML > 2202 && (document.getElementById("iden") % 7) == 0 ) {
    alert("Invalid Developer Access Code. Please try again.")
} else {
    window.location.replace("https://larrystudios.github.io/brainhurtgames/dev/BrainHurtGames-v2.5.0-gamma.1.key")
}
