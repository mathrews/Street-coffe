import { Link } from "react-router-dom";
import styled from "styled-components";

const Page404 = () => {
  return (
    <>
      <Container>
        <h1>Page Not Found 404</h1>
        <div>
          <Link to={"/"}>Click here for return to Homepage</Link>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #502b08;
  padding: 2em 2em;

  & h1 {
    color: #ff902a;
  }

  & div {
    margin-top: 1em;
    background-color: inherit;
    width: 22em;
    height: 4em;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    border: 2px solid #ff902a;
    transition-duration: 200ms;
    cursor: pointer;

    & a {
        color: #ff902a;
        font-size: 18px;
    }

    &:hover {
        background-color: #ff902a;
        & a {
            color: #502b08;
        }
    }
  }
`;

export default Page404;
