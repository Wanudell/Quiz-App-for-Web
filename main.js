let headerMark = document.getElementById("headerMark");
let headerQuestion = document.getElementById("headerQuestion");
let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");

let questions = [
  " “Sinekli Bakkal” Romanının Yazarı Aşağıdakilerden Hangisidir ?",
  "Aşağıda Verilen İlk Çağ Uygarlıklarından Hangisi Yazıyı İcat Etmiştir ?",
  "Tsunami Felaketinde En Fazla Zarar Gören Güney Asya Ülkesi Aşağıdakilerden Hangisidir ?",
  "2003 Yılında Euro Vizyon Şarkı Yarışmasında Ülkemizi Temsil Eden ve Yarışmada Birinci Gelen Sanatçımız Kimdir ?",
  "BilgeAdam Teknoloji'nin kuruluş tarihi nedir ?",
];

const answers1 = [
  "Reşat Nuri Güntekin",
  "Hititler",
  "Endonezya",
  "Athena",
  "1995",
];
let answers2 = [
  "Halide Edip Adıvar",
  "Elamlar",
  "Srilanka",
  "Sertap Erener",
  "1996",
];
let answers3 = ["Ziya Gökalp", "Sümerler", "Tayland", "Şebnem Paker", "1997"];
let answers4 = [
  "Ömer Seyfettin",
  "Urartular",
  "Hindistan",
  "Ajda Pekkan",
  "1998",
];
const headerTag = ["SORU 1", "SORU 2", "SORU 3", "SORU 4", "SORU 5"];

const txtName = document.getElementById("txtName");
const txtLastName = document.getElementById("txtLastName");
const txtAge = document.getElementById("txtAge");
const txtGender = document.getElementById("txtGender");
const mainDiv = document.getElementById("hebele");
const beginTesting = document.getElementById("beginTesting");
const answerA = document.getElementById("answerA");
const answerB = document.getElementById("answerB");
const answerC = document.getElementById("answerC");
const answerD = document.getElementById("answerD");
let pointGuard = 0;

function beginTests() {
  if (
    txtName.value == "" ||
    txtLastName.value == "" ||
    txtAge.value == "" ||
    txtGender.value == ""
  ) {
    return;
  }
  beginTesting.style.display = "none";
  mainDiv.style.display = "flex";
  headerMark.innerHTML = headerTag[0];
  headerQuestion.innerHTML = questions[0];
  answer1.innerHTML = answers1[0];
  answer2.innerHTML = answers2[0];
  answer3.innerHTML = answers3[0];
  answer4.innerHTML = answers4[0];
}

function sendAnswer() {
  if (headerQuestion.innerHTML == questions[0]) {
    if (answerB.checked) {
      pointGuard += 1;
    }
    headerMark.innerHTML = headerTag[1];
    headerQuestion.innerHTML = questions[1];
    answer1.innerHTML = answers1[1];
    answer2.innerHTML = answers2[1];
    answer3.innerHTML = answers3[1];
    answer4.innerHTML = answers4[1];
  } else if (headerQuestion.innerHTML == questions[1]) {
    if (answerC.checked) {
      pointGuard += 1;
    }
    headerMark.innerHTML = headerTag[2];
    headerQuestion.innerHTML = questions[2];
    answer1.innerHTML = answers1[2];
    answer2.innerHTML = answers2[2];
    answer3.innerHTML = answers3[2];
    answer4.innerHTML = answers4[2];
  } else if (headerQuestion.innerHTML == questions[2]) {
    if (answerA.checked) {
      pointGuard += 1;
    }
    headerMark.innerHTML = headerTag[3];
    headerQuestion.innerHTML = questions[3];
    answer1.innerHTML = answers1[3];
    answer2.innerHTML = answers2[3];
    answer3.innerHTML = answers3[3];
    answer4.innerHTML = answers4[3];
  } else if (headerQuestion.innerHTML == questions[3]) {
    if (answerB.checked) {
      pointGuard += 1;
    }
    headerMark.innerHTML = headerTag[4];
    headerQuestion.innerHTML = questions[4];
    answer1.innerHTML = answers1[4];
    answer2.innerHTML = answers2[4];
    answer3.innerHTML = answers3[4];
    answer4.innerHTML = answers4[4];
  } else if (headerQuestion.innerHTML == questions[4]) {
    if (answerC.checked) {
      pointGuard += 1;
    }
    getTotalPoint();
  }
}

function getTotalPoint() {
  confirm(
    "Adınız : " +
      (txtName.value + " " + txtLastName.value) +
      " " +
      "Skorunuz : " +
      pointGuard +
      " / 5"
  );
  beginTesting.style.display = "flex";
  mainDiv.style.display = "none";
  txtName.value = "";
  txtLastName.value = "";
  txtAge.value = "";
  txtGender.value = "";
  pointGuard = 0;
}
