function addPlace() {
    let ul = document.getElementById("list");
    let li = document.createElement("li");
    li.innerText = "New tourist place added!";
    ul.appendChild(li);
}
