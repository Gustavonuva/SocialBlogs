import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 14px 16px;
  max-width: 100%;
`;

export const Body = styled.div`
  display: flex;
  margin-top: 20px;
  > div {
    > h1 {
      display: flex;
      justify-content: center;
      margin-bottom: 6rem;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 320px;
  margin-top: 2px;
  padding: 4px 3px;
  height: 70%;
  border-radius: 20px;
  box-shadow: 20px 20px 15px 3px rgba(50, 50, 50, 0.22);
  background: #fff;
  > div {
    align-items: flex-start;
    border-bottom: 1px solid #000;
    margin-bottom: 50px;
    > h1 {
      display: flex;
      margin-bottom: 10px;
      justify-content: center;
    }
    > h3,
    p {
      width: 100%;
      margin: 4px 3px;
      font-weight: none;
    }
    > span {
      display: flex;
      flex-direction: column;
      margin: 4px 3px;
    }
  }
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
