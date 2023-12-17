import { Link } from "react-router-dom";
import styled from "styled-components";
import cartIcon from "../../assets/cart button.svg";
import coffee from "../../assets/unsplash_PKXAiiy1O4U.svg";

const MainPage = () => {
  return (
    <>
      <Container>
        <section className="welcome">
          <section className="publicity">
            <h1>
              Enjoy your <span>coffee</span> before your activity
            </h1>

            <p>
              Boost your productivity and build your mood with a glass of coffee
              in the morning.
            </p>

            <div className="buttons-publi">
              <button className="order">
                Order now <img src={cartIcon} />
              </button>
              <Link to={"/"}>More menu</Link>
            </div>
          </section>

          <section className="image-coffe">

            <div className="image">
              <div>
                <img src={coffee} alt="capuccino" />
              </div>
            </div>

            <div className="infos">
              <div>
                <span></span>
                <span></span>
              </div>
              <span></span>
            </div>

          </section>
        </section>
      </Container>
    </>
  );
};

const Container = styled.div`
  background: #f6ebda;
  height: 100vh;
  width: 100%;
  padding: 2em 8em;
  position: relative;
  z-index: 0;

  & .welcome {
    width: inherit;
    display: flex;
    position: relative;
    z-index: 1;

    & .publicity {
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 2.2em;
      margin-top: 3em;

      & h1 {
        font-size: 3em;
        font-weight: 600;

        & span {
          color: #ff902b;
        }
      }

      & .buttons-publi {
        display: flex;
        align-items: center;
        gap: 3em;

        & .order {
          width: 10em;
          height: 3em;
          gap: 0.5em;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 2em;
          border: none;
          background-color: #2f2105;
          color: #fff;
          cursor: pointer;
        }

        & a {
          color: #f4ae26;
          cursor: pointer;
        }
      }
    }

    & .image-coffe {
      width: 50%;
      position: relative;
      z-index: 0;

      & .image {
        position: absolute;
        right: 0;
        z-index: 1;
        background-color: #2f2105;
        width: 26em;
        height: 26em;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        & div img {
          display: block;
          width: 20em;
          height: 20em;
          margin-bottom: 2em;
          margin-left: 1em;
        }
      }

      & .infos {
        position: relative;
      }
    }
  }
`;

export default MainPage;
