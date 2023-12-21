import { Link } from "react-router-dom";
import styled from "styled-components";
import cartIcon from "../../assets/cart button.svg";
import coffee from "../../assets/unsplash_PKXAiiy1O4U.svg";
import starIcon from "../../assets/akar-icons_star.svg";
import coffeBeans from "../../assets/bg_img_hero (2).svg";
import { Image } from "primereact/image";
// import Card from "../../components/Card";

const MainPage = () => {
    return (
        <>
            <Container>
                <section className="welcome">
                    <section className="publi-image">
                        <section className="publicity">
                            <h1>
                                Enjoy your <span>coffee</span> before your
                                activity
                            </h1>

                            <p>
                                Boost your productivity and build your mood with
                                a glass of coffee in the morning.
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
                                <span className="name">Cappuccino</span>
                                <span className="rate">
                                    4.8
                                    <div>
                                        <img
                                            src={starIcon}
                                            alt="star-avaliation"
                                        />
                                    </div>
                                </span>
                                <span className="buys">18K</span>
                            </div>
                        </section>
                    </section>

                    <div className="coffee-beans-bottom">
                        <Image src={coffeBeans} />
                    </div>
                </section>

                <section className="popular-now">
                    <h1 className="title">
                        Popular Now<span></span>
                    </h1>
                </section>
            </Container>
        </>
    );
};

const Container = styled.div`
    & .welcome {
        background: #f6ebda;
        width: 100%;
        height: 100vh;
        padding: 2em 8em;
        position: relative;
        z-index: 0;

        & .publi-image {
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
                        width: 10em;
                        height: 2.4em;
                        color: #f4ae26;
                        cursor: pointer;
                        font-weight: 600;
                        background-color: #fff;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 2em;
                        
                    }
                }
            }

            & .image-coffe {
                width: 50%;
                position: relative;
                z-index: 1;

                & .image {
                    position: absolute;
                    right: 0;
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
                    position: absolute;
                    right: 0;
                    width: 26em;
                    height: 26em;
                    padding: 3em;

                    & .name {
                        position: absolute;
                        left: -2em;
                        top: 1em;
                        color: #2f2105;
                        font-size: 24px;
                        font-weight: 600;
                        background-color: #fff;
                        padding: 0.5em 2em;
                        border-radius: 3em;
                        box-shadow: 0px 0px 0px 10px #ffffff60;
                    }

                    & .rate {
                        display: flex;
                        align-items: center;
                        gap: 1px;
                        position: absolute;
                        right: -0.5em;
                        top: 3.5em;
                        color: #2f2105;
                        font-size: 24px;
                        font-weight: 600;
                        background-color: #fff;
                        padding: 0.5em 1.5em;
                        border-radius: 3em;
                        box-shadow: 0px 0px 0px 10px #ffffff60;

                        & div img {
                            display: block;
                        }
                    }

                    & .buys {
                        position: absolute;
                        bottom: 2em;
                        left: 0;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: #2f2105;
                        font-size: 24px;
                        font-weight: 600;
                        background-color: #fff;
                        padding: 0.5em 2em;
                        border-radius: 3em;
                        box-shadow: 0px 0px 0px 10px #ffffff60;
                    }
                }
            }
        }

        & .coffee-beans-bottom {
            position: absolute;
            left: 0;
            bottom: 0;
            z-index: -1;
        }
    }

    & .popular-now {
      position: relative;

      & .title {
        font-size: 2em;
        letter-spacing: 1.28px;
        position: relative;
        display: inline-block;

        & span {
          position: absolute;
          top: 85%;
          right: 0;
          width: 2.5em;
          height: 2px;
          background-color: #ff902b;
          border-radius: 12px;
        }
      }
    }
`;

export default MainPage;
