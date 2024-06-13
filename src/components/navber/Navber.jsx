import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"
import "./Navber.css"
import { TbBowlSpoon } from "react-icons/tb"
import { BsSunglasses } from "react-icons/bs"
import { IoIosHome } from "react-icons/io"
import { MdOutlineArrowDropDown } from "react-icons/md"

const Navber = () => {
  return (
    <div >
      <div className='main'>
        <div className="nav-container">
          <div className="logo">
            <img src="https://www.karachibakery.com/images/karachi-bakery-logo.png" alt="logo" />
          </div>
          <div className="nav-t-links">
            <div className="social-links">
              <ul>
                <li><FaFacebookF /></li>
                <li><FaTwitter /></li>
                <li><FaInstagram /></li>
                <li><FaYoutube /></li>
                <li><TbBowlSpoon /></li>
                <li><BsSunglasses /></li>
              </ul>
            </div>
            <div className="shop-online">
              <button>Shop online</button>
              <button>Karachi Virtual Tour</button>
            </div>
            <div className="about-links">
              <ul>
                <li><IoIosHome /></li>
                <li>About us</li>
                <li>Services</li>
                <li>Specialities</li>
                <li>Careers</li>
                <li>Enquiry</li>
                <li> Contact us</li>
                <li>Sitemap</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-b-links">
        <ul>
          <li>Biscuits <MdOutlineArrowDropDown size={25}/></li>
          <li>Gluten & SugerFree <MdOutlineArrowDropDown size={25}/></li>
          <li>Vegan Biscuits </li>
          <li>Cakes <MdOutlineArrowDropDown size={25}/></li>
          <li>Pastries</li>
          <li>Chocolates</li>
          <li>Cuo Cakes</li>
          <li>Snacks <MdOutlineArrowDropDown size={25}/></li>
          <li>Artisan Breads <MdOutlineArrowDropDown size={25}/></li>
          <li>Rusks</li>
          <li>Mithai</li>
          <li>Gift Packs</li>
          <li>New Arrivals</li>
        </ul>
      </div>
    </div>
  )
}

export default Navber