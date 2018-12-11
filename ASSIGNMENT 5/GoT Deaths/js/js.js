var width = $(window).width(); //width of the screen

var s1 = false; //booleans to check which season is selected
var s2 = false;
var s3 = false;
var s4 = false;
var s5 = false;
var s6 = false;
var total = true;

$("img").css("width", width - 300); //width and height of the images
$("img").css("height", "auto");

$("img").css("left", "50%"); //margins for the images
$("img").css("margin-left", -(width / 2) + 150);

$(".total").css("visibility", "visible"); //set the total seasons chart as default
$(".btnTotal").css("color", "#F58030");

$.fn.multiline = function (text) { //source: https://stackoverflow.com/questions/4535888/jquery-text-and-newlines, to add a new lines in the important deaths paragraphs
    this.text(text);
    this.html(this.html().replace(/\n/g, '<br/>'));
    return this;
}

$(".btnTotal").click(function () { //click listeners to set the visability of the images, the color of the buttons and the booleans so the right season information/ hightlighted buttons are shown
    $(".total").css("visibility", "visible");
    $(".s1").css("visibility", "hidden");
    $(".s2").css("visibility", "hidden");
    $(".s3").css("visibility", "hidden");
    $(".s4").css("visibility", "hidden");
    $(".s5").css("visibility", "hidden");
    $(".s6").css("visibility", "hidden");
    s1 = false;
    s2 = false;
    s3 = false;
    s4 = false;
    s5 = false;
    s6 = false;
    total = true;
    $(".btns1").css("color", "white");
    $(".btns2").css("color", "white");
    $(".btns3").css("color", "white");
    $(".btns4").css("color", "white");
    $(".btns5").css("color", "white");
    $(".btns6").css("color", "white");
    $(".btnTotal").css("color", "#F58030");

})

$(".btns1").click(function () {
    $(".total").css("visibility", "hidden");
    $(".s1").css("visibility", "visible");
    $(".s2").css("visibility", "hidden");
    $(".s3").css("visibility", "hidden");
    $(".s4").css("visibility", "hidden");
    $(".s5").css("visibility", "hidden");
    $(".s6").css("visibility", "hidden");
    s1 = true;
    s2 = false;
    s3 = false;
    s4 = false;
    s5 = false;
    s6 = false;
    total = false;
    $(".btns1").css("color", "#F58030");
    $(".btns2").css("color", "white");
    $(".btns3").css("color", "white");
    $(".btns4").css("color", "white");
    $(".btns5").css("color", "white");
    $(".btns6").css("color", "white");
    $(".btnTotal").css("color", "white");

})

$(".btns2").click(function () {
    $(".s1").css("visibility", "hidden");
    $(".total").css("visibility", "hidden");
    $(".s2").css("visibility", "visible");
    $(".s3").css("visibility", "hidden");
    $(".s4").css("visibility", "hidden");
    $(".s5").css("visibility", "hidden");
    $(".s6").css("visibility", "hidden");
    s1 = false;
    s2 = true;
    s3 = false;
    s4 = false;
    s5 = false;
    s6 = false;
    total = false;
    $(".btns1").css("color", "white");
    $(".btns2").css("color", "#F58030");
    $(".btns3").css("color", "white");
    $(".btns4").css("color", "white");
    $(".btns5").css("color", "white");
    $(".btns6").css("color", "white");
    $(".btnTotal").css("color", "white");

})

$(".btns3").click(function () {
    $(".s1").css("visibility", "hidden");
    $(".total").css("visibility", "hidden");
    $(".s2").css("visibility", "hidden");
    $(".s3").css("visibility", "visible");
    $(".s4").css("visibility", "hidden");
    $(".s5").css("visibility", "hidden");
    $(".s6").css("visibility", "hidden");
    s1 = false;
    s2 = false;
    s3 = true;
    s4 = false;
    s5 = false;
    s6 = false;
    total = false;
    $(".btns1").css("color", "white");
    $(".btns2").css("color", "white");
    $(".btns3").css("color", "#F58030");
    $(".btns4").css("color", "white");
    $(".btns5").css("color", "white");
    $(".btns6").css("color", "white");
    $(".btnTotal").css("color", "white");

})

$(".btns4").click(function () {
    $(".s1").css("visibility", "hidden");
    $(".total").css("visibility", "hidden");
    $(".s2").css("visibility", "hidden");
    $(".s3").css("visibility", "hidden");
    $(".s4").css("visibility", "visible");
    $(".s5").css("visibility", "hidden");
    $(".s6").css("visibility", "hidden");
    s1 = false;
    s2 = false;
    s3 = false;
    s4 = true;
    s5 = false;
    s6 = false;
    total = false;
    $(".btns1").css("color", "white");
    $(".btns2").css("color", "white");
    $(".btns3").css("color", "white");
    $(".btns4").css("color", "#F58030");
    $(".btns5").css("color", "white");
    $(".btns6").css("color", "white");
    $(".btnTotal").css("color", "white");

})

$(".btns5").click(function () {
    $(".s1").css("visibility", "hidden");
    $(".total").css("visibility", "hidden");
    $(".s2").css("visibility", "hidden");
    $(".s3").css("visibility", "hidden");
    $(".s4").css("visibility", "hidden");
    $(".s5").css("visibility", "visible");
    $(".s6").css("visibility", "hidden");
    s1 = false;
    s2 = false;
    s3 = false;
    s4 = false;
    s5 = true;
    s6 = false;
    total = false;
    $(".btns1").css("color", "white");
    $(".btns2").css("color", "white");
    $(".btns3").css("color", "white");
    $(".btns4").css("color", "white");
    $(".btns5").css("color", "#F58030");
    $(".btns6").css("color", "white");
    $(".btnTotal").css("color", "white");

})

$(".btns6").click(function () {
    $(".s1").css("visibility", "hidden");
    $(".total").css("visibility", "hidden");
    $(".s2").css("visibility", "hidden");
    $(".s3").css("visibility", "hidden");
    $(".s4").css("visibility", "hidden");
    $(".s5").css("visibility", "hidden");
    $(".s6").css("visibility", "visible");
    s1 = false;
    s2 = false;
    s3 = false;
    s4 = false;
    s5 = false;
    s6 = true;
    total = false;
    $(".btns1").css("color", "white");
    $(".btns2").css("color", "white");
    $(".btns3").css("color", "white");
    $(".btns4").css("color", "white");
    $(".btns5").css("color", "white");
    $(".btns6").css("color", "#F58030");
    $(".btnTotal").css("color", "white");

})

$(".hover").mouseover(function () { //moveover listener to show to outline images/hide the other ones and to show the total death count/ important deaths
    if (s1) {
        $(".s1Outline").css("visibility", "visible");
        $(".s2Outline").css("visibility", "hidden");
        $(".s3Outline").css("visibility", "hidden");
        $(".s4Outline").css("visibility", "hidden");
        $(".s5Outline").css("visibility", "hidden");
        $(".s6Outline").css("visibility", "hidden");
        $(".totalOutline").css("visibility", "hidden");
        $(".importantDeathsh3").css("visibility", "visible");

        $(".info").css("visibility", "visible"); 
        $(".deathcount").text("25 people");
        $(".importantDeaths").multiline("Jon Arryn\n Viserys Targaryen\n Robert Baratheon\n Eddard Stark\n Khal Drogo"); //multiline function on line 20
    } else if (s2) {
        $(".s1Outline").css("visibility", "hidden");
        $(".s2Outline").css("visibility", "visible");
        $(".s3Outline").css("visibility", "hidden");
        $(".s4Outline").css("visibility", "hidden");
        $(".s5Outline").css("visibility", "hidden");
        $(".s6Outline").css("visibility", "hidden");
        $(".totalOutline").css("visibility", "hidden");
        $(".importantDeathsh3").css("visibility", "visible");

        $(".info").css("visibility", "visible");
        $(".deathcount").text("28 people");
        $(".importantDeaths").multiline("Renly Baratheon\n Alton Lannister");
    } else if (s3) {
        $(".s1Outline").css("visibility", "hidden");
        $(".s2Outline").css("visibility", "hidden");
        $(".s3Outline").css("visibility", "visible");
        $(".s4Outline").css("visibility", "hidden");
        $(".s5Outline").css("visibility", "hidden");
        $(".s6Outline").css("visibility", "hidden");
        $(".totalOutline").css("visibility", "hidden");
        $(".info").css("visibility", "visible");
        $(".importantDeathsh3").css("visibility", "visible");

        $(".deathcount").text("19 people");
        $(".importantDeaths").multiline("Talisa Stark\n Robb Stark\n Catelyn Stark");
    } else if (s4) {
        $(".s1Outline").css("visibility", "hidden");
        $(".s2Outline").css("visibility", "hidden");
        $(".s3Outline").css("visibility", "hidden");
        $(".s4Outline").css("visibility", "visible");
        $(".s5Outline").css("visibility", "hidden");
        $(".s6Outline").css("visibility", "hidden");
        $(".totalOutline").css("visibility", "hidden");
        $(".importantDeathsh3").css("visibility", "visible");

        $(".info").css("visibility", "visible");
        $(".deathcount").text("30 people");
        $(".importantDeaths").multiline("Joffrey Baratheon\n Lysa Arryn\n Oberyn Martell\n Ygritte\n Shae\n Tywin Lannister");
    } else if (s5) {
        $(".s1Outline").css("visibility", "hidden");
        $(".s2Outline").css("visibility", "hidden");
        $(".s3Outline").css("visibility", "hidden");
        $(".s4Outline").css("visibility", "hidden");
        $(".s5Outline").css("visibility", "visible");
        $(".s6Outline").css("visibility", "hidden");
        $(".totalOutline").css("visibility", "hidden");
        $(".importantDeathsh3").css("visibility", "visible");

        $(".info").css("visibility", "visible");
        $(".deathcount").text("23 people");
        $(".importantDeaths").multiline("Mance Rayder\n Master Aemon\n Shrine Baratheon\n Stannis Baratheon\n Myrcella Baratheon\n Jon Snow");
    } else if (s6) {
        $(".s1Outline").css("visibility", "hidden");
        $(".s2Outline").css("visibility", "hidden");
        $(".s3Outline").css("visibility", "hidden");
        $(".s4Outline").css("visibility", "hidden");
        $(".s5Outline").css("visibility", "hidden");
        $(".s6Outline").css("visibility", "visible");
        $(".totalOutline").css("visibility", "hidden");
        $(".importantDeathsh3").css("visibility", "visible");

        $(".info").css("visibility", "visible");
        $(".deathcount").text("41 people");
        $(".importantDeaths").multiline("Roose Bolton\n Balon Greyjoy\n Hodor\n Rickon Stark\n Ramsay Bolton\n High Sparrow\n Margaery Tyrell\n Loras Tyrell\n Tommen Baratheon\n Walder Frey");
    } else if (total) {
        $(".s1Outline").css("visibility", "hidden");
        $(".s2Outline").css("visibility", "hidden");
        $(".s3Outline").css("visibility", "hidden");
        $(".s4Outline").css("visibility", "hidden");
        $(".s5Outline").css("visibility", "hidden");
        $(".s6Outline").css("visibility", "hidden");
        $(".totalOutline").css("visibility", "visible");

        $(".info").css("visibility", "visible");
        $(".deathcount").text("166 people");
        $(".importantDeathsh3").css("visibility", "hidden");
    }
})

$(".hover").mouseleave(function () { //mouseleave function to make all outline images hidden
        $(".s1Outline").css("visibility", "hidden");
        $(".s2Outline").css("visibility", "hidden");
        $(".s3Outline").css("visibility", "hidden");
        $(".s4Outline").css("visibility", "hidden");
        $(".s5Outline").css("visibility", "hidden");
        $(".s6Outline").css("visibility", "hidden");
    $(".importantDeathsh3").css("visibility", "hidden");
        $(".totalOutline").css("visibility", "hidden");
        $(".info").css("visibility", "hidden");
})
