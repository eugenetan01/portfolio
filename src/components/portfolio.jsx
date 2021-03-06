import React from "react";

//import stock
import plusminus from "../img/PlusMinus.png";
import learnhub from "../img/LearnhubPoster.png";
import remgisOverall from "../img/OverallREMGIS.png";
import remgis from "../img/REMGIS.png";
import remgis1 from "../img/REMGIS1.png";
import remgis2 from "../img/REMGIS2.png";
import remgis3 from "../img/REMGIS3.png";
import remgis4 from "../img/REMGIS4.png";
import bot1 from "../img/TranslatorBot2.png";
import bot from "../img/telegram-bot.jpg";
import CFLogo from "../img/CFLogo.png";
import CF1 from "../img/CF1.png";
import CF2 from "../img/CF2.png";
import CF3 from "../img/CF3.png";
import JPLogo from "../img/JPLogo.png";
import JP1 from "../img/JP1.png";
import JP2 from "../img/JP2.png";
import Gcal from "../img/google-calendar.png"

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  Please feel free to check out some of the stuff I've worked on!
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm d-flex">
              <div className="work-box">
                <a href={plusminus} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={plusminus} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">E-learning portal</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML/CSS C# .Net MSSQL Azure
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={learnhub}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <div className="work-content-new">
                  <div className="row">
                    <div className="col-sm-8">
                      <a href="https://wiki.smu.edu.sg/is480/IS480_Team_wiki:_2017T1_PlusMinus" className="w-ctegory" target="_blank"
                        rel="noopener noreferrer">View more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm d-flex">
              <div className="work-box">
                <a href={remgis} data-lightbox="gallery-aguadeluz">
                  <div className="work-img">
                    <img src={remgis} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Geospatial Analytics</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            HTML5 Javascript R-shiny R
                          </span>{" "}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>

                    </div>
                  </div>
                </a>
                <a
                  href={remgisOverall}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={remgis1}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={remgis2}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={remgis3}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={remgis4}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <div className="work-content-new">
                  <div className="row">
                    <div className="col-sm-8">
                      <a href="https://wiki.smu.edu.sg/1718t2is415g1/REMGIS_Proposal" className="w-ctegory" target="_blank"
                        rel="noopener noreferrer">View more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm d-flex">
              <div className="work-box">
                <a href={bot} data-lightbox="gallery-todo">
                  <div className="work-img">
                    <img src={bot} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Translator Chatbot</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Python MongoDB Heroku
                          </span>
                          {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={bot1}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                ></a>
                <div className="work-content-new">
                  <div className="row">
                    <div className="col-sm-8">
                      <a href="https://github.com/eugenetan01/TranslatorBot" className="w-ctegory" target="_blank"
                        rel="noopener noreferrer">View more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm d-flex">
              <div className="work-box">
                <a href={CFLogo} data-lightbox="gallery-medlingos">
                  <div className="work-img">
                    <img src={CFLogo} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">E-commerce Backend</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            GoogleAPI REST ReactJS NextJS
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={CF1}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={CF2}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={CF3}
                  data-lightbox="gallery-medlingos"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <div className="work-content-new">
                  <div className="row">
                    <div className="col-sm-8">
                      <a href="https://www.countlessfridays.com" className="w-ctegory" target="_blank"
                        rel="noopener noreferrer">View more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm d-flex">
              <div className="work-box">
                <a href={JPLogo} data-lightbox="gallery-smth">
                  <div className="work-img">
                    <img src={JPLogo} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Global E-commerce</h2>
                        <div className="w-more">
                          <span className="w-ctegory">HTML/CSS ReactJS PHP Laravel</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={JP1}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={JP2}
                  data-lightbox="gallery-smth"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <div className="work-content-new">
                  <div className="row">
                    <div className="col-sm-8">
                      <a href="https://www.josephprince.com" className="w-ctegory" target="_blank"
                        rel="noopener noreferrer">View more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm d-flex">
              <div className="work-box">
                <a href={Gcal} data-lightbox="gallery-mf">
                  <div className="work-img">
                    <img src={Gcal} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">GoogleCal Sync</h2>
                        <div className="w-more">
                          <span className="w-ctegory">Python FastAPI Heroku</span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <div className="work-content-new">
                  <div className="row">
                    <div className="col-sm-8">
                      <a href="https://github.com/eugenetan01/TimeTreeGCalSync" className="w-ctegory" target="_blank"
                        rel="noopener noreferrer">View more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    );
  }
}


export default Portfolio;
