import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import blogSocialFetch from "../../axios/config";

import { Container, Body, Content } from "./styles.js";

const UsersDates = () => {
  const [userData, setUserData] = useState([]);
  const { id } = useParams();

  const getUsersDate = async () => {
    try {
      const responseUsersDate = await blogSocialFetch.get(`/users/${id}`);

      const data = responseUsersDate.data;
      setUserData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsersDate();
  }, []);

  return (
    <Container>
      <Body>
        <div>
          <h1>Dados do Usuario</h1>
          <Content>
            <div>
              <h1>Dados</h1>
              <span>Nome: {userData.name}</span>
              <span>Nome de usuario: {userData.username}</span>
              <p>Email: {userData.email}</p>
              <p>Telefone: {userData.phone}</p>
            </div>
            <div>
              <h3>Endereço</h3>
              <p>{userData.address?.city}</p>
              <p>{userData.address?.street}</p>
              <p>{userData.address?.suite}</p>
              <p>{userData.address?.zipcode}</p>
            </div>
          </Content>
        </div>
      </Body>
    </Container>
  );
};

export default UsersDates;
