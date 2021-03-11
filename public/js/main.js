let api = fetch("https://node-covid-d847d-default-rtdb.firebaseio.com/covid.json")
  .then((res) => res.json())
  .then((data) => {
    // For first Card
    let firstImg = document.getElementById("first-img");
    let countryFirst = document.getElementById("country-first");
    let noFirst = document.getElementById("no-first");
    let firstCase = document.getElementById("first-case");
    let firstDeath = document.getElementById("first-death");
    firstImg.src = data[0].flag;
    countryFirst.innerText = data[0].country;
    noFirst.innerText = `No.${data[0].id}`;
    firstCase.innerText = `Total Cases: ${data[0].totalCases}`;
    firstDeath.innerText = `Total Deaths: ${data[0].death}`;

    // For Second Card
    let secImg = document.getElementById("sec-img");
    let countrySec = document.getElementById("country-sec");
    let noSec = document.getElementById("no-sec");
    let secCase = document.getElementById("sec-case");
    let secDeath = document.getElementById("sec-death");
    secImg.src = data[1].flag;
    countrySec.innerText = data[1].country;
    noSec.innerText = `No.${data[1].id}`;
    secCase.innerText = `Total Cases: ${data[1].totalCases}`;
    secDeath.innerText = `Total Deaths: ${data[1].death}`;

    // For Third Card
    let thirdImg = document.getElementById("third-img");
    let countryThird = document.getElementById("country-third");
    let thirdSec = document.getElementById("no-third");
    let thirdCase = document.getElementById("third-case");
    let thirdDeath = document.getElementById("third-death");
    thirdImg.src = data[2].flag;
    countryThird.innerText = data[2].country;
    thirdSec.innerText = `No.${data[2].id}`;
    thirdCase.innerText = `Total Cases: ${data[2].totalCases}`;
    thirdDeath.innerText = `Total Deaths: ${data[2].death}`;

    // For Fourth Card
    let fourImg = document.getElementById("four-img");
    let countryFour = document.getElementById("country-four");
    let fourSec = document.getElementById("no-four");
    let fourCase = document.getElementById("four-case");
    let fourDeath = document.getElementById("four-death");
    fourImg.src = data[3].flag;
    countryFour.innerText = data[3].country;
    fourSec.innerText = `No.${data[3].id}`;
    fourCase.innerText = `Total Cases: ${data[3].totalCases}`;
    fourDeath.innerText = `Total Deaths: ${data[3].death}`;

    // For Fifth Card
    let fifthImg = document.getElementById("fifth-img");
    let countryfifth = document.getElementById("country-fifth");
    let fifthSec = document.getElementById("no-fifth");
    let fifthCase = document.getElementById("fifth-case");
    let fifthDeath = document.getElementById("fifth-death");
    fifthImg.src = data[4].flag;
    countryfifth.innerText = data[4].country;
    fifthSec.innerText = `No.${data[4].id}`;
    fifthCase.innerText = `Total Cases: ${data[4].totalCases}`;
    fifthDeath.innerText = `Total Deaths: ${data[4].death}`;

    // For Sixth Card
    let sixImg = document.getElementById("six-img");
    let countrysix = document.getElementById("country-six");
    let sixSec = document.getElementById("no-six");
    let sixCase = document.getElementById("six-case");
    let sixDeath = document.getElementById("six-death");
    sixImg.src = data[5].flag;
    countrysix.innerText = data[5].country;
    sixSec.innerText = `No.${data[5].id}`;
    sixCase.innerText = `Total Cases: ${data[5].totalCases}`;
    sixDeath.innerText = `Total Deaths: ${data[5].death}`;

    // For Seventh Card
    let sevenImg = document.getElementById("seven-img");
    let countryseven = document.getElementById("country-seven");
    let sevenSec = document.getElementById("no-seven");
    let sevenCase = document.getElementById("seven-case");
    let sevenDeath = document.getElementById("seven-death");
    sevenImg.src = data[6].flag;
    countryseven.innerText = data[6].country;
    sevenSec.innerText = `No.${data[6].id}`;
    sevenCase.innerText = `Total Cases: ${data[6].totalCases}`;
    sevenDeath.innerText = `Total Deaths: ${data[6].death}`;

    // For Eighth Card
    let eightImg = document.getElementById("eight-img");
    let countryeight = document.getElementById("country-eight");
    let eightSec = document.getElementById("no-eight");
    let eightCase = document.getElementById("eight-case");
    let eightDeath = document.getElementById("eight-death");
    eightImg.src = data[7].flag;
    countryeight.innerText = data[7].country;
    eightSec.innerText = `No.${data[7].id}`;
    eightCase.innerText = `Total Cases: ${data[7].totalCases}`;
    eightDeath.innerText = `Total Deaths: ${data[7].death}`;

    // For Ninth Card
    let nineImg = document.getElementById("nine-img");
    let countrynine = document.getElementById("country-nine");
    let nineSec = document.getElementById("no-nine");
    let nineCase = document.getElementById("nine-case");
    let nineDeath = document.getElementById("nine-death");
    nineImg.src = data[8].flag;
    countrynine.innerText = data[8].country;
    nineSec.innerText = `No.${data[8].id}`;
    nineCase.innerText = `Total Cases: ${data[8].totalCases}`;
    nineDeath.innerText = `Total Deaths: ${data[8].death}`;

    // For Tenth Card
    let tenImg = document.getElementById("ten-img");
    let countryten = document.getElementById("country-ten");
    let tenSec = document.getElementById("no-ten");
    let tenCase = document.getElementById("ten-case");
    let tenDeath = document.getElementById("ten-death");
    tenImg.src = data[9].flag;
    countryten.innerText = data[9].country;
    tenSec.innerText = `No.${data[9].id}`;
    tenCase.innerText = `Total Cases: ${data[9].totalCases}`;
    tenDeath.innerText = `Total Deaths: ${data[9].death}`;
  });




//   About us

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });