import { useEffect, useState, useRef } from "react";
import "./App.css";
import axios from "axios";

import CardList from "./Components/CardList/CardList.js";
import SearchBox from "./Components/SearchBox/SearchBox.js";

export default function App() {
  const [searchField, setSearchField] = useState("");
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(users);

  useEffect(() => {
    axios.get("https://api.fake-rest.refine.dev/users?_limit=48").then((result) => {
      setUsers(result.data);
    });
  }, []);

  useEffect(() => {
    const newFilter = users.filter((user) => {
      let fullname = user.firstName + " " + user.lastName;
      return fullname.toLowerCase().startsWith(searchField);
    });

    setFilteredUsers(newFilter);
  }, [searchField, users]);

  function searchWords(e) {
    setSearchField(e.target.value.toLowerCase());
  }

  return (
    <div className="App">
      <h1 className="title">API Search Box</h1>
      <SearchBox placeholder="Search Users" onChangeHandler={searchWords} />
      <CardList users={filteredUsers} />
    </div>
  );
}
