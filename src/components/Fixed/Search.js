import React from "react";
import "./Search.css";
import { ReactComponent as OpenLink } from "../../assets/link.svg";
import Loading from "../Loading/Loading";
import { UserContext } from "../../Context";

const Home = () => {
  const [img, setImg] = React.useState([]);
  const [ativo, setAtivo] = React.useState(true);

  const { date } = React.useContext(UserContext);

  React.useEffect(() => {
    const api = async function () {
      setAtivo(true);
      const key = "Z6REGRpwgP44P320w5pPuqT4bA5OHn2XHvXQwElxyBRDKZRfk4XH6tOn";
      const res = await fetch(
        `https://api.pexels.com/v1/search?query=${date}&per_page=15`,
        {
          headers: {
            Authorization: key,
          },
        }
      );
      const { photos } = await res.json();
      setImg(photos);
      if (photos)
        setTimeout(() => {
          setAtivo(false);
        }, 500);
    };
    api();
  }, [date]);

  return (
    <section className="container animeLeft">
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
                <a href={el.src.original} target="_blank">
                  <OpenLink />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Home;
