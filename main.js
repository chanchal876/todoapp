let form = document.querySelector("form")
let input = document.querySelector("input")
let ul = document.querySelector("ul")



const savetodo = (e) =>{
    e.preventDefault();
    // console.log("form submitted")

    //create

    let li = document.createElement("li")
    li.className = "list-group-item rounded-0"
    ul.appendChild(li)
    li.innerText = input.value

    let dltbtn = document.createElement("button")
    dltbtn.className = "btn btn-sm btn-danger rounded-0 float-end"
    li.appendChild(dltbtn)
    dltbtn.innerText = "Delete"




    form.reset();
};

form.addEventListener('submit', savetodo)


const deletetodo = (e) =>{
      if(e.target.className.includes("btn-sm")){
        let li = e.target.parentElement;
        if(window.confirm("are you sure")){
          ul.removeChild(li);
        }
        // console.log(e.target.parentElement)
      }
};

ul.addEventListener('click', deletetodo)