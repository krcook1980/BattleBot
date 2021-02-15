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
var store1 =""; 
var store2 = "";
var health = 5;

function divControl() {
    $(".characterSelect").addClass("d-none");
    $(".battle").removeClass("d-none");
    $("h1").text("Battle!!!");
   
    objAssign();
    
    $(".player1").append(`<img src='${char1.image}'></img>`);
    $(".player2").append(`<img src='${char2.image}'></img>`);
    $(".stats1").append("Life remaining " + char1.health);
    $(".stats2").append("Life remaining " + char2.health);
}

$(".characterName").click(function () {
    localStorage.clear();
    char1 = this.id;
    localStorage.setItem("char1", char1)
    let i = Math.floor(Math.random() * char2.length);
    char2 = char2[i];
    localStorage.setItem("char2", char2)
    
    divControl();
    
})

function objAssign() {
    store1 =  localStorage.getItem("char1");
    store2 =  localStorage.getItem("char2");
    console.log(store1)
    console.log(store2)
    switch (store1) {
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
    switch (store2) {
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

 
    
$("#fight").click(function battle (){
    var potion = Math.floor(Math.random()*2)
   // $("#fight").addClass("d-none");
    objAssign();
    $(".attackImg").append("<img src='assets/attack.png'></img>")
    if(potion === 0){
        char2.health = char2.health -= char1.hitPoints
        
      $(".stats1").text("Life remaining " + char1.health);
      $(".stats2").text("Life remaining " + char2.health);
      
    } else{
        let newPoints = char2.health -= char1.hitPoints;
        newPoints = newPoints += health;
        char2.health = newPoints;
      console.log(char2.hitPoints);
      $(".attackImg").attr("src", "assets/potion.png");
      $(".attack").text("Health Potion!!");
      $(".stats2").text("Life remaining " + char2.health);
      $(".stats1").text("Life remaining " + char1.health);
    } 
})
   
 