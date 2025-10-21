
let fruits = ["Apple", "Banana", "Mango"];

fruits.push("Orange");       
fruits.unshift("Grapes");    
fruits.pop();                
let findFruit = fruits.find(f => f === "Banana"); 

let outputDiv = document.getElementById("output");

if (outputDiv) { 
    fruits.forEach(item => {
        let div = document.createElement("div");
        div.className = "box";
        div.innerText = item;
        outputDiv.appendChild(div);
    });

    let found = document.createElement("p");
    found.innerText = "Found Fruit: " + findFruit;
    outputDiv.appendChild(found);
}

