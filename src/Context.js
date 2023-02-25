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

  function valueSearch({ target }) {
    console.log(target);
    if (value.length > 0) {
      setDate(value);
      console.log(date);
      navigate("/search");
    } else {
      setDate(null);
    }
  }

  return (
    <UserContext.Provider
      value={{ valueInput, value, date, setDate, valueSearch }}
    >
      {children}
    </UserContext.Provider>
  );
};
