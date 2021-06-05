

//Memory.html


let PokemonImages = ["Pikachu.png", "Charmeleon.png", "Caterpie.png", "Shiny.png", "Lugia.png", "Shiggy.png", "Ghost.png", "Gengar.png", "Greninja.png", "Onix.png", "Toxiped.png", "Bulbasaur.png", "gyarados.png", "Pikachu.png", "Charmeleon.png", "Caterpie.png", "Shiny.png", "Lugia.png", "Shiggy.png", "Ghost.png", "Gengar.png", "Greninja.png", "Onix.png", "Toxiped.png", "Bulbasaur.png", "gyarados.png"]

let PokemonGen1 = [];
let PokemonGen2 = [];
let PokemonGen3 = [];

let ShuffledPokemonImages = [];

let arrayOfCardIds = [];

let firstCardRevealed = 0;

let CardRevealed = 0;

let lifes = 0;

let EasyMode = "Easy";
let MediumMode = "Medium";
let HardMode = "Hard";

let modevalue = "Hard";

//game started html
let lifesHTML = '<div id="lifeshtmlId"><img id="lifesimg" src="https://fontmeme.com/permalink/210605/3cc35532ed01e7cd47cdc80d5367feb7.png" alt="pokemon-font"></div>'
let modeHTML = '<div id="modehtmlId"><img id="modeimg" src="https://fontmeme.com/permalink/210605/84d210e951f3f215a5acbd5a523dd731.png" alt="pokemon-font"></div>'
let gamediv = '<div id="myGame" class="allCards"></div>';

let peppa = 0

function Start() {
    var PlayTheme = new Audio('../Memory-Game/Audio/PokemonGameTheme.mp3');
    var EastereggTheme = new Audio('../Memory-Game/Audio/Numa_Numa_yay.mp3');

    if(peppa == 0){
        PlayTheme.play();
    } else {
        EastereggTheme.play();
    }
    

    //modevalue = document.getElementById("ModeDifficultySelect").value;

    document.body.innerHTML = " ";
    document.body.innerHTML += lifesHTML;
    document.body.innerHTML += modeHTML;
    document.body.innerHTML += gamediv;


    if(modevalue == "Easy"){
        lifes = 35;
    }

    if(modevalue == "Medium"){
        lifes = 20;
    }

    if(modevalue == "Hard"){
        lifes = 10;
    }

    document.getElementById("lifeshtmlId").innerHTML += lifes;
    document.getElementById("modehtmlId").innerHTML += modevalue;

    



    for (let i = 0; i < PokemonImages.length; i++) {
        let newImage = document.createElement("img");
        newImage.src = "../Memory-Game/Images/CardBack.PNG";
        newImage.id = "CardNo" + i;
        arrayOfCardIds.push(newImage.id);
        newImage.classList.add("oneCard");
        document.getElementById("myGame").append(newImage);
        newImage.addEventListener("click", function () { cardClicked(newImage.id, i); });
    }
}

function cardClicked(idOfClickedCard, PokemonIndex) {


    if (idOfClickedCard != firstCardRevealed && CardRevealed != 2) {
        document.getElementById(idOfClickedCard).src = PokemonImages[PokemonIndex];
        CardRevealed++;
        if (CardRevealed == 1) firstCardRevealed = idOfClickedCard;

        var cardClickedAudio = new Audio('../Memory-Game/Audio/Pokemon_(A_Button).mp3');
        cardClickedAudio.play();

        if (CardRevealed == 2) {
            let imageNameOffFirstCard = document.getElementById(firstCardRevealed).src;
            let imagesNameOffSecondCard = document.getElementById(idOfClickedCard).src;
            if (imageNameOffFirstCard == imagesNameOffSecondCard) {
                for (let i = 0; i < arrayOfCardIds.length; i++) {
                    if (arrayOfCardIds[i] == firstCardRevealed) {
                        arrayOfCardIds.splice(i, 1)
                        i--;
                    }

                    if (arrayOfCardIds[i] == idOfClickedCard) {
                        arrayOfCardIds.splice(i, 1)
                        i--;
                    }
                }


                lifes++;
            }


            lifes--;
            document.getElementById("lifesId").innerHTML = "Lives left: " + lifes;

            setTimeout(function () {
                putAllImageBack();   //Q try to change this
            }, 1000);
        }
    }

}

function putAllImageBack() {

    if (arrayOfCardIds.length == 0) {
        window.location.href = 'Win.html';
    }

    if (lifes == 0) {
        window.location.href = 'GameOver.html';
    }

    for (CardIds of arrayOfCardIds) {
        document.getElementById(CardIds).src = "../Memory-Game/Images/CardBack.PNG";
        firstCardRevealed = 0;
        CardRevealed = 0;
    }
}


function easymode() {
    modevalue = "Easy";
    Start();
}

function mediummode() {
    modevalue = "Medium";
    Start();
}

function hardmode() {
    modevalue = "Hard";
    Start();
}



//StartScreen.html

function StartGame() {
    window.location.href = 'memory.html'; 
}
