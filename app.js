//Тоглоом дууссан эсэхийг шалгах функц
var isActiveGame;

var activePlayer;
var scores;
var roundScore;
var diceDom = document.querySelector(".dice");

initGame();

//Шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener("click", function() {
  if (isActiveGame === true) {
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    //Шооны зургийг гаргаж ирнэ
    diceDom.style.display = "block";

    //шооны тоог гаргаж ирнэ.
    diceDom.src = "dice-" + diceNumber + ".png";

    // Буусан тоо 1-ээс ялгаатай бол идэвхтэй тоглогчийн ээлжийн оноог нэмэгдүүлнэ.
    if (diceNumber !== 1) {
      //буусан тоо нэгээс ялгаатай бол оноог нэмэгдүүлнэ
      roundScore = roundScore + diceNumber;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      //1 гарвал
      checkWinner();
    }
  } else {
    alert("Тоглоом дууссан. Шинээр эхлүүлэх товчийг дарна уу!");
  }
});

// hold товчны эвент листенер
document.querySelector(".btn-hold").addEventListener("click", function() {
  if (isActiveGame === true) {
    //Одоогоор цуглуулсан оноог нийт оноонд нэмж өгөх
    scores[activePlayer] = scores[activePlayer] + roundScore;

    //Дэлгэц дээр оноог нь өөрчилнө.
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    //хожсон эсэхийг шалгах
    checkWinner();
  } else {
    alert("тоглоом дууссан шүү оппа");
  }
});

function checkWinner() {
  if (scores[activePlayer] >= 100) {
    //Тоглоомыг дууссан төлөвт оруулна.
    isActiveGame = false;

    document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add(winner);
  } else {
    switchToNextPlayer();
  }
}

//Энэ функц нь тоглох ээлжийг дараагийн тоглогч руу шилжүүлдэг.
function switchToNextPlayer() {
  //ээлжиндээ цуглуулсан тоглогчийн оноог 0 болгоно.
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;

  //шоог түр алга болгоно.
  diceDom.style.display = "none";

  // Идвэхтэй тоглогч 0 байвал идэвхтэй тоглогчийг 1 болго.
  // үгүй бол 0 болго.
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  //active тоглогчийг солино.
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
}

//Шинэ тоглоом эхлүүлэх товч
document.querySelector(".btn-new").addEventListener("click", initGame);

function initGame() {
  isActiveGame = true;
  // Тоглогчийн ээлжийг хадгалах хувьсагч нэгдүгээр тоглогчийг 0, хоёрдугаартоглогчийг 1 гэж тэмдэглэе.
  activePlayer = 0;

  // Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
  scores = [0, 0];

  // Ээлжийн оноог хадгалах хувьсагч
  roundScore = 0;

  // Шооны аль талаар буусныг хадгалах хувьсагч 1-6 гэсэн утгыг энэ хувьсагчид санмсаргүйгээр үүсгэж өгнө.

  // Программ эхлэхэд бэлтгэе

  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").innerHTML = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").innerHTML = 0;

  diceDom.style.display = "none";

  //тоглогчдын нэрийг анхны утгаар нь болгох.
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  //active тооглогчдийг өөрчлөх.
  document.querySelector(".player-0-panel").classList.add("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  //winner-ын өөрчлөлтүүдийг алга болгох.
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
}
