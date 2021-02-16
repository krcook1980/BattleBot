//character images found at https://www.vhv.rs/
//Objects for my characters
var barbarian = {
    name: "Rampage",
    hitPoints: 20,
    health: 75,
    magic: 0,
    image: "assets/Barbarian.png"
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
    image: "assets/Monk.png"
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
    image: "assets/Wizard.png"
}


var char1;
var char2 = ["barbarian", "fairy", "monk", "ogre", "witch", "wizard"];
var store1 =""; 
var store2 = "";
var health = Math.floor(Math.random()*15)

//change to fight area when character is selected and populate character images
function divControl() {
    $(".characterSelect").addClass("d-none");
    $(".battle").removeClass("d-none");
    $("h1").text("Battle!!!");
   
    objAssign();
    
    $(".player1").append(`<img src='${char1.image}'></img>`);
    $(".player2").append(`<img src='${char2.image}'></img>`);
    $(".stats1").text("Life remaining " + char1.health);
    $(".stats2").text("Life remaining " + char2.health);
}

//assign characters
$(".characterName").click(function () {
    localStorage.clear();

    //get character choice & save
    char1 = this.id;
    localStorage.setItem("char1", char1)
    
    //remove char1 from computer choice array
    // let compChoice = char2.filter(function(guy){
    //     return guy !== char1
    // });

    let compChoice = filter(char2, (guy) => {return guy !== char1 });
    
    //generate random computer choice opponent and save
    let i = Math.floor(Math.random() * compChoice.length);
    char2 = compChoice[i];
    localStorage.setItem("char2", char2)
    
    //move to fight section
    divControl();
    
})

//change string of character name to variable
function objAssign() {
    store1 =  localStorage.getItem("char1");
    store2 =  localStorage.getItem("char2");
 
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

 
    
$("#fight").click(function (){
    $(".attackImg").empty();
    battle();
})

function battle (){
    var reflex = Math.floor(Math.random()*10)

    
    objAssign();
    $(".attackImg").empty();

    if(char2.health < 1) {
        $(".attack").empty();
        $(".attackImg").append("<img class='pow mb-6' src='assets/dead.png'></img>");
        $(".stats2").text(char2.name + " is dead")
        $(".attackImg").append(char1.name + " WINS!");
    }
    else if(char1.health < 1){
        
        $(".attackImg").empty();
        $(".attack").empty();
        $(".stats1").text(char1.name + " is dead")
        $(".attackImg").append(char2.name + " WINS!");
    }
    else {
        //generate and use random health potion
        var potion = Math.floor(Math.random()*2)

        $(".attackImg").append("<img class='pow mb-6' src='assets/attack.png'></img>");
        if(potion === 0){
            char2.health = char2.health -= char1.hitPoints;
            char1.health = char1.health -= reflex;
            
        $(".stats1").text("Life remaining " + char1.health);
        $(".stats2").text("Life remaining " + char2.health);
        
        } else{
            var newLife = char2.health -= char1.hitPoints;
            newLife = newLife += health;
            char2.health = newLife;
            char1.health = char1.health -= reflex;
            $(".attackImg").empty();
        $(".attackImg").append("<img class='pow' src='assets/potion.png'></img>");
        $(".attackImg").append("Health Potion!!");
        $(".stats2").text("Life remaining " + char2.health);
        $(".stats1").text("Life remaining " + char1.health);
        } 
       
    }
    
} 
 