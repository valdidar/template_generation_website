// this function takes h tag from heading-tags and heading-value and inserts the htmp in string htmlInsideWhitescreen
function insertHeading() {
    htmlInsideWhitescreen = ``;
    event.preventDefault();
    var heading = document.getElementById("heading").value;
    var headingValue = document.getElementById("heading-value").value;
    document.getElementById("heading-value").value = "";
    //var html = `<${heading}  contenteditable="true" >${headingValue}</${heading}>`;
    // add a delete and insert below button to the side of elements
    var html = `<div class="editable-container"><${heading}  contenteditable="true" >${headingValue}</${heading}><button class="delete-button"  onclick="deleteElement(this)">Delete</button><button class="insert-below" onclick="insertBelow(this)">Insert below</button></div>`;
    htmlInsideWhitescreen =  html;
    console.log(htmlInsideWhitescreen);
    //document.getElementsByClassName("whitescreen")[0].insertAdjacentHTML("beforeend", htmlInsideWhitescreen);
    //check if selectedElement is defined, if yes then insert below it, else insert at end of whitescreen
    if (typeof selectedElement != 'undefined') {
        selectedElement.insertAdjacentHTML("afterend", htmlInsideWhitescreen);
        //reset the selectedElement
        selectedElement = undefined;
    }
    else {
        document.getElementsByClassName("whitescreen")[0].insertAdjacentHTML("beforeend", htmlInsideWhitescreen);
    }
}
// this function deletes the element
function deleteElement(element) {
    element.parentNode.remove();
}
// this function sets a variable selectedElement so we can check which element is selected, if nothing is selected then we insert at end of whitescreen
function insertBelow(element) {
    selectedElement = element.parentNode;
    console.log(selectedElement);
}
// this function inserts paragraph in the htmlInsideWhitescreen
function insertParagraph() {
    htmlInsideWhitescreen = ``;
    event.preventDefault();
    var paragraph = document.getElementById("paragraph").value;
    document.getElementById("paragraph").value = "";
    //var html = `<p contenteditable="true">${paragraph}</p>`;
    // add a delete and insert below button to the side of elements
    var html = `<div class="editable-container"><p contenteditable="true">${paragraph}</p><button class="delete-button" onclick="deleteElement(this)">Delete</button><button class="insert-below" onclick="insertBelow(this)">Insert below</button></div>`;
    htmlInsideWhitescreen =  html;
    console.log(htmlInsideWhitescreen);
    //document.getElementsByClassName("whitescreen")[0].insertAdjacentHTML("beforeend", htmlInsideWhitescreen);   
    //check if selectedElement is defined, if yes then insert below it, else insert at end of whitescreen
    if (typeof selectedElement != 'undefined') {
        selectedElement.insertAdjacentHTML("afterend", htmlInsideWhitescreen);
        //reset the selectedElement
        selectedElement = undefined;
    }
    else {
        document.getElementsByClassName("whitescreen")[0].insertAdjacentHTML("beforeend", htmlInsideWhitescreen); 
    }
}
// this function inserts horizontal line in the htmlInsideWhitescreen
function insertHorizontalLine() {
    htmlInsideWhitescreen = ``;
    event.preventDefault();
    //var html = `<hr>`;
    // add a delete and insert below button to the side of elements
    var html = `<div class="editable-container"><hr><button class="delete-button" onclick="deleteElement(this)">Delete</button><button class="insert-below" onclick="insertBelow(this)">Insert below</button></div>`;
    htmlInsideWhitescreen = html;
    console.log(htmlInsideWhitescreen);
    //document.getElementsByClassName("whitescreen")[0].insertAdjacentHTML("beforeend", htmlInsideWhitescreen);
    //check if selectedElement is defined, if yes then insert below it, else insert at end of whitescreen
    if (typeof selectedElement != 'undefined') {
        selectedElement.insertAdjacentHTML("afterend", htmlInsideWhitescreen);
        //reset the selectedElement
        selectedElement = undefined;
    }
    else {
        document.getElementsByClassName("whitescreen")[0].insertAdjacentHTML("beforeend", htmlInsideWhitescreen);
    }
}
// this function creates an empty table, take its input and then insert in the htmlInsideWhitescreen
function createEmptyTable() {
    event.preventDefault();
    var rows = document.getElementById("table-rows").value;
    var columns = document.getElementById("table-columns").value;
    document.getElementById("table-rows").value = "";
    document.getElementById("table-columns").value = "";
    var html = `<table id="table">`;
    for (var i = 0; i < rows; i++) {
        html = html + `<tr>`;
        for (var j = 0; j < columns; j++) {
            html = html + `<td contenteditable="true"></td>`;
        }
        html = html + `</tr>`;
    }
    html = html + `</table>`;
    document.getElementsByClassName("fillingEmptyTable")[0].innerHTML = html;
    document.getElementsByClassName("fillingEmptyTableSubmit")[0].innerHTML = `<form action="" onsubmit="insertTable()">
        <label class="down subheading" for="table">Insert table</label>
        <input class="down submit" type="submit" value="Insert" onclick="">
    </form>`;
    
}
// this function inserts the table in the htmlInsideWhitescreen and then clears the original table
function insertTable() {
    htmlInsideWhitescreen = ``;
    event.preventDefault();
    var table = document.getElementById("table").innerHTML;
    // add a delete and insert below button to the side of elements
    table = `<div class="editable-container">${table}<button class="delete-button" onclick="deleteElement(this)">Delete</button><button class="insert-below" onclick="insertBelow(this)">Insert below</button></div>`;
    htmlInsideWhitescreen = table;
    console.log(htmlInsideWhitescreen);
    //document.getElementsByClassName("whitescreen")[0].insertAdjacentHTML("beforeend", htmlInsideWhitescreen);
    //check if selectedElement is defined, if yes then insert below it, else insert at end of whitescreen
    if (typeof selectedElement != 'undefined') {
        selectedElement.insertAdjacentHTML("afterend", htmlInsideWhitescreen);
        //reset the selectedElement
        selectedElement = undefined;
    }
    else {
        document.getElementsByClassName("whitescreen")[0].insertAdjacentHTML("beforeend", htmlInsideWhitescreen);
    }
    document.getElementsByClassName("fillingEmptyTable")[0].innerHTML = "";
    document.getElementsByClassName("fillingEmptyTableSubmit")[0].innerHTML = "";
}
// this function submits the name of the template, html inside the whitescreen and POST it to /new-template using xhr
function submitForm() {
    event.preventDefault();

    //prevent empty name
    if (document.getElementById("name").value == "") {
        alert("Please enter a name for the template!");
        return;
    }
    var name = document.getElementById("name").value;
    var html = document.getElementsByClassName("whitescreen")[0].innerHTML;
    var data = {
        name: name,
        text: html,
        slug: name.toLowerCase().replace(/ /g, '-')
    };
    console.log(JSON.stringify(data));
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/new-template");
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));
    xhr.onload = function () {
        console.log(this.responseText);
        window.location.href = "/";
    };
}