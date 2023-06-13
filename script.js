console.log('👨‍💻 Author: Saurav Hathi \n🌟 GitHub: https://github.com/sauravhathi');
function removeCommentsAndLineSpacesAndEmptyLines(str, lineSpace, emptyLine, lineBreak) {
    str = str.replace(/\/\/.*|\/\*[\s\S]*?\*\/|< !--[\s\S ]*?- ->|#.*|--.*|\/\*[\s\S]*?\*\//g, "");

    if (lineSpace) {
        str = str.replace(/^\s+|\s+$/gm, "");
    }


    if (emptyLine) {
        str = str.replace(/^\s*[\r\n]/gm, "");
    }


    if (lineBreak) {
        str = str.replace(/(\r\n|\n|\r)/gm, "");
    }

    return str;
}

function showOutput() {

    let input = document.getElementById("input").value;
    if (input == "") {
        alert("Please enter some code");
        return;
    }
    let removeLineSpace = document.getElementById("removeLineSpace").checked;
    let removeNewLineSpace = document.getElementById("removeNewLineSpace").checked;
    let removeLineBreak = document.getElementById("removeLineBreak").checked;

    let output = removeCommentsAndLineSpacesAndEmptyLines(input, removeLineSpace, removeNewLineSpace, removeLineBreak);

    document.getElementById("inputSize").innerHTML = input.length;
    document.getElementById("outputSize").innerHTML = output.length;

    document.getElementById("output").value = output;
}