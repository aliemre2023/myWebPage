function changeImage(){
    var image = document.getElementById("omaygat");
    image.src = "visuals/06a.jpg";
}
function resetImage(){
    var image = document.getElementById("omaygat");
    image.src = "visuals/ummm.gif";
}

function colorization(){
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);

    colorADO = "rgb(" +red+ "," +green+ "," +blue+ ")";
    document.body.style.backgroundColor = colorADO;
}
