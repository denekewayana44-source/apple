//  your solutions start here
//  make sure to connect your main.js file with your html 
// happy coding 🧑‍💻

/// 1.1 Select the element with an id of "sample1"
// We use getElementById to select the specific ID [cite: 4]
const sampleElement = document.getElementById("sample1");

// 1.2 Print the element itself on the console upon page refresh [cite: 5]
console.log(sampleElement);

// 1.3 Print the content of the element on the console upon page refresh [cite: 6]
// We use the .textContent property as suggested by the hint 
console.log(sampleElement.textContent);

// 2.1 Select the element with an ID of "techCompanies" 
// (Do not use "querySelector")
const techCompaniesList = document.getElementById("techCompanies");

// Display it on your console
console.log(techCompaniesList);

// 2.2 Use "querySelector" to select the element with an ID of "techCompanies"
const techCompaniesSelector = document.querySelector("#techCompanies");

// Display it on your console
console.log(techCompaniesSelector); //[cite: 11]

// 2.3 Select all 'li' elements inside 'techCompanies' using querySelectorAll
const totalCompanies = document.querySelectorAll("#techCompanies li");

// Display the total count (the length of the NodeList) on the console
console.log(totalCompanies.length);

// 2.4 Select all elements with a class name of "red"

// Method 1: Using querySelectorAll (requires the "." for class)
const redByQuery = document.querySelectorAll(".red");
console.log("Elements selected via querySelectorAll:", redByQuery);

// Method 2: Using getElementsByClassName (only the class name string)
const redByClass = document.getElementsByClassName("red");
console.log("Elements selected via getElementsByClassName:", redByClass);

// 2.5 Create a new li HTML element
const newCompany = document.createElement("li");

// Set its content to "Facebook"
newCompany.textContent = "Facebook";

// Display it on the console
console.log(newCompany);

// 2.6 Give the newly created element a class of "blue" using JavaScript
newCompany.classList.add("blue");

// Display it on the console to verify the class is added
console.log(newCompany);

// 2.7 Find the "Sony" li element
// We can find it by searching for the <li> that contains the text "Sony"
const sonyElement = Array.from(document.querySelectorAll("#techCompanies li"))
  .find(el => el.textContent === "Sony");

// Append the newly created "Facebook" element next to it
if (sonyElement) {
  sonyElement.after(newCompany);
}

// 2.8 Select all elements with the class "blue" within the techCompanies list
const blueCompaniesList = document.querySelectorAll("#techCompanies .blue");

// Get the count of those elements
const blueCount = blueCompaniesList.length;

// Select the "blueCompanies" div and display the result
const displayDiv = document.getElementById("blueCompanies");
displayDiv.textContent = `Number of blue companies: ${blueCount}`;

// Also displaying on console for verification
console.log("Total blue companies:", blueCount);

// Function to add background color [cite: 25, 26]
function addBackground() {
  document.body.style.backgroundColor = "#99ecff"; // light-blue 
}

// Function to remove background color [cite: 25, 26]
function removeBackground() {
  document.body.style.backgroundColor = ""; // reset to none 
}

// Select the buttons using their IDs from the HTML 
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("No");

// Bind the elements with click events and attach the functions [cite: 27, 28]
yesBtn.addEventListener("click", addBackground);
noBtn.addEventListener("click", removeBackground);


// 4.1 Select the form and result display element
const form = document.getElementById("adder");
const resultDiv = document.getElementById("sum");

// 4.2 Add a submit event listener to the form
form.addEventListener("submit", function (event) {
  // Prevent the page from refreshing on form submission
  event.preventDefault();

  // Retrieve values from the input fields by their names
  const firstInput = document.getElementsByName("first-value")[0].value;
  const secondInput = document.getElementsByName("second-value")[0].value;

  // Convert string values to numbers
  const num1 = Number(firstInput);
  const num2 = Number(secondInput);

  // 4.3 Check if the provided values are valid numbers
  if (isNaN(num1) || isNaN(num2) || firstInput === "" || secondInput === "") {
    // 3. Display error message if input is not a number
    resultDiv.textContent = "Please enter numerical values only";// [cite: 34, 35]
  } else {
    // Calculate sum and average
    const sum = num1 + num2; //[cite: 31]
    const average = sum / 2;

    const resultText = `Sum: ${sum}, Average: ${average}`;

    // 1. Display the result on the console
    console.log(resultText);// [cite: 32]

    // 2. Display the result underneath the form
    resultDiv.textContent = resultText; //[cite: 33]
  }
});