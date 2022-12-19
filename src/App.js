import React, { useState } from "react";
import StudentList from "./components/StudentList";
import ClassInfo from "./components/ClassInfo";
import NewStudentForm from "./components/NewStudentForm";

function App() {
  const [studentData, setStudentData] = useState([
    {
      id: 1,
      nameData: "Ada",
      emailData: "ada@dev.org",
      isPresentData: false,
    },
    {
      id: 2,
      nameData: "Soo-ah",
      emailData: "sooah@dev.org",
      isPresentData: false,
    },
    {
      id: 3,
      nameData: "Chrissy",
      emailData: "chrissy@dev.org",
      isPresentData: true,
    },
  ]);

  const updateStudentData = (updatedStudent) => {
    const students = studentData.map((student) => {
      if (student.id === updatedStudent.id) {
        return updatedStudent;
      } else {
        return student;
      }
    });

    setStudentData(students);
  };

  const addStudentData = newStudent => {
    // Duplicate the student list
    const newStudentList = [...studentData];

    // Logic to generate the next valid student ID
    const nextID = Math.max(...newStudentList.map(student => student.id)) + 1;

    newStudentList.push({
      id: nextID,
      nameData: newStudent.nameData,
      emailData: newStudent.emailData,
      isPresentData: false,
    });

    setStudentData(newStudentList);
  };

  return (
    <main>
      <h1>Attendance</h1>
      <ClassInfo memberCount={studentData.length}></ClassInfo>
      <StudentList
        students={studentData}
        onUpdateStudent={updateStudentData}
      ></StudentList>
      <NewStudentForm addStudentCallback={addStudentData} />
    </main>
  );
}

export default App;
