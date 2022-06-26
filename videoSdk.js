async function getAllSession() {
  let url =
    "https://prod.api.degpeg.com/content-providers/624ac8f1d8eda0c8be17b215/live-sessions/";
  try {
    let res = await fetch(url);

    return await res.json();
  } catch (error) {
    console.log(error);
  }
  console.log(res, "data");
}

var videowraper = document.createElement("div");
videowraper.setAttribute("class", "video-wraper");
videowraper.style = "disPlay:flex";

function videpSdk(web_video_url) {
  var parentDiv = document.createElement("div");

  //     Video Container

  var VideoContainer = document.createElement("div");
  var video = document.createElement("video");
  var ctaCantainer = document.createElement("div");
  var h2 = document.createElement("h2");
  var ctaCardCantainer = document.createElement("div");
  var ctaCard = document.createElement("div");
  var ctaCardHead = document.createElement("div");
  var ctaCardBody = document.createElement("div");
  var ctaCardLogo = document.createElement("div");
  var ctaCardtext = document.createElement("div");
  var ctaCardButton = document.createElement("div");
  var ctaCardButtonImg = document.createElement("img");
  var ctaCardtexth2 = document.createElement("h2");
  var ctaCardtextspan = document.createElement("span");
  var ctaCardtextButton = document.createElement("button");

  // Creating elements for the Rows

  var upComingparentDiv = document.createElement("div");
  var secondRow = document.createElement("div");
  var row = document.createElement("div");
  var card = document.createElement("div");
  var upComingCard = document.createElement("div");
  var cardHead = document.createElement("div");
  var upComingcardHead = document.createElement("div");
  var cardBody = document.createElement("div");
  var upComingCardBody = document.createElement("div");
  var cardVid = document.createElement("video");
  var headingOverImage = document.createElement("h2");
  var upComingheadingOverImage = document.createElement("h2");
  var upComingTest = document.createElement("h2");

  var card2 = document.createElement("div");
  var cardHead2 = document.createElement("div");
  var cardBody2 = document.createElement("div");
  var cardimg2 = document.createElement("video");
  var upComingCardimg2 = document.createElement("img");
  var icons = document.createElement("div");
  var heading = document.createElement("h1");
  var date = document.createElement("h3");
  var subHeading = document.createElement("span");
  var icon1 = document.createElement("img");
  var icon2 = document.createElement("img");
  var icon3 = document.createElement("img");
  var upCmgButtonSvg = document.createElement("button");
  var upCmgh2 = document.createElement("h2");
  var upCmgButton = document.createElement("button");

  //   ADDING ATTRIBUTES TO THE ELEMENT

  parentDiv.setAttribute("class", "parent_Div");

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

  row.setAttribute("class", "row");
  card.setAttribute("class", "card");
  card2.setAttribute("class", "card2");

  cardBody.setAttribute("class", "cardBody");
  icons.setAttribute("class", "icon_container");
  cardVid.setAttribute("class", "card_img");
  cardimg2.setAttribute("class", "card_img2");
  headingOverImage.setAttribute("class", "headingOverImg");
  icon1.setAttribute("id", "icon");
  icon2.setAttribute("id", "icon");
  icon3.setAttribute("id", "icon");
  heading.setAttribute("class", "heading");
  subHeading.setAttribute("class", "subHeading");
  date.setAttribute("class", "date");

  upComingparentDiv.setAttribute("class", "upCmgParent_Div");
  secondRow.setAttribute("class", "secondRow");
  upComingCard.setAttribute("class", "upComingCard");
  upComingCardimg2.setAttribute("class", "upCmgCard_img2");
  upComingheadingOverImage.setAttribute("class", "upComingHeadingOverImg");
  upCmgh2.setAttribute("class", "upCmgh2");
  upCmgButton.setAttribute("class", "upCmgButton");
  upCmgButtonSvg.setAttribute("class", "upCmgButtonSvg");
  // Adding Content to the element

  cardVid.src = web_video_url;
  cardimg2.src = web_video_url;
  cardimg2.autoplay = true;
  cardimg2.controls = true;

  cardVid.autoplay = true;
  cardVid.controls = true;

  icon1.src = "Vector.svg";
  icon2.src = "Vector.svg";
  icon3.src = "Vector.svg";
  headingOverImage.innerText = "Completed";
  heading.innerHTML = "morning vibes";
  subHeading.innerHTML = "morning vibes";
  upComingCardimg2.src = "2.png";
  headingOverImage.innerText = "Completed";

  upComingheadingOverImage.innerText = "Completed";
  upCmgh2.innerText = "Coming Soon";
  upCmgButton.innerText = "Coming Soon";
  upCmgButtonSvg.innerHTML = icon1;

  video.src =
    "https://degpeg-video-storage.s3.ap-south-1.amazonaws.com/session-videos/62b2cb65573170c8373171ab.mp4";
  video.controls = true;
  ctaCardButton.innerText = "Buy Now";
  ctaCardButtonImg.src = "baccabucci.png";
  ctaCardtexth2.innerText = "hello";
  ctaCardtextspan.innerText = "The display has ";
  ctaCardtextButton.innerText = "KRW 1";

  // Appending child componenet in dom

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
  row.appendChild(card);
  row.appendChild(card2);
  card.appendChild(cardHead);
  card2.appendChild(cardHead2);
  card.appendChild(cardBody);
  card2.appendChild(cardBody2);
  cardHead.appendChild(cardVid);
  cardHead.appendChild(headingOverImage);
  cardHead2.appendChild(cardimg2);
  cardBody2.appendChild(icons);
  cardBody2.appendChild(heading);
  cardBody2.appendChild(subHeading);
  icons.appendChild(icon1);
  icons.appendChild(icon2);
  icons.appendChild(icon3);

  // 2nd Row allignement
  parentDiv.appendChild(secondRow);
  secondRow.appendChild(upComingparentDiv);
  secondRow.appendChild(upComingCard);
  upComingCard.appendChild(upComingcardHead);
  upComingCard.appendChild(upComingCardBody);
  upComingcardHead.appendChild(upComingCardimg2);
  upComingparentDiv.appendChild(upComingTest);
  upComingcardHead.appendChild(upComingheadingOverImage);
  upComingCardBody.appendChild(upCmgh2);
  upComingCardBody.appendChild(upCmgButton);

  videowraper.appendChild(parentDiv);

  var root = document.getElementById("root");
  root.appendChild(videowraper);
}

async function rendervidepSdk() {
  let session = await getAllSession();

  let sessionFilter = session.reverse();

  if (sessionFilter) {
    sessionFilter.forEach((data) => {
      console.log(data.name, "okk");
      videpSdk(
        (duration = data.duration),
        (web_video_url = data.web_video_url),
        (date_tim = data.date_tim),
        (mystatus = data.status),
        (myname = data.name),
        (duration = data.duration),
        (url = data.duration),
        (banner_url = data.banner_url),
        (web_banner_url = data.banner_url)
      );
    });
  }

  var videoDiv = document.createElement("div");
  videoDiv.setAttribute("class", "videoDiv");
  videoDiv.appendChild(videowraper);

  var root = document.getElementById("root");
  root.appendChild(videoDiv);
}

rendervidepSdk();

console.log();
console.log("day");
