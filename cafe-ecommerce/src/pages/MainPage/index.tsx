import { Link } from "react-router-dom";
import styled from "styled-components";
import cartIcon from "../../assets/cart button.svg";

const MainPage = () => {
  return (
    <>
      <Container>
        <section className="welcomes">
          <section className="publicity">
            <h1>
              Enjoy your <span>coffee</span> before your activity
            </h1>
            <p>
              Boost your productivity and build your mood with a glass of coffee
              in the morning.
            </p>
            <button>
              Order now <img src={cartIcon} />
            </button>
            <Link to={"/"}></Link>
          </section>
          <section className="image-coffe"></section>
        </section>
      </Container>
    </>
  );
};

const Container = styled.div`
  background: #f6ebda;
  height: 100vh;
  width: 100%;
`;

export default MainPage;
