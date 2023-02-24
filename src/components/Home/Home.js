import React from "react";
import "./Home.css";
import Types from "../Types/Types";
import { ReactComponent as OpenLink } from "../../assets/link.svg";

const Home = () => {
  const [img, setImg] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [ativo, setAtivo] = React.useState(false);

  function btn({ target }) {
    setSearch(target.textContent);
  }

  React.useEffect(() => {
    const api = async function () {
      const key = "Z6REGRpwgP44P320w5pPuqT4bA5OHn2XHvXQwElxyBRDKZRfk4XH6tOn";
      const res = await fetch(
        `https://api.pexels.com/v1/search?query=${
          search || "sports"
        }&per_page=15`,
        {
          headers: {
            Authorization: key,
          },
        }
      );
      const { photos } = await res.json();
      setImg(photos);
      console.log(photos);
      if (photos) setAtivo(true);
    };
    api();
  }, [search]);

  if (!ativo) {
    return <p>carregando...</p>;
  } else {
    return (
      <section className="container animeLeft">
        <div className="tipo">
          <Types fun={btn} />
        </div>
        <div className="Home">
          {img.map((el) => (
            <div className="photos">
              <li key={el.id}>
                <img src={el.src.large} alt={el.alt} />
              </li>
              <div className="infos">
                <h1>{el.photographer}</h1>
                <a href={el.src.original} target="_blank">
                  <OpenLink />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
};

export default Home;
