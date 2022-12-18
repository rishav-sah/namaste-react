import { useEffect, useState } from "react";
import CardComponent from "./CardComponent";
import SearchBarComponent from "./SearchBarComponent";

const CardContainer = () => {

  const [listOfUsers, setListOfUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const request = await fetch("https://jsonplaceholder.typicode.com/users");
    const response = await request.json();
    setListOfUsers(response);
    setFilteredUsers(response);
  };

  const searchUserHandler = (searchValue) => {
    const filteredUsers = listOfUsers.filter((userInfo) => {
      for (const value of Object.values(userInfo)) {
        if (value.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) return true;
      }
    });
    setFilteredUsers(filteredUsers);
  };


  return (
    <div className="card-wrapper">
      <SearchBarComponent searchHandler={searchUserHandler} />
      <div className="card-container">
        {
          !filteredUsers.length
          ? <h1>No Results Found</h1>
          : (filteredUsers).map((userInfo) => <CardComponent key={userInfo.id} userInfo={userInfo} />)
        }
      </div>
    </div>
  );
};

export default CardContainer;