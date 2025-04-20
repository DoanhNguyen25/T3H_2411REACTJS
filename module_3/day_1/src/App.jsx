import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import DetailUser from "./components/DetailUser";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [idUser, setIdUser] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetch("https://dummyjson.com/users");
        const response = await data.json();

        if (response) {
          setData(response.users);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  },[]);

  if (loading) return <>Đang tải ....</>;

  return (
    <Layout>
      <div style={{ display: "flex", width: "100px", flexWrap: "wrap" }}>
        {data ? (
          data.map((item) => (
            <div
              key={item.id}
              style={{ border: "1px solid gray", marginBottom: "20px" }}
            >
              <div>{item.firstName}</div>
              <div>{item.email}</div>
              <div>{item.age}</div>

              <button onClick={() => setIdUser(item.id)}>xem chi tiết</button>
            </div>
          ))
        ) : (
          <>Không có dữ liệu</>
        )}
      </div>

      <DetailUser id={idUser} />
    </Layout>
  );
}

export default App;
