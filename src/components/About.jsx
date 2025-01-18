import "../styles/About.css"
import { SiSolidity } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
function About() {
  return (
    <section id="about">
      <div className="wrapper">
        <h3>About</h3>
        <p>Hello World</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti veritatis quas voluptatibus?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure consequatur incidunt, ea cum placeat est aperiam aliquid eos magni expedita?</p>
        <h4>Programming Language & Tools</h4>
        <div className="skills">
          <SiSolidity />
          <FaLaravel />
          <FaPhp />
        </div>
      </div>
    </section>
  )
}

export default About