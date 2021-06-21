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
let lifesHTML = '<div id="lifeshtmlId"><img id="lifesimg" src="https://fontmeme.com/permalink/210605/3cc35532ed01e7cd47cdc80d5367feb7.png" alt="pokemon-font"></div>';
let modeHTML = '<div id="modehtmlId"><img id="modeimg" src="https://fontmeme.com/permalink/210605/84d210e951f3f215a5acbd5a523dd731.png" alt="pokemon-font"></div>';
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

  let timerHTML = '<div>Time Left: <span id="timerSpan">' + timermode + '</span></div>';

  document.body.innerHTML = " ";
  document.body.innerHTML += lifesHTML;
  document.body.innerHTML += modeHTML;
  document.body.innerHTML += gamediv;
  document.body.innerHTML += buttonshowcard;
  document.body.innerHTML += timerHTML;

  document.getElementById("lifeshtmlId").innerHTML =
    lifesHTML +
    '<div id="fontfont"><span id="spancolor">' +
    lifes +
    "</span></div>";
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
          document.getElementById("lifeshtmlId").innerHTML =
            lifesHTML +
            '<div id="fontfont"><span id="spancolor">' +
            lifes +
            "</span></div>";

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
      '<img src="https://fontmeme.com/permalink/210605/ee68af9491eba2ff5c2c1921b9e0d6af.png" alt="pokemon-font">';

  if (mode == "Medium")
    modevalueimg =
      '<img src="https://fontmeme.com/permalink/210605/3be8f2bfdf00e75a26210145bc240ef4.png" alt="pokemon-font" >';

  if (mode == "Hard")
    modevalueimg =
      '<img src="https://fontmeme.com/permalink/210605/80739bc7959011c57f8f5bdf9371a6db.png" alt="pokemon-font">';
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