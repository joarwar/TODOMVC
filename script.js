let enterbutton = document.querySelector("#enterbutton");
let form = document.querySelector("form");
let input = document.querySelector("#input");

form.onsubmit = event =>{
    event.preventDefault();
}

enterbutton.onclick = event =>{
    let i = 0;
    const thisTitle = document.createElement("li");
    thisTitle.setAttribute("id", "todolist");
    thisTitle.innerHTML = "<input type='checkbox'>" + input.value + "<button id='destroy'>❌</button>";
    document.querySelector("#todo").appendChild(thisTitle)

    let destroy = document.querySelector("#destroy")
    destroy.onclick = event =>{
        document.querySelector("#todo").innerHTML = "";
    }
}


