let input = document.querySelector(".enabled-input");
let button = document.querySelector(".enable-button");
button.disabled = true;
input.addEventListener("change", stateHandle);
function stateHandle() {
    if (document.querySelector(".enabled-input").value === " ") {
        button.disabled = true; 
    } else {
        button.disabled = false;
    }
}