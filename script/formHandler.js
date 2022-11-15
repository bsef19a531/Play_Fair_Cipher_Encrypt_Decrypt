const invalidStr = "1234567890-=\|][{}';:/?><.''\"\" ,!@#$%^&*()_+";
const invalidStr1 = "1234567890-=\|][{}';:/?><.''\"\",!@#$%^&*()_+";
let containedLetters = " ";

//Function to Handle Single Entry Only 
const containedLettersHandler = (event) => {
    let str = event.target.value.toLowerCase();
    let key = event.key.toLowerCase();

    if (str.indexOf(key) === -1) {
        return true;
    }
    else {
        return false;
    }
}

//Function to Input only alphabets
const characterFilter = (event) => {

    if (invalidStr.indexOf(event.key) === -1 && containedLettersHandler(event)) {
        document.getElementById("key-input").value = event.target.value;
    }
    else {
        event.preventDefault();
    }
}

const characterFilter1 = (event) => {

    if (invalidStr1.indexOf(event.key) === -1) {
        document.getElementById("text-field").value = event.target.value;
    }
    else {
        event.preventDefault();
    }
}

//Function to Handle Form Submission
const formHandler = (event) => {
    event.preventDefault();
    inputStr = (document.getElementById('text-field').value);
    // let str = (document.getElementById('text-field').value).replace(/\s/g, "").toUpperCase();
    button = "<span class='copy-btn' onclick='copyToClipBoard(false)'>Copy</span>"
    document.getElementById("test").innerHTML = "Input: <span id='test-text'>" + inputStr + "</span>" + button;
    cipherHandler();
}


//Function to copy text to ClipBoard
const copyToClipBoard = (eval) => {
    if (eval) { navigator.clipboard.writeText(document.getElementById('cipher-text').innerHTML); }
    else {
        navigator.clipboard.writeText(document.getElementById('test-text').innerHTML);
    }

}