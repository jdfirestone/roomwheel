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

    // Remember to do something after the animation has finished specify callback function.
    callbackFinished: "logChore()",

    // During the animation need to call the drawTriangle()
    // to re-draw the pointer each time.
    callbackAfter: "drawTriangle()"
  }
});

function logChore() {
  var winningSegment = myWheel.getIndicatedSegment();
  var node = document.createElement("LI");
  var textnode = document.createTextNode(
    "Your chore is " + winningSegment.text
  );
  node.appendChild(textnode);
  document.getElementById("myList").appendChild(node);
}

var clicks = 0;
function mates() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
}

// Call draw triangle to initially draw the pointer.
drawTriangle();

function drawTriangle() {
  // Use the same canvas context as the wheel.
  var ctx = myWheel.ctx;

  ctx.strokeStyle = "black"; // Set line colour.
  ctx.fillStyle = "red"; // Set fill colour.
  ctx.lineWidth = 4;
  ctx.beginPath(); // Begin path.
  ctx.moveTo(170, 5); // Move to initial position.
  ctx.lineTo(230, 5); // Draw lines to make the shape.
  ctx.lineTo(200, 40);
  ctx.lineTo(171, 5);
  ctx.stroke(); // Complete the path by stroking (draw lines).
  ctx.fill();
}
