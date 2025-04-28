let usernameRef = document.getElementById("username");
let passwordRef = document.getElementById("password");
let eyeL = document.querySelector(".eyeball-l");
let eyeR = document.querySelector(".eyeball-r");
let handL = document.querySelector(".hand-l");
let handR = document.querySelector(".hand-r");
let tail = document.querySelector(".tail");

function moveEyes(event) {
  const catFace = document.querySelector(".cat-face");
  const rect = catFace.getBoundingClientRect();

  // Center of the cat's face
  const catCenterX = rect.left + rect.width / 2;
  const catCenterY = rect.top + rect.height / 2;

  // Cursor position
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  // Calculate angle between cursor and cat's center
  const deltaX = mouseX - catCenterX;
  const deltaY = mouseY - catCenterY;
  const angle = Math.atan2(deltaY, deltaX);

  // Maximum distance the eyeballs can move
  const maxDistance = 10; 
  // Update eyeball positions
  eyeL.style.transform = `translate(${Math.cos(angle) * maxDistance}px, ${Math.sin(angle) * maxDistance}px)`;
  eyeR.style.transform = `translate(${Math.cos(angle) * maxDistance}px, ${Math.sin(angle) * maxDistance}px)`;
}

// Add mousemove event listener
document.addEventListener("mousemove", moveEyes);


let normalEyeStyle = () => {
  eyeL.style.cssText = `
    left:0.6em;
    top: 0.6em;
  `;
  eyeR.style.cssText = `
  right:0.6em;
  top:0.6em;
  `;
};
let HideEyesHands =() =>{
 handL.style.cssText = `
        height: 6.56em;
        top: 3.87em;
        left: 11.75em;
        transform: rotate(-155deg);    
    `;
  handR.style.cssText = `
    height: 6.56em;
    top: 3.87em;
    right: 11.75em;
    transform: rotate(155deg);
  `;
};


let viewPassHands =() =>{
 handR.style.cssText = `
        height: 2.81em;
        top: 8.4em;
        right: 7.5em;
        transform: rotate(0deg)
    `;
     handL.style.cssText = `
        height: 6.56em;
        top: 3.87em;
        left: 11.75em;
        transform: rotate(-155deg);    
    `;
};

let normalHandStyle = () => {
  handL.style.cssText = `
        height: 2.81em;
        top:8.4em;
        left:7.5em;
        transform: rotate(0deg);
    `;
  handR.style.cssText = `
        height: 2.81em;
        top: 8.4em;
        right: 7.5em;
        transform: rotate(0deg)
    `;
};

//When clicked on username input
usernameRef.addEventListener("focus", () => {
  eyeL.style.cssText = `
    left: 0.75em;
    top: 1.12em;  
  `;
  eyeR.style.cssText = `
    right: 0.75em;
    top: 1.12em;
  `;
  tail.style.cssText = `
    right: 0.75em;
    top: 1.12em;
    setTimeout(function() { transform: rotate(30);}, 10);
  `;

  normalHandStyle();
});
function shwPwd() {
     const cb = document.querySelector('#ShwPwd');
console.log(cb.checked)
    var x= document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
    viewPassHands();
  } else {
    x.type = "password";
     HideEyesHands();
   }
  }

//When clicked on password input
passwordRef.addEventListener("focus", () => {
  HideEyesHands();
});

//When clicked outside username and password input
document.addEventListener("click", (e) => {
  let clickedElem = e.target;
  if (clickedElem != usernameRef && clickedElem != passwordRef && clickedElem != document.querySelector('#ShwPwd')) {
  normalEyeStyle();
  normalHandStyle();
}

});