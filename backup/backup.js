// // Creating elements for the Video Cantainer;
// var VideoContainer = document.createElement("div");
// var video = document.createElement("video");
// var ctaCantainer = document.createElement("div");
// var h2 = document.createElement("h2");
// var ctaCardCantainer = document.createElement("div");
// var ctaCard = document.createElement("div");
// var ctaCardHead = document.createElement("div");
// var ctaCardBody = document.createElement("div");
// var ctaCardLogo = document.createElement("div");
// var ctaCardtext = document.createElement("div");
// var ctaCardButton = document.createElement("div");
// var ctaCardButtonImg = document.createElement("img");
// var ctaCardtexth2 = document.createElement("h2");
// var ctaCardtextspan = document.createElement("span");
// var ctaCardtextButton = document.createElement("button");

// creating elements for rows
var parentDiv = document.createElement("div");
var upComingparentDiv = document.createElement("div");
var row = document.createElement("div");
var secondRow = document.createElement("div");
var upRow = document.createElement("div");
var card = document.createElement("div");
var upComingCard = document.createElement("div");
var card2 = document.createElement("div");
var cardHead = document.createElement("div");
var upComingcardHead = document.createElement("div");
var cardHead2 = document.createElement("div");

var cardBody = document.createElement("div");
var cardBody2 = document.createElement("div");
var upComingCardBody = document.createElement("div");

var cardimg = document.createElement("img");
var cardimg2 = document.createElement("img");
var upComingCardimg2 = document.createElement("img");

var headingOverImage = document.createElement("h2");
var upComingheadingOverImage = document.createElement("h2");
var upComingTest = document.createElement("h2");
var icons = document.createElement("div");
var heading = document.createElement("h1");
var date = document.createElement("h3");
var subHeading = document.createElement("span");
var upCmgButtonSvg = document.createElement("button");
var icon1 = document.createElement("img");
var icon2 = document.createElement("img");
var icon3 = document.createElement("img");
var upCmgh2 = document.createElement("h2");
var upCmgButton = document.createElement("button");

// setting attributing to the elements
parentDiv.setAttribute("class", "parent_Div");
upComingparentDiv.setAttribute("class", "upCmgParent_Div");
row.setAttribute("class", "row");
secondRow.setAttribute("class", "secondRow");
card2.setAttribute("class", "card2");
card.setAttribute("class", "card");
cardBody.setAttribute("class", "cardBody");

upComingCard.setAttribute("class", "upComingCard");
icons.setAttribute("class", "icons_container");
cardimg.setAttribute("class", "card_img");
cardimg2.setAttribute("class", "card_img2");
upComingCardimg2.setAttribute("class", "upCmgCard_img2");
headingOverImage.setAttribute("class", "headingOverImg");
upComingheadingOverImage.setAttribute("class", "upComingHeadingOverImg");
icon1.setAttribute("id", "icon");
icon2.setAttribute("id", "icon");
icon3.setAttribute("id", "icon");
upCmgh2.setAttribute("class", "upCmgh2");
upCmgButton.setAttribute("class", "upCmgButton");
upCmgButtonSvg.setAttribute("class", "upCmgButtonSvg");
heading.setAttribute("class", "heading");
subHeading.setAttribute("class", "subHeading");
date.setAttribute("class", "date");
cardBody2.setAttribute("class", "cardBody2");

VideoContainer.setAttribute("class", "VideoContainer");
video.setAttribute("class", "videotag");
ctaCantainer.setAttribute("class", "ctaCantainer");
ctaCardCantainer.setAttribute("class", "ctaCardCantainer");
ctaCard.setAttribute("class", "ctaCard");
ctaCardHead.setAttribute("class", "ctaCardHead");
ctaCardBody.setAttribute("class", "ctaCardBody");
ctaCardtext.setAttribute("class", "ctaCardtext");
ctaCardLogo.setAttribute("class", "ctaCardLogo");
ctaCardButton.setAttribute("class", "ctaCardButton");
ctaCardButtonImg.setAttribute("class", "ctaCardButtonImg");
ctaCardtextspan.setAttribute("class", "ctaCardtextspan");
ctaCardtextButton.setAttribute("class", "ctaCardtextButton");

// Adding content to the elements

cardimg.src = "1.jpg";
cardimg2.src = "2.png";
icon1.src = "Vector.svg";
icon2.src = "Vector.svg";
icon3.src = "Vector.svg";
upComingCardimg2.src = "2.png";
headingOverImage.innerText = "Completed";
h2.innerText = "Call To Action";
upComingheadingOverImage.innerText = "Completed";
upCmgh2.innerText = "Coming Soon";
upCmgButton.innerText = "Coming Soon";
upCmgButtonSvg.innerHTML = icon1;
heading.innerHTML = "morning vibes";
subHeading.innerHTML = "morning vibes";
date.innerHTML = formatDate(new Date());
video.src =
  "https://degpeg-video-storage.s3.ap-south-1.amazonaws.com/session-videos/62b2cb65573170c8373171ab.mp4";
video.controls = true;
ctaCardButton.innerText = "Buy Now";
ctaCardButtonImg.src = "baccabucci.png";
ctaCardtexth2.innerText = "hello";
ctaCardtextspan.innerText = "The display has ";
ctaCardtextButton.innerText = "KRW 1";
// Appending Elelements

icon1.addEventListener("click", () => {
  console.log("yeah this is all about");
  video.src = "videoplayback.mp4";
});

parentDiv.appendChild(VideoContainer);
VideoContainer.appendChild(video);
VideoContainer.appendChild(ctaCantainer);
ctaCantainer.appendChild(h2);
ctaCantainer.appendChild(ctaCardCantainer);
ctaCardCantainer.appendChild(ctaCard);
ctaCard.appendChild(ctaCardHead);
ctaCardHead.appendChild(ctaCardLogo);
ctaCardLogo.appendChild(ctaCardButtonImg);
ctaCardHead.appendChild(ctaCardtext);
ctaCardtext.appendChild(ctaCardtexth2);
ctaCardtext.appendChild(ctaCardtextspan);
ctaCardtext.appendChild(ctaCardtextButton);
ctaCard.appendChild(ctaCardBody);
ctaCardBody.appendChild(ctaCardButton);

parentDiv.appendChild(row);
parentDiv.appendChild(secondRow);

row.appendChild(card);
secondRow.appendChild(upComingparentDiv);
secondRow.appendChild(upComingCard);
row.appendChild(card2);
card.appendChild(cardHead);
upComingCard.appendChild(upComingcardHead);
upComingCard.appendChild(upComingCardBody);
card2.appendChild(cardHead2);
card.appendChild(cardBody);
card2.appendChild(cardBody2);
cardHead.appendChild(cardimg);
cardHead2.appendChild(cardimg2);
upComingcardHead.appendChild(upComingCardimg2);
upComingparentDiv.appendChild(upComingTest);

cardHead.appendChild(headingOverImage);
upComingcardHead.appendChild(upComingheadingOverImage);
cardBody2.appendChild(icons);
cardBody2.appendChild(heading);
cardBody2.appendChild(subHeading);
cardBody2.appendChild(date);
icons.appendChild(icon1);
icons.appendChild(icon2);
icons.appendChild(icon3);
upComingCardBody.appendChild(upCmgh2);
upComingCardBody.appendChild(upCmgButton);
// upComingCardBody.appendChild(upCmgButtonSvg);

var root = document.getElementById("root");

root.appendChild(parentDiv);

// Function for adding date
function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}

function formatDate(date) {
  return (
    [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join("-") +
    " " +
    [
      padTo2Digits(date.getHours()),
      padTo2Digits(date.getMinutes()),
      padTo2Digits(date.getSeconds()),
    ].join(":")
  );
}
