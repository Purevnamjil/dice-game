// Тоглогчийн ээлжийг хадгалах хувьсагч нэгдүгээр тоглогчийг 0, хоёрдугаартоглогчийг 1 гэж тэмдэглэе.
var activePlayer = 1;

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// Ээлжийн оноог хадгалах хувьсагч
var roundScore = 0;

// Шооны аль талаар буусныг хадгалах хувьсагч 1-6 гэсэн утгыг энэ хувьсагчид санмсаргүйгээр үүсгэж өгнө.
var dice = Math.floor(Math.random() * 6) + 1;

// window.document.querySelector("#score-0").textContent = dice;

// window.document.querySelector("#score-1").innerHTML = "<em> 'boldoo' </em>";

// Программ эхлэхэд бэлтгэе
window.document.querySelector(".dice").style.display = "none";

window.document.querySelector("#score-0").textContent = 0;

window.document.querySelector("#score-1").innerHTML = 0;

window.document.querySelector("#current-0").textContent = 0;

window.document.querySelector("#current-1").innerHTML = 0;

console.log("Шоо:" + dice);
