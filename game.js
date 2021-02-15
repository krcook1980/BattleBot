//attack image show up only for 1 second and then hide


//healing potion drop math.random

//Objects for my characters
var barbarian = {
    name: "Rampage",
    hitPoints: 20,
    health: 75,
    magic: 0,
    image: "assets/barbarian.png"
}

var fairy = {
    name: "Twix",
    hitPoints: 10,
    health: 80,
    magic: 15,
    image: "assets/Fairy.png"
}

var monk = {
    name: "Shenzu",
    hitPoints: 15,
    health: 80,
    magic: 10,
    image: "assets/monk.png"
}

var ogre = {
    name: "Bloodmaw",
    hitPoints: 20,
    health: 70,
    magic: 0,
    image: "assets/ogre.png"
}

var witch = {
    name: "Sangoma",
    hitPoints: 10,
    health: 75,
    magic: 15,
    image: "assets/witch.png"
}

var wizard = {
    name: "Draven",
    hitPoints: 15,
    health: 80,
    magic: 15,
    image: "assets/wizard.png"
}



//choose your player

//images found at https://www.vhv.rs/
var char1;
var char2 = ["barbarian", "fairy", "monk", "ogre", "witch", "wizard"];
var store1;
var store2;

function divControl() {
    $(".characterSelect").addClass("d-none");
    $(".battle").removeClass("d-none");
    $("h1").text("Battle!!!")
}

$(".characterName").click(function () {
    char1 = this.id;
    // console.log(char1);
    let i = Math.floor(Math.random() * char2.length);
    char2 = char2[i];
    // console.log(char2);
    //$(".characterSelect").addClass("is-hidden")
    divControl();
    objAssign();
     

    $(".player1").append(`<img src='${char1.image}'></img>`);
    $(".player2").append(`<img src='${char2.image}'></img>`);
    console.log(char1)
})

function objAssign() {
    switch (char1) {
        case "barbarian":
            char1 = barbarian;
            break;
        case "fairy":
            char1 = fairy;
            break;
        case "monk":
            char1 = monk;
            break;
        case "ogre":
            char1 = ogre;
            break;
        case "witch":
            char1 = witch;
            break;
        case "wizard":
            char1 = wizard;
            break;
    }
    switch (char2) {
        case "barbarian":
            char2 = barbarian;
            break;
        case "fairy":
            char2 = fairy;
            break;
        case "monk":
            char2 = monk;
            break;
        case "ogre":
            char2 = ogre;
            break;
        case "witch":
            char2 = witch;
            break;
        case "wizard":
            char2 = wizard;
            break;
    }
    
   
}

 
    
$("#fight").click(function(char1, char2){
    //    $("#fight").addClass("is-hidden");
 
    console.log("character 2 " + char2.hitPoints);
    var potion = Math.floor(Math.random()*2)
    if(potion === 0){
      char2.health = char2.health - char1.hitPoints
      

    } else{
      char2.health = char2.health - char1.hitPoints + 5
      console.log(char2.hitPoints);
      $(".outcome").text("Health Potion!!")
    } 
    
   })
