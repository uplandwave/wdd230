let url = new URL(window.location);
let params = url.searchParams;

// Extract form data from URL parameters
let firstName = params.get("first_name");
let email = params.get("email");
let phone = params.get("phone");
let fruit1 = params.get("fruit1");
let fruit2 = params.get("fruit2");
let fruit3 = params.get("fruit3");
let specialInstructions = params.get("special_instructions");

// Display order details
document.getElementById('yourname').textContent = firstName;
document.getElementById('youremail').textContent = email;
document.getElementById('yourphone').textContent = phone;
document.getElementById('yourfruit1').textContent = fruit1;
document.getElementById('yourfruit2').textContent = fruit2;
document.getElementById('yourfruit3').textContent = fruit3;
document.getElementById('yourspecialinstructions').textContent = specialInstructions;

// Get the submission date from URL parameters
let submissionDate = params.get('submitDate');
console.log("Submitted on:", submissionDate);
// console.log("nothing")

// Display the submission date on the page
document.getElementById('submission-date').textContent = submissionDate;
