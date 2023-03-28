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
  width: 100%;
  margin-top: 2px;
  padding: 15px;
  height: 100px;
  border-radius: 20px;
  box-shadow: 20px 20px 15px 3px rgba(50, 50, 50, 0.22);
  background: #fff;
  margin-bottom: 40px;
  > div {
    align-items: flex-start;
    > h1 {
      display: flex;
      margin-bottom: 10px;
      justify-content: center;
    }
    > h3,
    p {
      width: 100%;
      margin: 4px 3px;
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

  @media (max-width: 758px) {
    height: auto;
  }

  @media (max-width: 430px) {
    height: auto;
    display: block;
    display: flex;
  }
`;
