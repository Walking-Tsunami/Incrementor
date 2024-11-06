let counter = 0;
let story = "Once upon a time";
let minus50btn = document.getElementById("minus50");
let displayEl = document.getElementById("display");
let minus10btn = document.getElementById("minus10");
let minus1btn = document.getElementById("minus1");
let plus1btn = document.getElementById("plus1");
let plus10btn = document.getElementById("plus10");
let plus50btn = document.getElementById("plus50");
let stringInEl = document.getElementById("strIn");
let storyEl = document.getElementById("strOut");
let roundBtn1 = document.getElementById("rand1");
let roundBtn2 = document.getElementById("rand2");
let roundBtn3 = document.getElementById("rand3");
let roundBtn4 = document.getElementById("rand4");
let randIn1 = document.getElementById("rand-in1");
let randIn2 = document.getElementById("rand-in2");

var picBtn = document.getElementById("pic-Btn");
var picContainer = document.getElementById("pic-container");

minus50btn.addEventListener("click", minus50fcn);
minus10btn.addEventListener("click", minus10fcn);
minus1btn.addEventListener("click", minus1fcn);
plus1btn.addEventListener("click", plus1fcn);
plus10btn.addEventListener("click", plus10fcn);
plus50btn.addEventListener("click", plus50fcn);
stringInEl.addEventListener("change", updateStory);

// 2. Incrementing. The ++, --, +=, and -= operators are used to update variables without losing what was there before

// event function

function minus50fcn() {
  // update the value of the counter

  counter -= 50;

  displayEl.innerHTML = counter;
}

function minus10fcn() {
  counter -= 10;

  displayEl.innerHTML = counter;
}
function minus1fcn() {
  counter--;

  displayEl.innerHTML = counter;
}
function plus1fcn() {
  counter += 1;

  displayEl.innerHTML = counter;
}
function plus10fcn() {
  counter += 10;

  displayEl.innerHTML = counter;
}
function plus50fcn() {
  counter += 50;

  displayEl.innerHTML = counter;
}

// 3. The += operator also works to update strings. Also, the "change" event can remove the need for buttons!

function updateStory() {
  // Save the users work to a variable
  let word = stringInEl.value;

  // Update the story variable
  story += word + " ";

  //Update the story variable

  stringInEl.value = "";
  // UPdate the site to show story
  storyEl.innerHTML = story;
}
// 4. Math.random() is used to bring RNG (random number generator) to your applications.

roundBtn1.addEventListener("click", round1);
roundBtn2.addEventListener("click", round2);
roundBtn3.addEventListener("click", round3);

function round3() {
  let rand = Math.random() * (5 - -5) + -5;
  rand = Math.round(rand);

  document.getElementById("rand3-out").innerHTML = rand;
}

function round1() {
  // create random dec 0 - 1
  let rand = Math.random();

  // round to 3 dec places
  rand = rand.toFixed(3);

  // update site
  document.getElementById("rand1-out").innerHTML = rand;
}

function round2() {
  let rand = Math.random() * 100;
  rand = Math.round(rand);
  document.getElementById("rand2-out").innerHTML = rand;
}

// Random number from x to y:
// Math.random() * (y - x) + x

// E.g. If i want a rnom # from 1 to 3
// var rand = Math.random() * (3 - 1) + 1
// rand = Math.round(rand)

picBtn.addEventListener("click", addCandy);

function addCandy() {
  // every click is another candy to the container

  picContainer.innerHTML +=
    "<img width = '100px' src='images/coffe-crisp.png'>";
}

// Check your understanding
// 1. Complete the rest of the incrementing buttons.

// 2. Complete the random __ to __ button.

document.getElementById("rand4").addEventListener("click", Random1);

function Random1() {
  let num1 = +document.getElementById("rand-in1").value; // "2"
  let num2 = +document.getElementById("rand-in2").value; // "5"

  let rand = Math.random() * (num2 - num1) + num1; // 3 + "2"
  rand = Math.round(rand);
  document.getElementById("rand4-out").innerHTML = rand;
}

document.getElementById("random-rgb").addEventListener("click", randomColour);

// 3. Complete the Random Size button. This button should change the font size of all text in the body to a value between 0 and 75

// 4. Complete the Random Color button. This should change the html background to a random rgb color.  Hint:  `rgb(34, 245, 128)` is a value
function randomColour() {
  let r = Math.random() * 255;
  let b = Math.random() * 255;
  let g = Math.random() * 255;

  r = Math.round(r);
  g = Math.round(g);
  b = Math.round(b);

  let rgbString = "rgb(" + r + " " + g + " " + b + ")";
  document.getElementById("HTML").style.background = rgbString;
  console.log(rgbString);
}

document.getElementById("random-size").addEventListener("click", randoSize);

function randoSize() {
  let rand = Math.random() * 75;
  rand = Math.round(rand);

  document.body.style.fontSize = rand + "px";
}

document.getElementById("reset").addEventListener("click", resetPage);

function resetPage() {
  // Incrementor
  counter = 0;
  document.getElementById("display").innerHTML = counter;
  // Story
  story = "Once upon a time,";
  document.getElementById("strOut").innerHTML = story;
  // Random Number
  roundBtn1 = "----------";
  document.getElementById("rand1-out").innerHTML = roundBtn1;

  roundBtn2 = "----------";
  document.getElementById("rand2-out").innerHTML = roundBtn2;

  roundBtn3 = "----------";
  document.getElementById("rand3-out").innerHTML = roundBtn3;

  roundBtn4 = "----------";
  document.getElementById("rand4-out").innerHTML = roundBtn4;
  // Input

  document.getElementById("rand-in1").value = "";

  document.getElementById("rand-in2").value = "";
  // Picture
  document.getElementById("pic-container").innerHTML = "";

  // Colour
  let colour = (document.getElementById("HTML").style.background = "#9ae4c8");
  document.getElementById("random-rgb").innerHTML = "RANDOM COLOR";
  // Size
  document.body.style.fontSize = 16 + "px";
}

document.getElementById("pic-Btn2").addEventListener("click", addToy);

function addToy() {
  picContainer.innerHTML +=
    "<img width = '100px' src='images/Pnada TOy png.png'>";
}

// rgb color, where the numbers each range from 0 to 255. You will need three random numbers, then you will need to create a string using those numbers.

// i.e.  var rgbString = `rgb(34, 245, 128)`;
//       document.getElementById('HTML').style.background = rgbString

// Your job is to make the values random in the above code snippet.

// 5. Code the reset button. This will reset all variables back to initial values and clear out all input fields and reset span boxes back to dashes. It's like refresing the page without actually refreshing the page.

// 6. create a button that when presed, add an image of your favorite toy to the website.
// ech click adds another toy
