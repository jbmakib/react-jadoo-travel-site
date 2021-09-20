import React from "react";
import "./Home.css";
import model from "../../images/model/banner-model.png";

const Home = () => {
    return (
        <section id="home" className="mb-5">
            <div className="container">
                <div
                    className="
                            d-flex
                            align-items-center
                            justify-content-between
                            row
                        "
                >
                    <div className="col-12 col-md-8 col-lg-6">
                        <p className="text-lightred">
                            BEST DESTINATIONS AROUND THE WORLD
                        </p>
                        <h1>Travel, enjoy and live a new and full life</h1>
                        <p className="text-muted">
                            Built Wicket longer admire do barton vanity itself
                            do in it. Preferred to sportsmen it engrossed
                            listening. Park gate sell they west hard for the.
                        </p>
                        <div className="d-flex flex-wrap align-items-center">
                            <a
                                role="button"
                                className="
                                        text-decoration-none text-white
                                        px-4
                                        py-3
                                        rounded-3
                                        btn-orange
                                        hover-big
                                    "
                                href="/"
                            >
                                Find out more
                            </a>
                            <a
                                role="button"
                                className="
                                        text-decoration-none
                                        d-flex
                                        align-items-center
                                        ms-4
                                        py-3
                                        hover-big
                                    "
                                href="/"
                            >
                                <i
                                    className="
                                            fas
                                            fa-play-circle
                                            text-lightred
                                            me-2
                                            fs-1
                                            animate__pulse
                                            animate__animated
                                            animate__infinite
                                        "
                                ></i>
                                <span className="text-dark"> Play Demo </span>
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 col-lg-6">
                        <img src={model} alt="" className="w-100" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
