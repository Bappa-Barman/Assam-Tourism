function addPlace() {
    let place = prompt("Enter a new tourist place:");
    if (place) {
        let li = document.createElement("li");
        li.innerText = place;
        document.getElementById("list").appendChild(li);
    }
}
