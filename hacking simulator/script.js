function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function showTexts() {
  const paragraphs = document.querySelectorAll(".txt p");

  // hide all initially
  paragraphs.forEach(p => p.style.display = "none");

  // go through each <p> once
  for (let p of paragraphs) {
    p.style.display = "block";   // show current
    await delay(7000);           // wait 7s
    p.style.display = "none";    // hide current
  }

  // after all texts are shown, display final message
  const hackedMsg = document.createElement("p");
  hackedMsg.textContent = "YOU HAVE BEEN HACKED!";
  hackedMsg.style.color = "red";
  hackedMsg.style.fontSize = "32px";
  hackedMsg.style.fontWeight = "bold";
  hackedMsg.style.textAlign = "center";

  document.querySelector(".txt").appendChild(hackedMsg);
}

showTexts();