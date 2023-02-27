import React from "react";
import { useNavigate } from "react-router-dom";
export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [value, setValue] = React.useState("");
  const [date, setDate] = React.useState("");
  const navigate = useNavigate();

  function valueInput({ target }) {
    setValue(target.value);
  }

  function valueSearch(e) {
    if (value.length > 0) {
      setDate(value);
      console.log(date);
      navigate("/search");
    } else {
      setDate(null);
    }
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      if (value.length > 0) {
        setDate(value);
        console.log(date);
        navigate("/search");
      } else {
        setDate(null);
      }
    }
  }

  return (
    <UserContext.Provider
      value={{ valueInput, value, date, setDate, valueSearch, handleKeyPress }}
    >
      {children}
    </UserContext.Provider>
  );
};
