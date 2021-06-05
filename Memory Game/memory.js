

//Memory.html


let PokemonImages = ["Pikachu.png", "Charmeleon.png", "Caterpie.png", "Shiny.png", "Lugia.png", "Shiggy.png", "Ghost.png", "Gengar.png", "Greninja.png", "Onix.png", "Toxiped.png", "Bulbasaur.png", "gyarados.png", "Pikachu.png", "Charmeleon.png", "Caterpie.png", "Shiny.png", "Lugia.png", "Shiggy.png", "Ghost.png", "Gengar.png", "Greninja.png", "Onix.png", "Toxiped.png", "Bulbasaur.png", "gyarados.png"]

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
let lifesHTML = '<h1><span class="color" id="lifesId"></span></h1>';
let modeHTML = '<h2><span class="color" id="modeLevelId"></span></h2>';
let gamediv = '<div id="myGame" class="allCards"></div>';

let peppa = 0

function Start() {
    var PlayTheme = new Audio('PokemonGen1GameTheme.mp3');
    var EastereggTheme = new Audio('Numa_Numa_yay.mp3');

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

    document.getElementById("lifesId").innerHTML = "Lifes left: " + lifes;
    document.getElementById("modeLevelId").innerHTML = "Level: " + modevalue;

    
    for (; PokemonImages.length > 0;) {
        let randomPokemonImage = Math.floor(Math.random() * PokemonImages.length);
        ShuffledPokemonImages.push(PokemonImages[randomPokemonImage])
        PokemonImages.splice(randomPokemonImage, 1)

    }
    PokemonImages = ShuffledPokemonImages;


    for (let i = 0; i < PokemonImages.length; i++) {
        let newImage = document.createElement("img");
        newImage.src = "CardBack.png";
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

        var cardClickedAudio = new Audio('Pokemon_(A_Button).mp3');
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
            document.getElementById("lifesId").innerHTML = "Lifes left: " + lifes;

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
        document.getElementById(CardIds).src = "CardBack.png";
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
