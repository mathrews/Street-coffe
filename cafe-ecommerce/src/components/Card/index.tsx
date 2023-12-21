import styled from "styled-components";
import starIcon from "../../assets/akar-icons_star.svg";
import vannilaCoffe from "../../assets/vannila.svg";

const Card = () => {
    return (
        <>
            <Container>
                <div className="image">
                    <span className="rate">
                        4.8
                        <div>
                            <img src={starIcon} alt="star-avaliation" />
                        </div>
                    </span>
                    <img className="coffeImage" src={vannilaCoffe} alt="" />
                </div>

                <div className="initial-infos">
                    <div className="name-buys">
                        <h1 className="name">Coffe name</h1>
                        <h1 className="buys">21k</h1>
                    </div>

                    <div className="categorys-buy">
                        <div className="categorys">
                            <span>Hot</span>
                            <span>Cold</span>
                        </div>
                        <button className="buy">
                            <i className="pi pi-shopping-cart"></i>
                        </button>
                    </div>
                </div>
            </Container>
        </>
    );
};

const Container = styled.div`
    width: 21.5em;
    height: 23.5em;
    background-color: #fff;
    padding: 1em 1em;
    box-shadow: 0px 0px 0px 8px #ffffff60;
    border-radius: 0.5em;
    position: relative;
    display: block;
    text-align: center;
    box-shadow: 0px 0px 0px 4px #ffffff60, 1px 4px 15px 4px #00000040;


    & .image {
        display: block;
        position: relative;

        & .rate {
            display: flex;
            align-items: center;
            gap: 1px;
            position: absolute;
            top: 0.8em;
            left: 0.8em;
            color: #2f2105;
            font-size: 14px;
            font-weight: 700;
            background-color: #fff;
            padding: 0.3em 1em;
            border-radius: 3em;
            box-shadow: 0px 0px 0px 4px #ffffff60;

            & div img {
                display: block;
                width: 1em;
                height: 1em;
            }
        }

        & .coffeImage {
            border-radius: 0.8em;
        }
    }

    & .initial-infos {
        padding: 0.8em;

        & .name-buys {
            display: flex;
            justify-content: space-between;

            & .name {
                font-size: 24px;
                font-weight: 600;
            }

            & .buys {
                font-size: 24px;
                font-weight: 700;
            }
        }

        & .categorys-buy {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 0.8em;

            & .categorys {
                display: flex;
                gap: 1.5em;

                & span {
                    border: 2px solid #FF902B;
                    padding: 0.1em 0.6em;
                    border-radius: 8px;
                    color: #FF902B;
                    font-weight: 600;
                }
            }

            & .buy {
                cursor: pointer;
                padding: 0.8em;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                border: none;
                background-color: #FF902B;
                color: #fff;
                transition-duration: 200ms;

                &:hover {
                    background-color: #d16703;
                }
            }
        }
    }
`;

export default Card;
