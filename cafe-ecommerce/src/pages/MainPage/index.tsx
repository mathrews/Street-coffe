import { Image } from "primereact/image";
import { InputText } from "primereact/inputtext";
import Logo from "../../assets/Logo.svg";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <Container>
        <section>
          <header>
            <div className="logo">
              <Image src={Logo} alt="cup of coffe logo" />
            </div>

            <nav>
              <Link to={"/"}>About us</Link>
              <Link to={"/our-product"}>Our Product</Link>
              <Link to={"/Delivery"}>Delivery</Link>
            </nav>

            <div className="search-and-chart">
              <InputText placeholder="Search" />
              <i className="pi pi-shopping-cart"></i>
            </div>
          </header>

          <main></main>
        </section>
      </Container>
    </>
  );
};

const Container = styled.section`
  padding: 2em 8em;

  & section {
    & header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      & .logo {
        & img {
          height: 4em;
          width: 6em;
        }
      }

      & i {
        font-size: 30px;
      }
    }
  }
`;

export default MainPage;
