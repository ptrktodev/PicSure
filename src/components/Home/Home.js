import React from "react";
import "./Home.css";
import Types from "../Types/Types";
import Loading from "../Loading/Loading";
import Head from "../../Head";
import Id from "./Id";

const Home = () => {
  const [img, setImg] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [ativo, setAtivo] = React.useState(true);

  function btn({ target }) {
    setSearch(target.textContent);
  }

  React.useEffect(() => {
    const api = async function () {
      setAtivo(true);
      const key = "Z6REGRpwgP44P320w5pPuqT4bA5OHn2XHvXQwElxyBRDKZRfk4XH6tOn";
      const res = await fetch(
        `https://api.pexels.com/v1/search?query=${
          search || "cars"
        }&per_page=15`,
        {
          headers: {
            Authorization: key,
          },
        }
      );
      const { photos } = await res.json();
      setImg(photos);
      if (photos) setAtivo(false);
    };
    api();
  }, [search]);

  return (
    <section className="container animeLeft">
      <Head title="Home" />
      <div className="tipo">
        <Types fun={btn} />
      </div>
      {ativo ? (
        <Loading />
      ) : (
        <div className="Home">
          {img.map((el) => (
            <div className="photos">
              <li key={el.id}>
                <img src={el.src.large} alt={el.alt} />
              </li>
              <div className="infos">
                <h1>{el.photographer}</h1>

                {/* <OpenLink /> */}
                <Id id={el.id} img={el.src.large} />
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Home;
