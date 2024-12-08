let user_name;

do {
    user_name = prompt("Please enter your name.");
} while (user_name.trim() === "" || !isNaN(Number(user_name)));

let year;

do {
    year = parseInt(prompt("Please enter your year of birth.")); 
} while (isNaN(year) || year > 2010); 

let currentYear = new Date().getFullYear(); 
let age = currentYear - year; 


document.write(`<span style="text-decoration: underline;">Name:</span>`);
document.write(`<span>` + "&#32;" + user_name) + `</span>`; 

document.write("<br>");

document.write(`<span style="text-decoration: underline;"> Year of Birth:</span>`); 
document.write(`<span>` + "&#32;" + year + `</span>`); 

document.write("<br>");

document.write(`<span style="text-decoration: underline;"> Age:</span>`);
document.write(`<span>` + "&#32;" + age + `</span>`); 


