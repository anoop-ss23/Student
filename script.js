let students = JSON.parse(localStorage.getItem("students")) || [
    {
        name: "Anoop S",
        course: "Full Stack Development",
        skills: ["Java", "Spring Boot", "MySQL"]
    },
    {
        name: "Rahul Kumar",
        course: "Data Science",
        skills: ["Python", "Machine Learning", "Pandas"]
    }
];

const studentList = document.getElementById("studentList");
const profilePopup = document.getElementById("profilePopup");
const addPopup = document.getElementById("addPopup");

function renderStudents() {
    studentList.innerHTML = "";
    students.forEach((s, index) => {
        studentList.innerHTML += `
            <li>
                ${s.name}
                <button class="details-btn" onclick="showProfile(${index})">Profile</button>
            </li>`;
    });
}

renderStudents();

function showProfile(index) {
    const s = students[index];

    document.getElementById("popupName").textContent = s.name;
    document.getElementById("popupCourse").textContent = s.course;

    let skillsList = document.getElementById("popupSkills");
    skillsList.innerHTML = "";
    s.skills.forEach(skill => {
        skillsList.innerHTML += `<li>${skill}</li>`;
    });

    profilePopup.style.display = "flex";
}

function closeProfilePopup() {
    profilePopup.style.display = "none";
}

document.getElementById("addStudentBtn").onclick = function () {
    addPopup.style.display = "flex";
};

function closeAddPopup() {
    addPopup.style.display = "none";
}

document.getElementById("saveStudentBtn").onclick = function () {

    let name = document.getElementById("nameInput").value;
    let course = document.getElementById("courseInput").value;
    let skills = document.getElementById("skillsInput").value.split(",");

    if (name === "" || course === "") {
        alert("Name and Course are required");
        return;
    }

    let newStudent = {
        name: name,
        course: course,
        skills: skills.map(s => s.trim())
    };

    students.push(newStudent);


    localStorage.setItem("students", JSON.stringify(students));

    renderStudents(); 
    closeAddPopup();   
};
