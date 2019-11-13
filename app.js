let input = document.getElementById("input2")
let key1 = document.getElementById("keycode");
let key2 = document.getElementById("key");
let key3 = document.getElementById("code");
let wrapper = document.getElementById("wrapper")

function keycode(){
    let key = event.keyCode;
    key1.value = key;
}
function keyevent() {
    let key = event.key;
    key2.value = key;
}
function keycodeevent() {
    let key = event.code;
    key3.value = key;
}

input.focus()

wrapper.addEventListener("click", () => {
    input.focus()
} );