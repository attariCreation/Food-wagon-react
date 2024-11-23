import React from "react";
import Img1 from "../../assets/images/50f47f76753ee038bd196d880d9316f8.png"
import Img2 from "../../assets/images/icons/pay advanced.svg"
import Img3 from "../../assets/images/icons/choose order.svg"
import Img4 from "../../assets/images/icons/enjoy meals.svg"
import Img5 from "../../assets/images/piza.svg"
import Img6 from "../../assets/images/burger.svg"
import Img7 from "../../assets/images/Image.svg"
import Img8 from "../../assets/images/Image-1.svg"
import Img9 from "../../assets/images/Image-2.svg"
import Img10 from "../../assets/images/Image-3.svg"
const Main = () => {
    return(
        <>
         <main>
            <section
                className="hero d-flex flex-row justify-content-around row gx-1">

                <div className="left col col-xl-5 mx-auto align-items-left ">
                    <div id="text">
                        <h2>Are You Starving ?</h2>
                        <p>Within a few clicks, find meals that are accessible
                            near you </p>
                    </div>

                    <form className="d-flex flex-column">
                        <div id="btns">
                            <a href="#" className="active">

                                <i className="ri-e-bike-2-fill"></i>
                                Delivery

                            </a>
                            <a href="#">
                                <i className="ri-shopping-bag-fill"></i>
                                pickup
                            </a>
                        </div>
                        <hr />

                        <div id="input" className="d-flex">

                            <div id="address">
                                <i className="ri-map-pin-2-line"></i>

                                <input type="text"
                                    placeholder="Enter Your Address"/>
                            </div>

                            <div id="food">
                                <i className="ri-search-line"></i>
                                Find Food
                            </div>
                        </div>

                    </form>

                </div>

                <div className="right col col-xl-5">
                    <img
                        src={Img1}
                        alt/>

                </div>

            </section>

            <section id="information">

                <div id="container"
                    className="d-flex flex-column align-items-center justify-content-center">
                    <div id="top">
                        <h2>how does it work ?</h2>
                    </div>
                    <div id="btm" className>
                        <span>

                            <i className="ri-map-pin-line"></i>
                            <span className="sub-heading">
                                Select Location
                            </span>
                            <p> Choose the location where your food will be
                                delivered</p>
                        </span>
                        <span>
                            <img src={Img3}
                                alt/>
                            <span className="sub-heading">
                                Choose order
                            </span>
                            <p> Choose the location where your food will be
                                delivered</p>
                        </span>
                        <span>
                            <img src={Img2}
                                alt/> <span className="sub-heading">
                                Pay Avanced
                            </span>
                            <p> Choose the location where your food will be
                                delivered</p>
                        </span>
                        <span>
                            <img src={Img4}
                                alt/>
                            <span className="sub-heading">
                                Enjoy Meals
                            </span>
                            <p> Choose the location where your food will be
                                delivered</p>
                        </span>

                    </div>
                </div>

            </section>

            <section id="food">

                <div className="container">

                    <div id="top" className="row">
                        <figure className="col col-2">
                            <img src={Img5} alt/>
                            <figcaption>Pizza</figcaption>
                        </figure>
                        <figure className="col col-2">
                            <img src={Img6} alt/>
                            <figcaption>Burger</figcaption>
                        </figure>
                        <figure className="col col-2">
                            <img src={Img7} alt/>
                            <figcaption>Noodles</figcaption>
                        </figure>
                        <figure className="col col-2">
                            <img src={Img8} alt/>
                            <figcaption>Sub-Sandwitch</figcaption>
                        </figure>
                        <figure className="col col-2">
                            <img src={Img9} alt/>
                            <figcaption>Chowmein</figcaption>
                        </figure>
                        <figure className="col col-2">
                            <img src={Img10} alt/>
                            <figcaption>Steak</figcaption>
                        </figure>

                    </div>
                    <div id="btm">
                        <h3>Search by Food</h3>
                        <div id="sliders">
                            <a href="#">
                                View All
                                <i className="ri-arrow-right-line"></i>
                            </a>
                            <i className="ri-arrow-left-fill"></i>
                            <i className="ri-arrow-right-fill"></i>
                        </div>
                    </div>

                </div>

            </section>

        </main>
        </>
    )
}

export default Main;