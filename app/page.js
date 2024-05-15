/* eslint-disable react/jsx-key */
"use client";
import { createContext, useState } from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ReactSwitch from "react-switch";
import style from "./style.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Animation on Scrolls react reveal
import Fade from "react-reveal/Fade";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/swiper-bundle.css";
import { metadata } from "./layout";

export const ThemeContext = createContext(null);

export default function Page() {
  const imgProf = {
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
    position: "absolute",
    bottom: "0.8rem",
    right: "0.8rem",
  };

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={style.MainContainer} id={theme}>
        {/* Navbar */}
        <div className="navbar">
          <ReactSwitch onChange={toggleTheme} checked={theme === "light"} />
          <div className="teks">
            <Link href="#about">About</Link>
            <Link href="#skill">Skills</Link>
            <Link href="#project">Projects</Link>
          </div>
        </div>

        {/* Header */}
        <div className="headerContainer">
          <div class="custom-shape-divider-bottom-1694916749">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
          <Fade top>
            <div className="pp">
              {/* <p className="strong">SAMUEL</p>
              <p className="strong1">SAMUEL</p>
              <p className="strong2">SAMUEL</p>
              <p className="strong3">SAMUEL</p> */}
              <Image
                src={"/hd-pp.png"}
                width={180}
                height={170}
                alt="profile photo"
                style={{
                  borderRadius: "50%",
                  filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                }}
              />
              <h1>Samuel Andhika Prasetyo</h1>
              <p>
                <span>Front</span>-End Developer
              </p>
              <div className="switch">
                <label>{theme === "dark" ? "Dark Mode" : "Light Mode"}</label>
                <ReactSwitch
                  onChange={toggleTheme}
                  checked={theme === "light"}
                />
              </div>
            </div>
            <div className="scrolls">
              <div className="line"></div>
              <p>Scrolls</p>
            </div>
          </Fade>
        </div>

        {/*============= About =============*/}
        <div className="aboutContainer" id="about">
          <div className="number">
            <h1>01</h1>
            <div className="line"></div>
          </div>
          <div className="adjust">
            <Fade bottom cascade>
              <div className="left">
                <div className="imgBorder">
                  <Image
                    style={imgProf}
                    className="img"
                    src={"/profile2.png"}
                    width={353}
                    height={675}
                    alt="img"
                  />
                </div>
              </div>
              <div className="right">
                <div className="teks">
                  <div className="discover">
                    <p>Discover</p>
                    <div className="line"></div>
                  </div>
                  <div className="about">
                    <h1>About Me</h1>
                    <p>
                      Hello, my name is Samuel Andhika Prasetyo. I am currently
                      a grade 12 student of the Software and Game Development
                      Skills Program at SMK Wikrama Bogor. I am currently
                      developing my skills in Front End Development. I also
                      learning to use the Javascript programming language and
                      laravel framework at the moment. I still a beginner in
                      this field, but I will continue to learn until I master it
                      to achieve my dream.
                    </p>
                    <div className="circle1"></div>
                    <div className="circle2"></div>
                  </div>
                </div>
                <div className="boxProfile">
                  <div className="left">
                    <p>Name: Samuel Andhika Prasetyo</p>
                    <p>Phone: +62 812 7292 9203</p>
                    <p>Occupation: Student</p>
                    <p>Instagram: samuel.andika</p>
                  </div>
                  <div className="right">
                    <p>Age: 17</p>
                    <p>Address: Belitung Timur, Indonesia</p>
                    <p>-</p>
                    <p>-</p>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>

        {/*============= Skills =============*/}
        <div className="skillContainer" id="skill">
          <Fade bottom cascade>
            <div className="number">
              <h1>02</h1>
              <div className="line"></div>
            </div>
            <div className="title">
              <h1>
                S<span>K</span>ILLS
              </h1>
            </div>
          </Fade>
          <Fade left cascade>
            <div className="skills">
              <Swiper
                modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                loop={true}
                spaceBetween={30}
                slidesPerView={3}
                autoplay={{
                  delay: 2000,
                }}
                navigation
                pagination={true}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                style={{
                  margin: "0 6rem",
                }}
              >
                <SwiperSlide className="slide">
                  <Image
                    className="img"
                    src={"/html2.png"}
                    width={156}
                    height={163}
                    alt="img"
                  />
                  <p>HTML</p>
                </SwiperSlide>
                <SwiperSlide className="slide">
                  <Image
                    className="img"
                    src={"/css2.png"}
                    width={156}
                    height={163}
                    alt="img"
                  />
                  <p>CSS</p>
                </SwiperSlide>
                <SwiperSlide className="slide">
                  <Image
                    className="img"
                    src={"/laravel.png"}
                    width={156}
                    height={163}
                    alt="img"
                  />
                  <p>Laravel</p>
                </SwiperSlide>
                <SwiperSlide className="slide">
                  <Image
                    className="img"
                    src={"/nextjs-icon.png"}
                    width={156}
                    height={163}
                    alt="img"
                    style={{
                      marginTop: "3rem",
                      marginBottom: "2rem",
                    }}
                  />
                  <p>Next Js</p>
                </SwiperSlide>
                <SwiperSlide className="slide">
                  <Image
                    className="img"
                    src={"/nuxtjs.png"}
                    width={156}
                    height={163}
                    alt="img"
                  />
                  <p>Nuxt Js</p>
                </SwiperSlide>
                <SwiperSlide className="slide">
                  <Image
                    className="img"
                    src={"/react.png"}
                    width={156}
                    height={163}
                    alt="img"
                  />
                  <p>React</p>
                </SwiperSlide>
                <SwiperSlide className="slide">
                  <Image
                    className="img"
                    src={"/vue.png"}
                    width={156}
                    height={163}
                    alt="img"
                  />
                  <p>Vue Js</p>
                </SwiperSlide>
                ...
              </Swiper>
            </div>
          </Fade>
        </div>

        {/*============= Projects =============*/}
        <div className="projectContainer" id="project">
          <Fade left cascade>
            <div className="number">
              <div className="dummy"></div>
              <div className="bookmark"></div>
              <div className="adjust">
                <h1>03</h1>
                <div className="line"></div>
              </div>
            </div>
            <div className="title">
              <h1>
                PR<span>O</span>JECTS
              </h1>
            </div>
            <div className="projects">
              <Swiper
                modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                loop={true}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={true}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                style={{
                  margin: "0 8rem",
                }}
              >
                <SwiperSlide className="slide">
                  <div className="card">
                    <div className="img"
                    ></div>
                    <div className="bookmark">
                      <div className="labels"></div>
                    </div>
                    <div className="box">
                      <h1>Article</h1>
                      <p>
                        Nullam ullamcorper urna in arcu condimentum, imperdiet
                        auctor quam consequat. Aenean efficitur leo leo, nec
                        interdum ipsum dapibus sit amet. Donec non tincidunt
                        orci, et lobortis sem. Phasellus at nulla sem. In mattis
                        et dui et facilisis. Quisque mollis vulputate lorem,
                        sollicitudin ultrices lectus. Nunc volutpat eros ut
                        cursus feugiat.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                  <div className="card">
                    <div className="img2"
                    ></div>
                    <div className="bookmark">
                      <div className="labels"></div>
                    </div>
                    <div className="box">
                      <h1>Plants Report</h1>
                      <p>
                        Nullam ullamcorper urna in arcu condimentum, imperdiet
                        auctor quam consequat. Aenean efficitur leo leo, nec
                        interdum ipsum dapibus sit amet. Donec non tincidunt
                        orci, et lobortis sem. Phasellus at nulla sem. In mattis
                        et dui et facilisis. Quisque mollis vulputate lorem,
                        sollicitudin ultrices lectus. Nunc volutpat eros ut
                        cursus feugiat.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </Fade>
        </div>
        <div className="copyright">
          <p>Copy Right © 2023 Samuel Andhika Prasetyo</p>
        </div>


        <div className="Test">
          
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
