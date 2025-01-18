import profilePicture from '../assets/me.jpeg'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBitcoin } from "react-icons/fa";
import "../styles/Header.css"
function Header() {
  return (
    <header>
      <div className='header-jumbotron'>
        <img src={profilePicture}/>
        <h2>Muhammad Dausyaf</h2>
        <p>Programmer - What - What</p>
        <div className='socialMedia'>
          <a href="https://www.instagram.com/dusyaf_" target='_blank'><FaInstagram /></a>
          <a href=""><FaGithub /></a>
          <a href=""><FaBitcoin /></a>
        </div>
      </div>
    </header>
  )
}

export default Header