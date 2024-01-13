var student1 = {
    firstName: "Eric",
    lastName: "Wambugu",
    age: 29,
    location: "Nairobi",
};
var student2 = {
    firstName: "Joshua",
    lastName: "Onsomu",
    age: 28,
    location: "Nairobi",
};
var studentsList = [student1, student2];
function renderTable() {
    var tableBody = document.querySelector("#StudentsTable tbody");
    // Clear existing rows
    tableBody.innerHTML = '';
    // To update the table, loop through the array and update the table
    studentsList.forEach(function (student) {
        var row = tableBody.insertRow();
        var cell1 = row.insertCell(0);
        cell1.textContent = student.firstName;
        var cell2 = row.insertCell(1);
        cell2.textContent = student.lastName;
        var cell3 = row.insertCell(2);
        cell3.textContent = student.age.toString();
        var cell4 = row.insertCell(3);
        cell4.textContent = student.location;
    });
}
// Initial render
renderTable();
