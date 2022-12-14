import * as THREE from "three";
import Experience from "../Experience.js";
import assets from "../Utils/assets.js";
import GSAP from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js"

export default class Controls {
    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.time = this.experience.time;
        this.camera = this.experience.camera;
        this.sizes = this.experience.sizes;
        this.room = this.experience.resources.items.room.scene;
        this.actualRoom = this.room.scene;

        this.circleFirst = this.experience.world.floor.circleFirst;
        this.circleSecond = this.experience.world.floor.circleSecond;
        this.circleThird = this.experience.world.floor.circleThird;
        this.circleFourth = this.experience.world.floor.circleFourth;

        GSAP.registerPlugin(ScrollTrigger);

        document.querySelector(".page").style.overflow = "visible";

        this.setScrollTrigger();
    }


    setScrollTrigger(){
        ScrollTrigger.matchMedia({
            // Desktop
            "(min-width: 969px)": ()=> {
                
                // Resets
                this.room.scale.set(1,1,1);
                this.room.position.set(0,0,0);

                // First section move
                this.firstMoveTimeline = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: ".first-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                    },
                });
                this.firstMoveTimeline.fromTo(this.room.position,
                    {x: 0, y: 0, z: 0},
                    {x: () => {
                        return this.sizes.width * 0.0065;
                    },
                    y: 3,
                });

                 // Second section move
                 this.secondMoveTimeline = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: ".second-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                    },
                });
                this.secondMoveTimeline.to(this.room.position, {
                    x: () => {
                        return this.sizes.width * 0.003;
                    },
                    z: () => {
                        return this.sizes.height * 0.033;
                    },

                },
                "same", 
                );
                this.secondMoveTimeline.to(this.room.scale, {
                    x: 4,
                    y: 4,
                    z: 4,
                },
                "same", 
                );

                // Third section move
                this.thirdMoveTimeline = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: ".third-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                    },
                });
                this.thirdMoveTimeline.to(this.room.position, {
                    x: () => {
                        return 1.1;
                    },
                    z: () => {
                        return this.sizes.height * 0.02;
                    },
                },
                "same", 
                );

                this.thirdMoveTimeline.to(this.room.scale, {
                    y: 3,
                    z: 3,
                    x: 3,
                },
                "same",
                );

                // Fourth section move
                this.fourthMoveTimeline = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: ".fourth-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                    },
                });
                this.fourthMoveTimeline.to(this.room.position, {
                    x: () => {
                        return -this.sizes.width * 0.0065;
                    },
                    y: 3,
                    z: 0,
                },
                "same", 
                ).to(this.room.scale, {
                    y: 1,
                    z: 1,
                    x: 1,
                },
                "same",
                );
            },

            // Mobile
            "(max-width: 968px)": ()=> {
                
                // Resets
                this.room.scale.set(0.7,0.7,0.7);
                this.room.position.set(0,2,0);

                // First section move
                this.firstMoveTimeline = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: ".first-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                    },
                }).fromTo(this.room.scale, {
                    x: 0.7,
                    y: 0.7,
                    z: 0.7,
                }, {
                    x: 1,
                    y: 1,
                    z: 1,
                }, "same"
                ).fromTo(this.room.position, {
                    x: 0,
                    y: 2,
                    z: 0,
                }, {
                    x: 0,
                    y: 5,
                    z: 0,
                }, "same"
                );

                // Second section move
                this.secondMoveTimeline = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: ".second-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                    },
                }).to(this.room.scale, {
                    x: 3.3,
                    y: 3.3,
                    z: 3.3,
                },"same",
                ).to(this.room.position, {
                    x: 8,
                    y: 3,
                    z: 9,
                },"same",);

                // Third section move
                this.thirdMoveTimeline = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: ".third-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                    },
                }).to(this.room.scale, {
                    x: 2.5,
                    y: 2.5,
                    z: 2.5,
                },"same",
                ).to(this.room.position, {
                    x: -6,
                    y: 3,
                    z: 9,
                },"same",);

                // Fourth section move
                this.fourthMoveTimeline = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: ".fourth-move",
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                    },
                }).to(this.room.scale, {
                    x: 1,
                    y: 1,
                    z: 1,
                },"same",
                ).to(this.room.position, {
                    x: 0,
                    y: 4,
                    z: 0,
                },"same",);
            },

            // all
            all: () => {
                this.sections = document.querySelectorAll(".section");
                this.sections.forEach(section=>{
                    this.progressWrapper = section.querySelector(".progress-wrapper");
                    this.progressBar = section.querySelector(".progress-bar");

                    if(section.classList.contains("right")) {
                        GSAP.to(section, {
                            borderTopLeftRadius: 10,
                            scrollTrigger: {
                                trigger: section,
                                start: "top bottom",
                                end: "top top",
                                scrub: 0.9,
                            },
                        });
                        GSAP.to(section, {
                            borderBottomLeftRadius: 700,
                            scrollTrigger: {
                                trigger: section,
                                start: "bottom bottom",
                                end: "bottom top",
                                scrub: 0.9,
                            },
                        });
                    } else {
                        GSAP.to(section, {
                            borderTopRightRadius: 10,
                            scrollTrigger: {
                                trigger: section,
                                start: "top bottom",
                                end: "top top",
                                scrub: 0.9,
                            },
                        });
                        GSAP.to(section, {
                            borderBottomRightRadius: 700,
                            scrollTrigger: {
                                trigger: section,
                                start: "bottom bottom",
                                end: "bottom top",
                                scrub: 0.9,
                            },
                        });
                    }

                    GSAP.from(this.progressBar, {
                        scaleY: 0,
                        scrollTrigger: {
                            trigger: section,
                            start: "top top",
                            end: "bottom bottom",
                            scrub: 0.4,
                            pin: this.progressWrapper,
                            pinSpacing: false,
                        }
                    })
                });

            // Circle Animation
            this.firstCircleTimeline = new GSAP.timeline({
                scrollTrigger: {
                    trigger: ".first-move",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 0.6,
                    invalidateOnRefresh: true,
                },
            }).to(this.circleFirst.scale, {
                x: 10,
                y: 10,
                z: 10,
            })

            this.secondCircleTimeline = new GSAP.timeline({
                scrollTrigger: {
                    trigger: ".second-move",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 0.6,
                    invalidateOnRefresh: true,
                },
            }).to(this.circleSecond.scale, {
                x: 10,
                y: 10,
                z: 10,
            })

            this.thirdCircleTimeline = new GSAP.timeline({
                scrollTrigger: {
                    trigger: ".third-move",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 0.6,
                    invalidateOnRefresh: true,
                },
            }).to(this.circleThird.scale, {
                x: 10,
                y: 10,
                z: 10,
            })

            this.fourthCircleTimeline = new GSAP.timeline({
                scrollTrigger: {
                    trigger: ".fourth-move",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 0.6,
                    invalidateOnRefresh: true,
                },
            }).to(this.circleFourth.scale, {
                x: 10,
                y: 10,
                z: 10,
            })

            }


        });
    }

    resize(){

    }

    update(){

    }
}