import "./experience.scss"

const Experiences = () => {
    const myExperiences = [{
        company: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
        startDate: "Feb 2024",
        endDate: 2024,
        role: "Mobile Development Cohort",
        city: "Surabaya",
        desc: "Through this intensive program, I am honing my skills in mobile app development, mastering the latest frameworks, tools, and methodologies. Collaborating with industry experts and peers, I am actively engaged in real-world projects, applying my newfound knowledge to solve complex challenges and create innovative solutions. This apprenticeship is not just about acquiring technical proficiency; it's about fostering a growth mindset, cultivating teamwork, and embracing continuous learning.",
        skills: ["Kotlin", "SQL", "Machine Learning"]
    }, {
        company: "HTMC",
        startDate: "Mar 2024",
        endDate: 2024,
        role: "Head of Creative Design",
        city: "Surabaya",
        desc: "Conceptualized and designed eye-catching banners for a variety of events and promotional campaigns, contributing to the successful promotion and visibility of HMTC ITS activities",
        skills: ["Figma", "UI/UX", "Graphic Design", "Illustrator"]
    }, {
        company: "Sahabat Hewan",
        startDate: "Nov 2023",
        endDate: "Des 2023",
        role: "Full-Stack Developer",
        city: "Surabaya",
        desc: "Sahabat Hewan is a comprehensive website dedicated to providing pet owners with a one-stop platform for all their pet-related needs. From offering expert veterinary consultations via chat to facilitating the purchase of pet medications, Sahabat Hewan aims to be a trusted companion in ensuring the health and well-being of your pets. Additionally, the website provides valuable information and news updates on pet care, making it a valuable resource for all pet enthusiasts.",
        skills: ["Laravel", "PHP", "JavaScript", "SQL", "Tailwind"]
    }]


   return (
    <div className="experiences">
        <div className="title">
            <h1>Experiences<span className="green-text">.</span></h1>
            <hr />
        </div>
        {
            myExperiences.map((experience, index) => (
                <div key={index}>
                    <div className="experience-company">
                        <h3 className="company-name">{experience.company}</h3>
                        <span className="company-date">{experience.startDate} - {(experience.endDate === 2024)? "Present" : experience.endDate}</span>
                    </div>
                    <div className="experience-role">
                        <h4 className="role-detail">{experience.role}</h4>
                        <span className="role-city">{experience.city}</span>
                    </div>
                    <div className="experience-desc">
                        <p>{experience.desc}</p>
                    </div>
                    <div className="experience-skill">
                    {
                        experience.skills.map((skill, index) =>{
                            return(
                                <span key={index} className="skill-detail">{skill}</span>
                            )
                        })
                    }
                    </div>


                    
                    <hr />
                </div>
            ))
        }
        

    </div>
  )
}

export default Experiences