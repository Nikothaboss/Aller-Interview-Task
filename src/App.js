import { GlobalStyle, AppWrapper, width } from "./app.styled";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Header from "./components/Header";
import { base_url } from "./utils/API";

function App() {
  const [data, setData] = useState(null);
  const [edit, setEdit] = useState(null);

  const titleRef = useRef();

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(base_url);
      setData(res);
    };
    getData();
  }, []);

  useEffect(() => {
    console.log(edit);
  }, [edit]);

  const handleEdit = (e) => {
    setEdit(e.target.id);
  };

  return (
    <>
      <GlobalStyle />
      <Header />
      <AppWrapper>
        {data &&
          data.data[0].map((d, idx) => {
            return (
              <div className="row" key={idx}>
                {d.columns.map((article, index) => {
                  return (
                    <div className="article" key={index}>
                      <div className="title">
                        {edit !== article.title && (
                          <>
                            <h2>{article.title}</h2>
                            <button onClick={handleEdit} id={article.title}>
                              Edit
                            </button>
                          </>
                        )}
                        {edit === article.title && (
                          <>
                            <textarea
                              type="text"
                              ref={titleRef}
                              defaultValue={article.title}
                            />
                            <button
                              onClick={() => {
                                article.title = titleRef.current.value;
                                setEdit(null);
                              }}
                            >
                              Save
                            </button>
                          </>
                        )}
                      </div>
                      <a href={article.url}>
                        <img
                          src={
                            article.imageUrl +
                            `&width=${(width.large / 12) * article.width}`
                          }
                          alt="some alt text"
                        />
                      </a>
                    </div>
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
