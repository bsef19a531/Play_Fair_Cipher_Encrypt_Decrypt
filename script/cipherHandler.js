// Reference List
const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//Function to Handle Cipher Encryption/Decryption
const cipherHandler = () => {

    processedStr = cipherProcessor();     //Sending matrix for Encrypt/Decrypt Process returning Processed String
    button = "<span class='copy-btn' onclick='copyToClipBoard(true)'>Copy</span>"
    document.getElementById('cipher').innerHTML = "Result: <span id='cipher-text'>" + processedStr + "</span>" + button;

}


//Function to Fill the Cipher Matrix
const matrixFiller = () => {
    let cipherMatrix = [];
    let fillArray = arrayFiller();
    let index = 0;
    for (let row = 0; row < 5; row++) {
        let cipherRow = [];
        for (let col = 0; col < 5; col++) {
            cipherRow.push(fillArray[index])
            index++;
        }
        cipherMatrix.push(cipherRow);
    }
    return (cipherMatrix);

}


// Function to fill the Array That is used to Fill the Cipher Matrix
const arrayFiller = () => {

    let key = keyFilter();

    let values = [...alphabets];

    let fillArray = [];

    for (let i = 0; i < key.length; i++) {

        fillArray.push(key[i]);
        values.splice(values.indexOf(key[i]), 1);
    }

    for (let i = 0; i < values.length; i++) {
        fillArray.push(values[i]);
    }

    return fillArray;

}


// Function to filter Key and Remove any Multiple instance of a character
const keyFilter = () => {
    let key = (document.getElementById('key-input').value).toUpperCase();
    let filteredKey = "";
    for (let i = 0; i < key.length; i++) {
        if (!filteredKey.includes(key[i])) {
            filteredKey += key[i];
        }
    }

    return filteredKey;
}

