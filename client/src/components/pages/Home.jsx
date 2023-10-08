/* eslint-disable react/no-unescaped-entities */
import { Canvas } from "@react-three/fiber";
import { Model } from "../Scene";
import { useEffect, useState } from "react";

const Home = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="home">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 home_left">
                        <h1>Integration of space and ecology</h1>
                    </div>
                    <div className="col-lg-6">
                        <Canvas style={{ height: isMobile ? '400px' : '90vh', marginLeft: isMobile ? '0' : '200px' }} gl={{ antialias: true }}>
                            <Model />
                        </Canvas>
                    </div>
                </div>


                <section className="our_purposes">
                    <h2>Our Purposes</h2>
                    <div className="row g-5">
                        <div className="col-lg-4">
                            <div className="card_container">
                                <div className="imgcont">
                                    <img src="/assets/ecoevent.jpg" alt="" />
                                </div>
                                <p>
                                    Encourage people to protect environment
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card_container">
                                <div className="imgcont">
                                    <img src="/assets/ecoevent2.jpg" alt="" />
                                </div>
                                <p>
                                    Arouse people's interest in space
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card_container">
                                <div className="imgcont">
                                    <img src="/assets/ecoevent3.jpg" alt="" />
                                </div>
                                <p>
                                    Create a world-wide Eco-Space community
                                </p>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="charts">
                    <h2>Some Interesting Facts</h2>
                    <div className="row g-5">
                        <div className="col-lg-6">
                            <div className="chart_container topdiv">
                                <div className="imgcont">
                                    <img className="sekil" src="/assets/chart1.png" alt="" />
                                </div>
                                <p className="txt">
                                    According to research findings, the success rate of trees that are voluntarily planted is reported at 70%, while trees that are involuntarily planted exhibit a success rate of 30%.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="chart_container">
                                <div className="imgcont">
                                    <img src="/assets/chart2.png" alt="" />
                                </div>
                                <p>
                                    When 1 kg of garbage is cleaned from the sea, approximately 30-50 fish are saved.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Home