function submitForm(){
    const formData = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    address: document.getElementById("address").value,
    pincode: document.getElementById("pincode").value,
    gender: document.getElementById("gender").value,
    foodChoice: Array.from(document.getElementById("foodChoice").selectedOptions).map(option => option.value),
    state: document.getElementById("state").value,
    country: document.getElementById("country").value  

};

const tableBody = document.querySelector("#createTable tbody");
const newRow = tableBody.insertRow();

Object.values(formData).forEach(value => {
    const cell = newRow.insertCell();
    cell.textContent = value;
});


document.getElementById("myForm").reset();
}