import "./about.scss";

const About = () => {
  const workSkills = [
    "JavaScript",
    "PHP",
    "HTML",
    "CSS",
    "React",
    "PostgreSQL",
    "MongoDB",
    "Github",
    "Kotlin",
    "Laravel",
  ];
  const funSkills = [
    "Figma",
    "Tailwind",
    "Java",
    "C programming",
    "Python",
    "Illustrator",
  ];

  return (
    <>
      <div className="about">
        {/* <div className="wrapper"> */}
        <div className="title">
        {/* <hr className="garis2"/> */}
          <h1>
            About<span className="green-about-text">.</span>
          </h1>
          <hr className="garis1"/>
        </div>
        {/* </div> */}
        <div className="grid-container">
          <div className="description">
            <p>
              My name is Drian. I'm an UI/UX Designer turned software engineer
              from Medan, North Sumatera. I specialize in the Fullstack
              Developer, primarily React and Laravel, but love building with
              whatever tools are right for the job.
            </p>
            <p className="hapus">
              I currently running a course on Bangkit Academy led by Google.
              {/* {" "} */}
            </p>
            <p className="hapus">
              Outside of lectures, I love reading books. I'm passively looking
              for new positions where I can merge my love for code with my love
              to read. If you think you've got an opening that I might like,
              let's connect 🔗
            </p>
            {/* <br /> */}
          </div>
          <div className="work">
            <div className="work-container">
              <div className="work-title">
                <a href="#">
                  <img src="/code.svg" alt="" />
                </a>
                <h3>Use at work</h3>
              </div>
              <div className="work-skill">
                {workSkills.map((workSkills, index) => {
                  return (
                    <span key={index} className="workSkills">
                      {workSkills}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="fun">
            <div className="fun-container">
              <div className="fun-title">
                <a href="#">
                  <img src="/smile.svg" alt="" />
                </a>
                <h3>Use for fun</h3>
              </div>
              <div className="fun-skill">
                {funSkills.map((funSkills, index) => {
                  return (
                    <span key={index} className="funSkills">
                      {funSkills}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
