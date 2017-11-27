
//winwheel required segment and animaiton settings
var myWheel = new Winwheel({
  numSegments: 8,
  outerRadius: 200,
  segments: [
    { fillStyle: "#eae56f", text: "Dishes" },
    { fillStyle: "#89f26e", text: "Floors" },
    { fillStyle: "#7de6ef", text: "Mail" },
    { fillStyle: "#e7706f", text: "Garbage" },
    { fillStyle: "#eae56f", text: "Windows" },
    { fillStyle: "#89f26e", text: "Tables" },
    { fillStyle: "#7de6ef", text: "Living Room" },
    { fillStyle: "#e7706f", text: "Porch" }
  ],
  animation: {
    type: "spinToStop",
    duration: 5,
    spins: 8,
    callbackFinished: "logChore()",
    callbackAfter: "drawTriangle()"
  }
});

//chore log function

function logChore() {
  var winningSegment = myWheel.getIndicatedSegment();
  var node = document.createElement("LI");
  var textnode = document.createTextNode(
    "Your chore is " + winningSegment.text
  );
  node.appendChild(textnode);
  document.getElementById("myList").appendChild(node);
}

//counting function I will be using later
var clicks = 0;
function mates() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
}

//triangle function

drawTriangle();

function drawTriangle() {
  var ctx = myWheel.ctx;

  ctx.strokeStyle = "black";
  ctx.fillStyle = "red";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(170, 5);
  ctx.lineTo(230, 5);
  ctx.lineTo(200, 40);
  ctx.lineTo(171, 5);
  ctx.stroke();
  ctx.fill();
}
