let __body = document.getElementById("body");
let __form = document.getElementById("form");
let __label = document.getElementById("label");
let __input = document.getElementById("input");
let __button = document.getElementById("button");
let __rezultOl = document.getElementById("rezultOl");
let __theme = document.querySelector("#theme");

__form.addEventListener('submit', (e) => {
    e.preventDefault();
    let inputValue = __input.value;
    console.log(inputValue);

    let rezultLi = document.createElement("li");

    let rezultP = document.createElement("p");
    rezultLi.className = "rezult__li"
    rezultP.textContent = inputValue;


    let rezultN = document.createElement("span");
    let rezultX = document.createElement("span");
    rezultN.textContent = "↺"
    rezultX.textContent = "X"

    rezultLi.append(rezultP);
    rezultLi.append(rezultN);
    rezultLi.append(rezultX);
    __rezultOl.append(rezultLi);




    rezultP.addEventListener('click', () => {
        rezultP.style.color = "green"
    });
    
    rezultN.addEventListener('click', () => {
        rezultP.style.color = "red"
    })
    
    rezultX.addEventListener('click', () => {
        rezultLi.remove();
    });

    __input.value = null;
})

__theme.addEventListener('click', () => {
    let body = document.querySelector("body");
    let input = __input;
    let button = __button;
    input.classList.toggle("body");
    button.classList.toggle("body");
    body.classList.toggle("body");
});

