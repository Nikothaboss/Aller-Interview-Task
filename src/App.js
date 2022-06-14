import { GlobalStyle, AppWrapper, width } from "./app.styled";
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
          data.data[0].map((d, idx) => {
            return (
              <div className="row" key={idx}>
                {d.columns.map((article, index) => {
                  return (
                    <a href={article.url}>
                      <div className="article">
                        <div className="title" style={{}}>
                          <h2>{article.title}</h2>
                        </div>
                        <img
                          src={
                            article.imageUrl +
                            `&width=${(width.large / 12) * article.width}`
                          }
                          alt="some alt text"
                        />
                      </div>
                    </a>
                  );
                })}
              </div>
            );
          })}
      </AppWrapper>
    </>
  );
}

export default App;
