//Function to Encrypt the Message
const cipherProcessor = () => {
    let str = (document.getElementById('text-field').value).replace(/\s/g, "").toUpperCase();

    let processedStr = "";
    //Adding a dummy char if str is Odd
    if (str.length % 2 !== 0) {
        str += "X";
    }

    let operation = document.getElementById('operation-selection').value;
    if (operation === "encrypt") {
        for (let i = 0; i < str.length - 1; i += 2) {
            processedStr += encrypter(str[i], str[i + 1]);
        }
    }
    else if (operation === "decrypt") {
        for (let i = 0; i < str.length - 1; i += 2) {
            processedStr += decrypter(str[i], str[i + 1]);
        }
    }

    // console.log(processedStr);
    return processedStr;

}

//Encrypter and Decrypter Functions have redundant code (BAD Practice) Resolve in Future.

//Encrypter Function

const encrypter = (pair1, pair2) => {

    cipherMatrix = matrixFiller();

    let dimensions1 = {};
    let dimensions2 = {};

    // Finding the Row Cols of the Pairs
    for (let i = 0; i < cipherMatrix.length; i++) {
        if (cipherMatrix[i].includes(pair1)) {
            dimensions1.row = i;
            dimensions1.col = cipherMatrix[i].indexOf(pair1);
        }
        if (cipherMatrix[i].includes(pair2)) {
            dimensions2.row = i;
            dimensions2.col = cipherMatrix[i].indexOf(pair2);
        }
    }

    // Encryption Logics Based on Rules.
    let str = "";
    if (dimensions1.row !== dimensions2.row && dimensions1.col !== dimensions2.col) {
        [dimensions1.col, dimensions2.col] = [dimensions2.col, dimensions1.col]
    }
    //For Equal Like EE logic
    else if (dimensions1.row === dimensions2.row && dimensions1.col === dimensions2.col) {
        dimensions1.col += 1;
        dimensions2.col += 1;
        if (dimensions1.col > 4) {
            // dimensions1.col = dimensions1.col - (dimensions1.col - dimensions2.col) - 1;
            dimensions1.col = 0;

        }
        if (dimensions2.col > 4) {
            // dimensions2.col = dimensions2.col - (dimensions2.col - dimensions1.col) - 1;
            dimensions2.col = 0;
        }
    }
    // EE decryption Logic
    else if (dimensions1.row === dimensions2.row && dimensions1.col !== dimensions2.col) {
        dimensions1.col += 1;
        dimensions2.col += 1;
        if (dimensions1.col > 4) {
            // dimensions1.col = dimensions1.col - (dimensions1.col - dimensions2.col) - 1;
            dimensions1.col = 0;

        }
        if (dimensions2.col > 4) {
            // dimensions2.col = dimensions2.col - (dimensions2.col - dimensions1.col) - 1;
            dimensions2.col = 0;
        }
        // str = cipherMatrix[dimensions1.row][dimensions1.col] + cipherMatrix[dimensions2.row][dimensions2.col];
    }
    else if (dimensions1.col === dimensions2.col && dimensions1.row !== dimensions2.row) {
        dimensions1.row += 1;
        dimensions2.row += 1;
        if (dimensions1.row > 4) {
            dimensions1.row = 0;
        }
        if (dimensions2.row > 4) {
            dimensions2.row = 0;
        }
    }

    str = cipherMatrix[dimensions1.row][dimensions1.col] + cipherMatrix[dimensions2.row][dimensions2.col];

    return str;

}


// //Decryptor Function

const decrypter = (pair1, pair2) => {

    cipherMatrix = matrixFiller();

    let dimensions1 = {};
    let dimensions2 = {};

    // Finding the Row Cols of the Pairs
    for (let i = 0; i < cipherMatrix.length; i++) {
        if (cipherMatrix[i].includes(pair1)) {
            dimensions1.row = i;
            dimensions1.col = cipherMatrix[i].indexOf(pair1);
        }
        if (cipherMatrix[i].includes(pair2)) {
            dimensions2.row = i;
            dimensions2.col = cipherMatrix[i].indexOf(pair2);
        }
    }

    // Decryption Logics Based on Rules.
    let str = "";
    if (dimensions1.row !== dimensions2.row && dimensions1.col !== dimensions2.col) {
        [dimensions1.col, dimensions2.col] = [dimensions2.col, dimensions1.col]
    }
    else if (dimensions1.row === dimensions2.row && dimensions1.col === dimensions2.col) {
        if (dimensions1.col === 0) {
            // dimensions1.col = dimensions1.col - (dimensions1.col - dimensions2.col) - 1;
            dimensions1.col = 4;
        }
        else {
            dimensions1.col -= 1;
        }
        if (dimensions2.col === 0) {
            // dimensions2.col = dimensions2.col - (dimensions2.col - dimensions1.col) - 1;
            dimensions2.col = 4;
        }
        else {
            dimensions2.col -= 1;
        }
        // str = cipherMatrix[dimensions1.row][dimensions1.col] + cipherMatrix[dimensions2.row][dimensions2.col];
    }
    else if (dimensions1.row === dimensions2.row && dimensions1.col !== dimensions2.col) {

        if (dimensions1.col === 0) {
            // dimensions1.col = dimensions1.col - (dimensions1.col - dimensions2.col) - 1;
            dimensions1.col = 4;
        }
        else {
            dimensions1.col -= 1;
        }
        if (dimensions2.col === 0) {
            // dimensions2.col = dimensions2.col - (dimensions2.col - dimensions1.col) - 1;
            dimensions2.col = 4;
        }
        else {
            dimensions2.col -= 1;
        }
        // str = cipherMatrix[dimensions1.row][dimensions1.col] + cipherMatrix[dimensions2.row][dimensions2.col];
    }
    else if (dimensions1.col === dimensions2.col && dimensions1.row !== dimensions2.row) {
        if (dimensions1.row === 0) {
            dimensions1.row = 4;
        }
        else {
            dimensions1.row -= 1;
        }

        if (dimensions2.row === 0) {
            dimensions2.row = 4;
        }
        else {
            dimensions2.row -= 1;
        }
    }

    str = cipherMatrix[dimensions1.row][dimensions1.col] + cipherMatrix[dimensions2.row][dimensions2.col];
    return str;

}
