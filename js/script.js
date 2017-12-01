

//winwheel required segment and animaiton settings
var myWheel = new Winwheel({
  numSegments: 4,
  outerRadius: 200,
  segments: [
    { fillStyle: "aqua", text: "Dishes" },
    { fillStyle: "lime", text: "Floors" },
    { fillStyle: "crimson", text: "Mail" },
    { fillStyle: "yellow", text: "Garbage" }
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




//Add/Delete Segments
document.getElementById("dishes").onclick =
function dishes()
        {
            myWheel.addSegment({'text' : "Dishes", 'fillStyle' : 'aqua'}, 1);
            myWheel.draw();
        }

document.getElementById("floors").onclick =
function floors()
        {
            myWheel.addSegment({'text' : "Floors", 'fillStyle' : 'lime'}, 1);
            myWheel.draw();
        }

document.getElementById("mail").onclick =
 function mail()
        {
            myWheel.addSegment({'text' :  'Mail', 'fillStyle' : 'aqua'}, 1);
            myWheel.draw();
        }

document.getElementById("windows").onclick =
  function windows()
        {
            myWheel.addSegment({'text' :  'Windows', 'fillStyle' : 'crimson'}, 1);
            myWheel.draw();
        }


document.getElementById("bathroom").onclick =
    function bathroom()
        {
            myWheel.addSegment({'text' :  'Bathroom', 'fillStyle' : 'yellow'}, 1);
            myWheel.draw();
        }


document.getElementById("kitchen").onclick =
    function kitchen()
        {
            myWheel.addSegment({'text' :  'Kitchen', 'fillStyle' : 'teal'}, 1);
            myWheel.draw();
        }

document.getElementById("porch").onclick =
    function porch()
        {
            myWheel.addSegment({'text' :  'Porch', 'fillStyle' : 'red'}, 1);
            myWheel.draw();
        }

document.getElementById("garbage").onclick =
    function garbage()
        {
            myWheel.addSegment({'text' :  'Garbage', 'fillStyle' : 'purple'}, 1);
            myWheel.draw();
        }

document.getElementById("delete").onclick =
function deletelast()
        {
            myWheel.deleteSegment(1);
            myWheel.draw();
        }



//start buttons

document.getElementById("start").onclick =
 function start(){
  myWheel.startAnimation();
  this.disabled=false;
  mates();
}


//reset button
document.getElementById("reset").onclick = function resetfunction()
{
myWheel.stopAnimation(false)
myWheel.rotationAngle=0;
myWheel.draw();
drawTriangle();
this.disabled=false;
}
