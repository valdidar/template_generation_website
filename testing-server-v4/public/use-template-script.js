// Iterate over the text and extract all the variables
const pattern = /{\w+(?:\s\w+)*}/g;
// it shouldnt detect the same variable twice
//let result = text.match(pattern); //this detects them twice, new code following
const result = [...new Set(text.match(pattern))];
console.log(result);

// Create a form to collect input for the variables
const form = document.createElement("form");
form.setAttribute("method", "post");
form.setAttribute("class", "post");


for (const variable of result) {
  const input = document.createElement("input");
  const label = document.createElement("label");
  input.setAttribute("type", "text");
  label.textContent = variable.slice(1, -1);
  input.setAttribute("name", variable);
  form.appendChild(label);
  form.appendChild(input);
}

// Create a button to submit the form
const button = document.createElement("button");
button.textContent = "Submit";
button.setAttribute("class", "submit");
button.addEventListener("click", () => {

  // Get the input values from the form
  values = [];
  for (const variable of result) {
    input = document.querySelector(`input[name='${variable}']`).value;
    values.push([variable, input]);
  }
  console.log(values);

  // Replace the variables in the text with the input values
  newText = text;
  for (variable of result) {
    //it should replace all the variables, not just the first one
    //newText = newText.replace(variable, values[0][1]);//this replaces only the first variable, it should loop through all of them and replace them
    while (newText.includes(variable))
      newText = newText.replace("$" + variable, values[0][1]);
    values.shift();
  }
  const fileName = "document.html";
  const title = name
  const parser = new DOMParser();
const decodedText = parser.parseFromString(`<!doctype html><body>${newText}`, "text/html").body.textContent;
console.log(decodedText);
const htmlContent = `
<!DOCTYPE html>
<html>
<head>
<title>${title}</title>
<style>
table{
  border-collapse: collapse;
  width: 95%;
  margin: 2%;
  padding: 3%;
  border-radius: 10px;
  border: 2px solid #1d1d1d;
  background-color: #fff;
  color: #343A40;
  word-wrap: break-word;
  overflow: auto;
}
th, td{
  border: 1px solid #1d1d1d;
  padding: 10px;
  text-align: left;
}
</style>
</head>
<body>
${decodedText}
</body>
</html>`;

const blob = new Blob([htmlContent], { type: "text/html" });
const link = document.createElement("a");
link.href = URL.createObjectURL(blob);
link.download = fileName;
link.click();
URL.revokeObjectURL(link.href);
});

// Append the form and button to the div
const formDiv = document.querySelector(".form");
formDiv.appendChild(form);
formDiv.appendChild(button);

