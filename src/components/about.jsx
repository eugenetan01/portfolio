import React from "react";
import myImage from "../img/MyLogo.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: "Java",
          content: "Java",
          percentage: "90%",
          value: "90"
        },
        {
          id: "C-sharp",
          content: "C#",
          percentage: "90%",
          value: "90"
        },
        {
          id: "Java Springboot",
          content: "Java Springboot",
          percentage: "85%",
          value: "85"
        },
        {
          id: "Python_skill",
          content: "Python",
          percentage: "85%",
          value: "85"
        },
        {
          id: "FastAPI",
          content: "Python FastAPI",
          percentage: "85%",
          value: "85"
        },
        {
          id: "SQL",
          content: "SQL Relational Database",
          percentage: "85%",
          value: "85"
        },
        {
          id: "NoSQL",
          content: "NoSQL",
          percentage: "85%",
          value: "85"
        },
        {
          id: "C-sharp",
          content: ".NET Framework",
          percentage: "75%",
          value: "75"
        },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          percentage: "70%",
          value: "70"
        },
        {
          id: "AWS",
          content: "AWS",
          percentage: "70%",
          value: "70"
        },
        {
          id: "Microsoft Azure",
          content: "Microsoft Azure",
          percentage: "70%",
          value: "70"
        },
        {
          id: "R",
          content: "R",
          percentage: "70%",
          value: "70"
        },
        {
          id: "ReactJS",
          content: "ReactJS",
          percentage: "70%",
          value: "70"
        },
        { id: "PHP_skill", content: "PHP Laravel", percentage: "60%", value: "60" },

        {
          id: "HTML5",
          content: "HTML5",
          percentage: "60%",
          value: "60"
        },
        {
          id: "CSS",
          content: "CSS",
          percentage: "60%",
          value: "60"
        }

      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "Hi there, my name is Eugene. I’m an avid learner and technologist, primarily specialising in application development and server side API development. But at the same time, I’m working towards growing myself in the front-end stack, and building myself up as a Full Stack Engineer fluent across every part of the delivery chain."
        },
        {
          id: "second-p-about",
          content:
            "My core experience lies in Java, C#, RDBMS, Unix shell scripting, multithreading, deployment on various web hosting services and implementing REST-ful web services. I’ve worked on multiple Java Spring boot projects across my professional experience, and I’ve also worked on the Unity Engine using C# as well. Aside from that, I've been building up my expertise in front-end technologies like ReactJS and NextJS."
        },
        {
          id: "third-p-about",
          content:
            "In my free time, I’ve built a couple of APIs for my own pet projects. I’ve built these APIs using Python and NoSQL as well, so if you’d like, please check out my work below!"
        },
        {
          id: "fifth-p-about",
          content:
            "I’ve also had project experience and day to day involvement in designing system architecture landscapes within the Financial Industry under mentorship of Technology Architecture/Digital Enterprise Architecture Team. Through these experiences, I’ve had the opportunity to define solutions architecture with vendor technology teams as part of the architecture team to fit the bank’s digital enterprise landscape."
        },
        {
          id: "sixth-p-about",
          content:
            "I’d like to continue growing in this space of Solutions Architecture and software engineering, so please feel free to reach out below, I’d love to have a chat with you!"
        },
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="col-md-12">
                  <div className="title-box-2">
                    <div class="img-container">
                      <img src={myImage}></img>
                    </div>
                    <h5 className="title-a" style={{ textAlign: "center" }}>About Me</h5>
                    <div className="line-mf"></div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="skill-mf" style={{ paddingTop: "4px" }}>
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.percentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.percentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="about-me pt-4 pt-md-0">

                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
