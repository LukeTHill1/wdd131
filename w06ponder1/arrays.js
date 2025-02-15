//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`; // use template literals to create the list item
}
const stepsHtml = steps.map(listTemplate); // use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join(""); // set the innerHTML

// example 2 & 3
const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
    let points = 0;
    if (grade === "A"){
        points = 4;
    }
    else if (grade === "B"){
        points = 3;
    }
    return points;
}
const gpaPoints = grades.map(convertGradeToPoints); // use map to convert the list from strings to points
console.log("gpa points: " + gpaPoints); // set the innerHTML
const pointsTotal = gpaPoints.reduce(function (total, item) {
    return total + item;
}, 0);
const gpa = pointsTotal / gpaPoints.length;
console.log("gpa: " + gpa); // set the innerHTML

// example 4
const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter(function (word) {
  return word.length < 6;
});
console.log(shortWords); // set the innerHTML

// example 5
// improved luckyNumber
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber);
console.log(luckyIndex); // set the innerHTML