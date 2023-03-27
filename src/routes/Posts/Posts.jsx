import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import blogSocialFetch from "../../axios/config";
import { Body, Container, Content } from "./styles";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const { id } = useParams();

  const getPost = async () => {
    try {
      const responsePost = await blogSocialFetch.get(`/posts/${id}/comments`);
      const data = responsePost.data;
      setPosts(data);
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
          <h1>Dados Post</h1>
          {posts.length === 0 ? (
            <p>Carregando...</p>
          ) : (
            posts.map((post) => (
              <Content key={post.id}>
                <div>
                  <h3>
                    <span style={{ fontWeight: " bold " }}>Nome: </span>
                    {post.name}
                  </h3>
                  <p>
                    <span style={{ fontWeight: " bold " }}>Email:</span>{" "}
                    {post.email}
                  </p>
                  <p>
                    <span style={{ fontWeight: " bold " }}>Comentario:</span>{" "}
                    {post.body}
                  </p>
                </div>
              </Content>
            ))
          )}
        </div>
      </Body>
    </Container>
  );
};

export default Posts;
