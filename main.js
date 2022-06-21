//class tasks
//1
class Student {
  constructor(studentName, studentClass, studentId) {
    this.studentName = studentName;
    this.studentclass = studentClass;
    this.studentId = studentId;
  }
}
//2
const Avi = new Student("Avi", "1st", 201);
const Dan = new Student("Dan", "1st", 202);
console.log(Avi, Dan);
//3
class User {
  constructor(firstName, lastName, age, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
  }
}
//4
const userA = new User("Or", "Gadamo", 23, "or@gmail.com");
const userB = new User("Abey", "Asaye", 26, "Abey@gmail.com");
const userC = new User("Batel", "Haiylo", 24, "batel@gmail.com");
let users = [userA, userB, userC];
// users.forEach((entry) => {
//   for (let key in entry) {
//     document.body.innerHTML += `<h1>${key}:${entry[key]}</h1>`;
//   }
// });
//5
function printUserObj() {
  const newUser = new User(
    firstname_input.value,
    lastname_input.value,
    age_input.value,
    email_input.value
  );
  printTableObj(newUser);
}
//6
function printTableObj(obj) {
  let newTable = document.createElement("table");
  let tableHead = document.createElement("thead");
  let tableBody = document.createElement("tbody");
  let trElement = document.createElement("tr");
  for (let key in obj) {
    let thElement = document.createElement("th");
    thElement.innerText = key;
    tableHead.appendChild(thElement);
    trElement.innerHTML += `<td>${obj[key]}</td>`;
  }
  tableBody.appendChild(trElement);
  newTable.appendChild(tableHead);
  newTable.appendChild(tableBody);
  document.body.appendChild(newTable);
}
//7
class Dog {
  constructor(dogName, dogType, dogDate) {
    this.dogName = dogName;
    this.dogType = dogType;
    this.dogDate = dogDate;
  }
}
//8
const dogArray = [];
function createDogArray() {
  if (dogArray.length < 5) {
    const newDog = new Dog(
      dogname_input.value,
      dogtype_input.value,
      dogdate_input.value
    );
    dogArray.push(newDog);
    return;
  }
  console.log(dogArray);
}
//9
class Teacher {
  constructor(firstName, lastName, classNumber, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.classNumber = classNumber;
    this.email = email;
  }
}
//10
const teacherArray = [];
function createTeacherObj() {
  if (teacherArray.length < 4) {
    const teacherObj = new Teacher(
      firstname_input.value,
      lastname_input.value,
      class_input.value,
      email_input.value
    );
    teacherArray.push(teacherObj);
    return;
  }
  printObjArray(teacherArray);
}
function printObjArray(objArr) {
  let newTable = document.createElement("table");
  let tableHead = document.createElement("thead");
  let tableBody = document.createElement("tbody");
  for (let key in objArr[0]) {
    let thElement = document.createElement("th");
    thElement.innerText = key;
    tableHead.appendChild(thElement);
  }
  objArr.forEach((obj) => {
    let trElement = document.createElement("tr");
    for (let key in obj) {
      trElement.innerHTML += `<td>${obj[key]}</td>`;
    }
    tableBody.appendChild(trElement);
  });

  newTable.appendChild(tableHead);
  newTable.appendChild(tableBody);
  document.body.appendChild(newTable);
}
//11,12,13,14
class Course {
  constructor(firstName, isTeacher, gradeList, studentList) {
    this.firstName = firstName;
    this.istTeacher = isTeacher;
    this.gradeList = gradeList;
    this.studentList = studentList;
  }
}
const cyberCourse = new Course(
  "Or",
  true,
  [100, 90, 70, 80],
  ["Abey", "Batel", "Znevo", "Dalia"]
);
for (let key in cyberCourse) {
  if (Array.isArray(cyberCourse[key])) {
    if (0 / cyberCourse[key][0] == 0) {
      cyberCourse[key].sort((a, b) => a - b);
    } else {
      cyberCourse[key].sort();
    }
    let h1Printer = document.createElement("h1");
    cyberCourse[key].forEach((item) => {
      h1Printer.innerText += `${item} `;
    });
    document.body.appendChild(h1Printer);
  } else {
    document.body.innerHTML += `<h1>${cyberCourse[key]}</h1>`;
  }
}
