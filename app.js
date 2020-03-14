// Тоглогчийн ээлжийг хадгалах хувьсагч нэгдүгээр тоглогчийг 0, хоёрдугаартоглогчийг 1 гэж тэмдэглэе.
var activePlayer = 1;

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// Ээлжийн оноог хадгалах хувьсагч
var roundScore = 0;

// Шооны аль талаар буусныг хадгалах хувьсагч 1-6 гэсэн утгыг энэ хувьсагчид санмсаргүйгээр үүсгэж өгнө.

// Программ эхлэхэд бэлтгэе

document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").innerHTML = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").innerHTML = 0;

var diceDom = document.querySelector(".dice");

document.querySelector(".btn-roll").addEventListener("click", function() {
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
});
