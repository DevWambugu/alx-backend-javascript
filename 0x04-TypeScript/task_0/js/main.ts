interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;ls
  }

  const student1: Student = {
    firstName: "Eric",
    lastName: "Wambugu",
    age: 29,
    location: "Nairobi",
  };
  
  const student2: Student = {
    firstName: "Joshua",
    lastName: "Onsomu",
    age: 28,
    location: "Nairobi",
  };

  const studentsList: Student[] = [student1, student2];
  function renderTable() {
    const tableBody = document.querySelector("#StudentsTable tbody") as HTMLTableSectionElement;
  
    // Clear existing rows
    tableBody.innerHTML = '';
  
    // To update the table, loop through the array and update the table
    studentsList.forEach(student => {
      const row = tableBody.insertRow();
  
      const cell1 = row.insertCell(0);
      cell1.textContent = student.firstName;
  
      const cell2 = row.insertCell(1);
      cell2.textContent = student.lastName;
  
      const cell3 = row.insertCell(2);
      cell3.textContent = student.age.toString();
  
      const cell4 = row.insertCell(3);
      cell4.textContent = student.location;
    });
  }
  
  // Initial render
  renderTable();
  