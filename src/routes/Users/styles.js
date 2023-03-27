// .users h1 {
//   text-transform: uppercase;
//   text-align: center;
//   margin-bottom: 1.5rem;
// }

// .names {
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 1.5rem;
//   padding-bottom: 1.5rem;
//   border-bottom: 1px solid #777;
// }

// .names h2,
// .names h3,
// .name p {
//   margin-bottom: 1rem;
// }

// .btn {
//   background-color: #fff;
//   color: #0e1217;
//   border: 1px solid #fff;
//   opacity: 1;
//   padding: 0.5rem 1rem;
//   border-radius: 1rem;
//   max-width: 100px;
//   text-align: center;
//   cursor: pointer;
//   transition: 0.3s;
// }

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
  padding: 15px;
  height: 150px;
  border-radius: 20px;
  box-shadow: 20px 20px 15px 3px rgba(50, 50, 50, 0.22);
  background: #fff;
  margin-bottom: 30px;

  > div {
    align-items: flex-start;
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

      > span {
        flex-direction: column;
        font-weight: bold;
      }
    }

    a {
      padding: 0.5rem 1rem;
      border-radius: 1rem;
      cursor: pointer;
      transition: 0.6s;
      margin-top: 30px;
      display: flex;
      background-color: black;
      color: #fff;
      text-align: center;
      justify-content: center;
      opacity: 1;
      font-weight: bold;
    }

    a:hover {
      background-color: #9a9aa5;
      color: #000;
    }
  }
  &:hover {
    opacity: 0.8;
  }
`;
