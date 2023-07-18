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
  console.log(newText)
  while (newText.includes("&lt;br&gt;") || newText.includes("&amp;nbsp;&amp;nbsp;")) {
    newText = newText.replace("&lt;br&gt;", "\n").replace("&amp;nbsp;&amp;nbsp;", "\t")
  }
  //download the file
  const fileName = "example.txt";

  const blob = new Blob([newText], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
  URL.revokeObjectURL(link.href);

  // Display the new text
  const outputDiv = document.querySelector(".output_text");
  const output = document.createElement("p");
  output.textContent = newText;
  outputDiv.appendChild(output);
});

// Append the form and button to the div
const formDiv = document.querySelector(".form");
formDiv.appendChild(form);
formDiv.appendChild(button);

