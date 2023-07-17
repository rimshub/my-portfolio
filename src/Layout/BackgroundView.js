import React from 'react'
import Particles from "react-particles";
import { loadFull } from "tsparticles";

function BackgroundView({ children }) {

    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <div id="particles-js">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fpsLimit: 120,
                    interactivity: {

                        modes: {
                            push: {
                                quantity: 4
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4
                            }
                        }
                    },
                    particles: {
                        color: {
                           
                            value: "#ec6e59",
                            
                        },
                        links: {
                           
                            color: "#ec6e59",
                            distance: 150,
                            enable: true,
                            opacity: 0.3,
                            width: 1
                        },
                        collisions: {
                            enable: true
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce"
                            },
                            random: true,
                            speed: 2,
                            straight: true
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 900
                            },
                            value: 80
                        },
                        opacity: {
                            value: 0.5
                        },
                        shape: {
                            type: "circle"
                        },
                        size: {
                            value: { min: 1, max: 3 }
                        }
                    },
                    detectRetina: true
                }}
            />
            {children}
        </div >
    )
}

export default BackgroundView