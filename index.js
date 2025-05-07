const colorSchemeContainer = document.getElementById("color-scheme-container")

document.getElementById("color-scheme-form").addEventListener("submit", (e) => {
  e.preventDefault()
  
  const seedColor = document.getElementById("seed-color").value.slice(1)
  const colorMode = document.getElementById("choose-color-mode").value
  console.log(seedColor)
  fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${colorMode}&count=5`)
    .then((response) => response.json())
    .then(data => generateColorScheme(data))
   
})

function generateColorScheme(data) {
  colorSchemeContainer.innerHTML = ""

  data.colors.forEach(color => {
    const colorColumn = document.createElement("div")
    colorColumn.classList.add("color-column")


    const colorDiv = document.createElement("div")
    colorDiv.classList.add("color")
    colorDiv.style.backgroundColor = color.hex.value
    colorColumn.appendChild(colorDiv)

    const colorHex = document.createElement("div")
    colorHex.classList.add("color-hex")
    colorHex.innerText = color.hex.value
    colorColumn.appendChild(colorHex)

    colorSchemeContainer.appendChild(colorColumn)


  })
}
