const seedColor = document.querySelector(".seed-color")
const colorMode = document.querySelector("#color-scheme")
const btn = document.querySelector("#btn")
const color0 = document.querySelector(".color0")
const color1 = document.querySelector(".color1")
const color2 = document.querySelector(".color2")
const color3 = document.querySelector(".color3")
const color4 = document.querySelector(".color4")
const hex0 = document.querySelector(".hex0")
const hex1 = document.querySelector(".hex1")
const hex2 = document.querySelector(".hex2")
const hex3 = document.querySelector(".hex3")
const hex4 = document.querySelector(".hex4")
let newColor = seedColor.value.slice(1)
let newMode = colorMode.options[colorMode.selectedIndex].value


//------------ Copy Hex Function ------------------------------

color0.addEventListener("click", copyColor0)
color1.addEventListener("click", copyColor1)
color2.addEventListener("click", copyColor2)
color3.addEventListener("click", copyColor3)
color4.addEventListener("click", copyColor4)

function copyColor0(){

        let text = hex0.innerText
        let input = document.createElement("input")
        input.setAttribute("value", text)

        document.body.appendChild(input)
        input.select()

        document.execCommand("copy")
        document.body.removeChild(input)

        alert("copied: " + text)

}


function copyColor1(){

    let text = hex1.innerText
    let input = document.createElement("input")
    input.setAttribute("value", text)

    document.body.appendChild(input)
    input.select()

    document.execCommand("copy")
    document.body.removeChild(input)

    alert("copied: " + text)

}


function copyColor2(){

    let text = hex2.innerText
    let input = document.createElement("input")
    input.setAttribute("value", text)

    document.body.appendChild(input)
    input.select()

    document.execCommand("copy")
    document.body.removeChild(input)

    alert("copied: " + text)

}


function copyColor3(){

    let text = hex3.innerText
    let input = document.createElement("input")
    input.setAttribute("value", text)

    document.body.appendChild(input)
    input.select()

    document.execCommand("copy")
    document.body.removeChild(input)

    alert("copied: " + text)

}

function copyColor4(){

    let text = hex4.innerText
    let input = document.createElement("input")
    input.setAttribute("value", text)

    document.body.appendChild(input)
    input.select()

    document.execCommand("copy")
    document.body.removeChild(input)

    alert("copied: " + text)

}

//------------ Mode & Color Input Event listeners ------------------------------


seedColor.addEventListener("input", function(){

    newColor = seedColor.value.slice(1)
    return newColor

})

colorMode.addEventListener('change', function(){
    newMode = colorMode.options[colorMode.selectedIndex].value
    return newMode;
})


btn.addEventListener("click", function(){
    setColorScheme()

})


//------------ Fetch API ------------------------------


function setColorScheme(){

    fetch(`https://www.thecolorapi.com/scheme?hex=${newColor}&mode=${newMode}`)
    .then (resp => resp.json())
    .then (data => {console.log(data)

        for(let i = 0; i < data.colors.length; i++){
            document.querySelector(`.color${i}`).style.backgroundColor = data.colors[i].hex.value
            document.querySelector(`.hex${i}`).textContent = data.colors[i].hex.value
            
        }
    })


}

setColorScheme()

