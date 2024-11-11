import "./Contact.scss"

const Contact = () => {
  return (
    <div className="contact">
        <div className="title">
            <hr />
            <h1>Contact<span className="green-text">.</span></h1>
            <hr />
        </div>
        <div className="desc">
        <span className="contact-me">
        Shoot me an <a href="mailto:andriantambunan2752@gmail.com" target="blank">email</a> if you want to connect! <br />
          You can also find me on <a href="https://www.linkedin.com/in/andriantambunan/"target="blank">LinkedIn</a> if that's more your speed.
        </span>

        </div>
        <div className="last-word">
          <img src="/mail.svg" alt="" />
          <a href="mailto:andriantambunan2752@gmail.com"target="blank">andriantambunan2752@gmail.com</a>
        </div>
    </div>
  )
}

export default Contact