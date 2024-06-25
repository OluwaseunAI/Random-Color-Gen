

const container = document.querySelector('.color-container');

for (let i = 0; i < 50; i++){
  let newColorContainer = document.createElement("div");
  newColorContainer.classList.add("color-cls");
  container.appendChild(newColorContainer);
}


function randomColorGen(){
  const chars = "0123456789abcdef";
  let colCode = "";
  for (let i = 0; i < 6; i++){
    const randNum = Math.floor(Math.random() * chars.length)

    colCode += chars.substring(randNum, randNum + 1);

    console.log(colCode, randNum)
  }
  console.log(colCode);
  return colCode;
}

randomColorGen()

const allColors = document.querySelectorAll('.color-cls')

console.log(allColors)

randomColorCodes()

function randomColorCodes() {
  allColors.forEach((newColorContainer) => {
    newColorCode = randomColorGen()

  let hexCode = "#" + newColorCode;

    newColorContainer.innerHTML = hexCode;

   newColorContainer.style.backgroundColor = hexCode
  const bod = document.querySelector('.bod');

bod.style.backgroundColor = hexCode

  })


}

