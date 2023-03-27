import blogSocialFetch from "../../axios/config";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./styles.js";
import { Body, Container, Content } from "./styles.js";

const Home = () => {
  const [post, setPost] = useState([]);

  const getPost = async () => {
    try {
      const response = await blogSocialFetch.get("/posts");

      const data = response.data;
      setPost(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <Container>
      <Body>
        <div>
          <h1>Ultimas atualizações</h1>
          {post.length === 0 ? (
            <p>Carregando..</p>
          ) : (
            post.map((post) => (
              <Content key={post.id}>
                <div>
                  <h2>Titulo: {post.title}</h2>
                  <p>{post.body}</p>
                  <Link to={`/posts/${post.id}/comments`}>Ler mais</Link>
                </div>
              </Content>
            ))
          )}
        </div>
      </Body>
    </Container>
  );
};

export default Home;
