import StudentList from "./components/StudentList";

function App() {
  return (
    <main>
      <h1>Attendance</h1>
      Here's the first rendered student list:
      <StudentList></StudentList>
      Here's the second rendered student list:
      <StudentList></StudentList>
    </main>
  );
}

export default App;
