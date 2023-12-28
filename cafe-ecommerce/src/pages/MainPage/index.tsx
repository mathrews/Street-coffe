import { Link } from "react-router-dom";
import styled from "styled-components";
import cartIcon from "../../assets/cart button.svg";
import coffee from "../../assets/unsplash_PKXAiiy1O4U.svg";
import starIcon from "../../assets/akar-icons_star.svg";
import Card from "../../components/Card";
import touchCoffe from "../../assets/touch-coffe.svg";
import coffeTruck from "../../assets/food-truck 1.svg";
import coffeCup from "../../assets/coffee-cup 2.svg";

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
                                <Link to={"/order"} className="order">
                                    Order now <img src={cartIcon} />
                                </Link>
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
                </section>

                <section className="popular-now">
                    <section className="container">
                        <h1 className="title">
                            Popular Now<span></span>
                        </h1>

                        <section className="ul-container">
                            <div className="ul-section">
                                <ul className="ul-options">
                                    <li>
                                        <Card />
                                    </li>
                                    <li>
                                        <Card />
                                    </li>
                                    <li>
                                        <Card />
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </section>
                </section>

                <section className="delivery-use">
                    <h1>
                        Hou to use delivery service<span></span>
                    </h1>

                    <ul>
                        <li>
                            <div>
                                <img src={touchCoffe} alt="touch coffe" />
                            </div>

                            <h3>choose your coffee</h3>
                            <p>there are 20+ coffees for you</p>
                        </li>
                        <li>
                            <div>
                                <img src={coffeTruck} alt="coffe truck" />
                            </div>

                            <h3>we delivery it to you</h3>
                            <p>Choose delivery service</p>
                        </li>
                        <li>
                            <div>
                                <img src={coffeCup} alt="coffe cup" />
                            </div>

                            <h3>Enjoy your coffee</h3>
                            <p>Choose delivery service</p>
                        </li>
                    </ul>
                </section>

                <section className="about-us">
                    
                </section>
            </Container>
        </>
    );
};

const Container = styled.div`
    position: relative;

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
                        height: 3em;
                        color: #f4ae26;
                        cursor: pointer;
                        background-color: #fff;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 2em;
                        border: none;
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
    }

    & .popular-now {
        position: relative;
        height: 40vh;
        width: 100%;

        & .container {
            position: absolute;
            bottom: 0;
            padding: 2em 8em;
            width: 100%;

            & .title {
                font-size: 2em;
                letter-spacing: 1.28px;
                position: relative;
                display: inline-block;
                margin-bottom: 3em;

                & span {
                    position: absolute;
                    top: 85%;
                    right: 0;
                    width: 2.5em;
                    height: 4px;
                    background-color: #ff902b;
                    border-radius: 12px;
                }
            }

            & .ul-container {
                width: 100%;
                height: 100%;

                & .ul-section {
                    margin-top: 2em;
                    background-color: #f9d9aa;
                    width: 100%;
                    height: 22.5em;
                    border-radius: 3em;
                    position: relative;
                    display: flex;
                    justify-content: center;

                    & .ul-options {
                        display: flex;
                        justify-content: space-between;
                        padding: 0em 4em;
                        position: absolute;
                        top: -25%;
                        gap: 3em;
                    }
                }
            }
        }
    }

    & .delivery-use {
        position: relative;
        padding: 2em 8em;
        margin-top: 2em;
        height: 60vh;
        width: 100%;

        & h1 {
            font-size: 2em;
            letter-spacing: 1.28px;
            position: relative;
            display: inline-block;
            
            & span {
                position: absolute;
                top: 85%;
                right: 0.39%;
                width: 4em;
                height: 4px;
                background-color: #ff902b;
                border-radius: 12px;
            }
        }

        & ul {
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding-top: 3em;

            & li {
                text-align: center;

                & div {
                    display: block;
                    padding-bottom: 0.5em;
                }

                & h3 {
                    padding-bottom: 0.3em;
                }
            }
        }
    }
`;

export default MainPage;
