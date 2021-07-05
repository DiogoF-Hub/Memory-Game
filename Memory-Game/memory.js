//Memory.html

let PokemonImages = [];

let PokemonGen1 = [
  "Bulbasaur.png",
  "Caterpie.png",
  "Charmeleon.png",
  "Gengar.png",
  "Ghost.png",
  "Gyarados.png",
  "Magikarp.png",
  "Mewtwo.png",
  "Nidoking.png",
  "Onix.png",
  "Pidgeot.png",
  "Pikachu.png",
  "Shiggy.png",
  "Weezing.png",
  "Zapdos.png",
  "Bulbasaur.png",
  "Caterpie.png",
  "Charmeleon.png",
  "Gengar.png",
  "Ghost.png",
  "Gyarados.png",
  "Magikarp.png",
  "Mewtwo.png",
  "Nidoking.png",
  "Onix.png",
  "Pidgeot.png",
  "Pikachu.png",
  "Shiggy.png",
  "Weezing.png",
  "Zapdos.png",
];

let PokemonGen2 = [
  "Azumarill.png",
  "Chikorita.png",
  "Espeon.png",
  "Granbull.png",
  "Hooh.png",
  "Kingdra.png",
  "Lugia.png",
  "Mantine.png",
  "Miltank.png",
  "Porygon2.png",
  "Slugma.png",
  "Steelix.png",
  "Tryanitar.png",
  "Typhlosion.png",
  "Wobbuffet.png",
  "Azumarill.png",
  "Chikorita.png",
  "Espeon.png",
  "Granbull.png",
  "Hooh.png",
  "Kingdra.png",
  "Lugia.png",
  "Mantine.png",
  "Miltank.png",
  "Porygon2.png",
  "Slugma.png",
  "Steelix.png",
  "Tryanitar.png",
  "Typhlosion.png",
  "Wobbuffet.png",
];

let PokemonGen3 = [
  "Absol.png",
  "Blaziken.png",
  "Gardevoir.png",
  "Groudon.png",
  "Kyogre.png",
  "Lunatone.png",
  "Mawile.png",
  "Metagross.png",
  "Minun.png",
  "Plusle.png",
  "Regice.png",
  "Reptain.png",
  "Sableye.png",
  "Sharpedo.png",
  "Swellow.png",
  "Absol.png",
  "Blaziken.png",
  "Gardevoir.png",
  "Groudon.png",
  "Kyogre.png",
  "Lunatone.png",
  "Mawile.png",
  "Metagross.png",
  "Minun.png",
  "Plusle.png",
  "Regice.png",
  "Reptain.png",
  "Sableye.png",
  "Sharpedo.png",
  "Swellow.png",
];

let ShuffledPokemonImages = [];

let arrayOfCardIds = [];

let cardsnotmatched = [];

let firstCardRevealed = 0;

let CardRevealed = 0;

//let lifesimgfile = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "35"]
let lifes = 0;

let EasyMode = "Easy";
let MediumMode = "Medium";
let HardMode = "Hard";

let modevalue = "Hard";
let genmode = 1;

let minute = 5;
let sec = 00;

let secArray = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"];
let secIndex = 59;

let timermode = '1:00';

let showallcardsmode = false;

//game started html
let modeHTML = '<div id="modehtmlId"></div>';
let gamediv = '<div id="myGame" class="allCards"></div>';
let buttonshowcard = '<button onclick="showallcards();">Show all Cards</button>';


let peppa = 0;

function Start() {
  var PlayTheme = new Audio("../Memory-Game/Audio/PokemonGameTheme.mp3");
  PlayTheme.loop = true;

  var EastereggTheme = new Audio("../Memory-Game/Audio/Numa_Numa_yay.mp3");
  EastereggTheme.loop = true;


  if (peppa == 0) {
    PlayTheme.play();
  } else {
    EastereggTheme.play();
  }


  if (modevalue == "Easy") {
    lifes = 35;
    timermode = '5:00';
    minute = 4;
    secIndex = 59;
  }

  if (modevalue == "Medium") {
    lifes = 20;
    timermode = '3:00';
    minute = 2;
    secIndex = 59;
  }

  if (modevalue == "Hard") {
    lifes = 10;
    timermode = '1:00';
    minute = 0;
    secIndex = 59;
  }

  let timerHTML = '<span id="timercolor"><div>Time Left: <span id="timerSpan">' + timermode + '</span></div></span>';
  let lifesHTML = '<div id="lifeshtmlId">' + '<img src="../Memory-Game/Images/Lifes%20images/' + lifes + '.png"></div>';

  document.body.innerHTML = " ";
  document.body.innerHTML += lifesHTML;
  document.body.innerHTML += modeHTML;
  document.body.innerHTML += timerHTML;
  document.body.innerHTML += gamediv;
  document.body.innerHTML += buttonshowcard;



  document.getElementById("modehtmlId").innerHTML += modevalueimg;

  if (genmode == 1) {
    PokemonImages = PokemonGen1;
  }

  if (genmode == 2) {
    PokemonImages = PokemonGen2;
  }

  if (genmode == 3) {
    PokemonImages = PokemonGen3;
  }

  for (; PokemonImages.length > 0;) {
    let randomPokemonImage = Math.floor(Math.random() * PokemonImages.length);
    ShuffledPokemonImages.push(PokemonImages[randomPokemonImage]);
    PokemonImages.splice(randomPokemonImage, 1);
  }
  PokemonImages = ShuffledPokemonImages;

  for (all of ShuffledPokemonImages) {
    cardsnotmatched.push(all);
  }


  for (let i = 0; i < PokemonImages.length; i++) {
    let newImage = document.createElement("img");

    if (peppa == 0) {
      newImage.src = "../Memory-Game/Images/CardBack.PNG";
    } else {
      newImage.src = "../Memory-Game/Images/Durbaca.png";
    }

    newImage.id = "CardNo" + i;
    arrayOfCardIds.push(newImage.id);
    newImage.classList.add("oneCard");
    document.getElementById("myGame").append(newImage);
    newImage.addEventListener("click", function () {
      cardClicked(newImage.id, i);
    });
  }
  timer();
}

function cardClicked(idOfClickedCard, PokemonIndex) {
  if (showallcardsmode == true) {
    alert("Wait until all cards are back");
  } else {
    if (arrayOfCardIds.includes(idOfClickedCard)) {
      if (idOfClickedCard != firstCardRevealed && CardRevealed != 2) {
        document.getElementById(idOfClickedCard).src =
          "../Memory-Game/Images/Gens/" + PokemonImages[PokemonIndex];
        CardRevealed++;
        if (CardRevealed == 1) firstCardRevealed = idOfClickedCard;

        var cardClickedAudio = new Audio(
          "../Memory-Game/Audio/Pokemon_(A_Button).mp3"
        );
        //var cardClickedAudioEasteregg = new Audio('');
        if (peppa == 0) {
          cardClickedAudio.play();
        } else {
          //cardClickedAudioEasteregg.play();         //Durbaca audio Easteregg
        }

        if (CardRevealed == 2) {
          let imageNameOffFirstCard =
            document.getElementById(firstCardRevealed).src;
          let imagesNameOffSecondCard =
            document.getElementById(idOfClickedCard).src;
          if (imageNameOffFirstCard == imagesNameOffSecondCard) {
            for (let i = 0; i < arrayOfCardIds.length; i++) {
              if (arrayOfCardIds[i] == firstCardRevealed) {
                arrayOfCardIds.splice(i, 1);
                cardsnotmatched.splice(i, 1);
                i--;
              }

              if (arrayOfCardIds[i] == idOfClickedCard) {
                arrayOfCardIds.splice(i, 1);
                cardsnotmatched.splice(i, 1);
                i--;
              }
            }

            lifes++;
          }

          lifes--;
          document.getElementById("lifeshtmlId").innerHTML = '<img src="../Memory-Game/Images/Lifes%20images/' + lifes + '.png">';

          setTimeout(function () {
            putAllImageBack();
          }, 1000);
        }
      }
    }
  }
}

function putAllImageBack() {
  if (arrayOfCardIds.length == 0) {
    window.location.href = "Win.html";
  }

  if (lifes == 0) {
    window.location.href = "GameOver.html";
  }

  if (peppa == 0) {
    for (CardIds of arrayOfCardIds) {
      document.getElementById(CardIds).src =
        "../Memory-Game/Images/CardBack.PNG";
      firstCardRevealed = 0;
      CardRevealed = 0;
    }
  } else {
    for (CardIds of arrayOfCardIds) {
      document.getElementById(CardIds).src =
        "../Memory-Game/Images/Durbaca.png";
      firstCardRevealed = 0;
      CardRevealed = 0;
    }
  }
}

function setGameMode(mode) {
  if (mode == "Easy")
    modevalueimg =
      '<img src="https://fontmeme.com/permalink/210705/969f591ab2a8e06fa5f1fcd3c867689a.png" alt="pokemon-font">';

  if (mode == "Medium")
    modevalueimg =
      '<img src="https://fontmeme.com/permalink/210705/5cabe7bd69d8a2e566f4efe363e3c9ed.png" alt="pokemon-font" >';

  if (mode == "Hard")
    modevalueimg =
      '<img src="https://fontmeme.com/permalink/210705/eb0405c5504fb9d76f8c39efe10ec4fa.png" alt="pokemon-font">';
  modevalue = mode;
  genmodeclear();
}

//gen choosing
let ChooseGenimg =
  '<img src="https://fontmeme.com/permalink/210606/c014f9db31f12e7615757b4b332677d4.png" alt="pokemon-font">';
let gen1HTML =
  '<img onclick="genchoose(1);" class="imgsize hoverr" src="../Memory-Game/Images/Gen%20images/gen1.jpg"></img>';
let gen2HTML =
  '<img onclick="genchoose(2);" class="imgsize hoverr" src="../Memory-Game/Images/Gen%20images/gen2.jpg"></img>';
let gen3HTML =
  '<img onclick="genchoose(3);" class="imgsize hoverr" src="../Memory-Game/Images/Gen%20images/gen3.jpg"></img>';

function genmodeclear() {
  document.body.innerHTML = " ";
  document.body.innerHTML += '<div class="overlay">' + ChooseGenimg + "</div>";
  document.body.innerHTML += '<div class="overlay" id="divimg"></div>';
  document.getElementById("divimg").innerHTML += gen1HTML;
  document.getElementById("divimg").innerHTML += gen2HTML;
  document.getElementById("divimg").innerHTML += gen3HTML;
}

function genchoose(whatgen) {
  genmode = whatgen;
  Start();
}

function showallcards() {
  showallcardsmode = true;
  for (let i = 0; i < arrayOfCardIds.length; i++) {
    document.getElementById(arrayOfCardIds[i]).src = "../Memory-Game/Images/Gens/" + cardsnotmatched[i];
  }

  setTimeout(function () {
    putAllImageBack();
    showallcardsmode = false;
  }, 2000);
}

function timer() {
  setInterval(function () {
    sec = secArray[secIndex];

    if (secIndex == 0 && minute == 00) {
      window.location.href = "GameOver.html";
    }

    document.getElementById("timerSpan").innerHTML = minute + ":" + sec;

    secIndex--;

    if (secIndex < 0) {
      minute--;
      secIndex = 59;
    }

  }, 1000);
}