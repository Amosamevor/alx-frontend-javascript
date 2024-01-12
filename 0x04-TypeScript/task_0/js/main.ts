interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Eyram",
  lastName: "Kobbla",
  age: 25,
  location: "Volta"
};

const student2: Student = {
  firstName: "Francis",
  lastName: "Fosu",
  age: 25,
  location: "Accra"
};

const studentsList: Student[] = [student1, student2];

function renderTable() {
  const table = document.createElement("table");
  studentsList.forEach(student => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell();
    firstNameCell.innerHTML = student.firstName;
    const locationCell = row.insertCell();
    locationCell.innerHTML = student.location;
  });
  document.body.appendChild(table);
}

renderTable();

