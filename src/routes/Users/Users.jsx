import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import blogSocialFetch from "../../axios/config";

import { Body, Container, Content } from "./styles.js";

const Users = () => {
  const [users, setUSer] = useState([]);

  const getUsers = async () => {
    try {
      const responseUsers = await blogSocialFetch.get("/users");

      const data = responseUsers.data;
      setUSer(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Container>
      <Body>
        <div className="users">
          <h1>Usuarios cadastrados</h1>
          {users.length === 0 ? (
            <p>Carregando..</p>
          ) : (
            users.map((users) => (
              <Content key={users.id}>
                <div className="names">
                  <h2>Nome: {users.name}</h2>
                  <p>
                    <span>Nome de usuario:</span> {users.username}
                  </p>
                  <p>
                    <span>Email:</span> {users.email}
                  </p>
                  <Link to={`/users/${users.id}`} className="btn">
                    Ler Mais
                  </Link>
                </div>
              </Content>
            ))
          )}
        </div>
      </Body>
    </Container>
  );
};

export default Users;
