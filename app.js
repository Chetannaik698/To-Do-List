let btn = document.querySelector("button")
let ul = document.querySelector("ul")
let inp = document.querySelector("input")
let delIcon = document.querySelector(".del");

btn.addEventListener('click', function(){
    console.dir(inp.value);
    let newList = document.createElement("li");
    newList.classList.add("li")
    newList.innerHTML =   ` ${inp.value} <i class="fa-solid fa-trash del">`
    ul.appendChild(newList)
});

ul.addEventListener('click', function(el){
    console.dir(el.target.nodeName)
       
    if(el.target.nodeName === "I"){
        let item = el.target.parentElement;
        item.remove();
    }
})

// delIcon.addEventListener('click', function() {
//      let parent = delIcon.parentElement
//      parent.remove(); 
// })