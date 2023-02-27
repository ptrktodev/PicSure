import React from "react";
import "./Search.css";
import Loading from "../Loading/Loading";
import { UserContext } from "../../Context";
import Head from "../../Head";
import Id from "../Home/Id";

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
      if (photos) setAtivo(false);
    };
    api();
  }, [date]);

  return (
    <section className="container animeLeft">
      <Head title={date} />
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
