let handPose;
let video;
let hands = [];
let painting;


function preload() {
    handPose = ml5.handPose();
  }

  function mousePressed()
  {
    console.log (hands);
  }


  function setup() {
    createCanvas(640, 480);
    painting = createGraphics (640, 480);
    painting.clear();
    video = createCapture(VIDEO);
    video.size(640, 480);
    video.hide();
    handPose.detectStart(video, gotHands);
}


 

function gotHands(results) { 
    hands = results;
  }
  

  function draw() {
    image(video, 0, 0, width, height);

  
    for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    for (let j = 0; j < hand.keypoints.length; j++) {
        //let keypoint = hand.keypoints[j];
        fill(255,255,255);
        noStroke();
        //circle(keypoint.x, keypoint.y, 10);
        let index = hand.keypoints[8];
        painting.fill(255,0,0);
        painting.noStroke();
        painting.circle(index.x, index.y, 30 , 30 );
        
    }
  }

  image (painting, 0,0);
}