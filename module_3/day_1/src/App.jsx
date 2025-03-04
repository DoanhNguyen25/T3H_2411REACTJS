import "./App.css";
import CustomButton from "./components/CustomButton";
import Header from "./components/Header";
import Layout from "./components/Layout";

function App() {
  let randomString = "hello word!";

  const Students = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    age: 14 + Math.floor(Math.random() * 3),
    name: `Văn ${String.fromCharCode(65 + i)}`,
    gender: Math.random() < 0.5 ? "male" : "female",
    score: Math.floor(Math.random() * 51) + 50,
  }));

  // yêu cầu render ra list các sinh viên
  // yêu cầu render ra các sinh viên có giới tính là nữ và có điểm số chẵn

  return (
    <Layout>
      {Students.map((student, idx) => (
        <div key={student.id}>
          <div>=========== Học sinh {idx + 1} =============</div>
          <div>ID:{student.id}</div>
          <div>Tuổi:{student.age}</div>
          <div>Học và tên:{student.name}</div>
        </div>
      ))}
    </Layout>
  );
}

export default App;
