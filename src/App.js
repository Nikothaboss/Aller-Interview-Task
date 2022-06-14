import { GlobalStyle, AppWrapper } from "./app.styled";
import { useState, useEffect } from "react";
import axios from "axios";
import { base_url } from "./utils/API";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(base_url);
      setData(res);
    };
    getData();
  }, []);
  // console.log(data && data.data);
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        {data &&
          data.data[0].map((d) => {
            return (
              <div className="row">
                {d.columns.map((article) => {
                  return <h2>{article.title}</h2>;
                })}
              </div>
            );
          })}
      </AppWrapper>
    </>
  );
}

export default App;
