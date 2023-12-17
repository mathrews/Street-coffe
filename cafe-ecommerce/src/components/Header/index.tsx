import { Image } from "primereact/image";
import { InputText } from "primereact/inputtext";
import Logo from "../../assets/Logo.svg";
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import coffeSeeds from "../../assets/bg_img_hero.svg";

const Header = () => {
  return (
    <>
      <Container>
        
        <div className="coffe-seeds">
          <img src={coffeSeeds} />
        </div>

        <section>
          <header>
            <div className="logo">
              <Image src={Logo} alt="cup of coffe logo" />
            </div>

            <nav>
              <NavLink to={"/"}>About us</NavLink>
              <NavLink to={"/our-product"}>Our Product</NavLink>
              <NavLink to={"/Delivery"}>Delivery</NavLink>
            </nav>

            <div className="search-and-chart">
              <InputText placeholder="Search" />
              <i className="pi pi-shopping-cart"></i>
              <span className="stuffs-cart"></span>
            </div>
          </header>
        </section>

      </Container>
    </>
  );
};

const Container = styled.section`
  padding: 2em 8em;
  background-color: #f6ebda;
  position: relative;
  z-index: 0;

  & .coffe-seeds {
    position: absolute;
    z-index: 0;
    top: 0;
    right: 0;
  }

  & header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & i {
      font-size: 30px;
    }

    & .logo {
      & img {
        height: 4em;
        width: 6em;
        pointer-events: none;
      }
    }

    & nav {
      display: flex;
      gap: 2em;

      & a {
        color: #000;

        &.active {
          color: #ff902b;
        }
      }
    }

    & .search-and-chart {
      display: flex;
      align-items: center;
      gap: 3em;
      position: relative;

      & input {
        border: 0px;
        border-radius: 2em;
        box-shadow: 0.1em 0.05em 0.5em 0px #00000030;

        &:focus {
          outline: 2px solid #ff902b;
        }
      }

      & .stuffs-cart {
        position: absolute;
        width: 10px;
        height: 10px;
        background-color: #ff902b;
        border-radius: 50%;
        display: block;
        top: 0.8em;
        right: -0.2em;
        outline: 1px solid #fff;
      }
    }
  }
`;

export default Header;
