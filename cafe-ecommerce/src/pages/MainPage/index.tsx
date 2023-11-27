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
            <div>
              <Image src={Logo} alt="cup of coffe logo" />
            </div>
            <nav>
              <Link to={"/"}>About us</Link>
              <Link to={"/our-product"}>Our Product</Link>
              <Link to={"/Delivery"}>Delivery</Link>
            </nav>

            <InputText placeholder="Search"/>
          </header>

          <main></main>
        </section>
      </Container>
    </>
  );
};

const Container = styled.section`
  padding: 2em 8em;
`;

export default MainPage;
