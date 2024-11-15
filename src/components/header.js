import React from './header.css';
import Logo from "./logo_dark.png";
import { IoLocationSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

function header() {
  return (
    <div>
      <header>
        <div className="header_home">
        <img src={Logo} alt="" />
        <div className="select">
        <select name="" id="">
            <option value=""><IoLocationSharp /> Казань</option>
        </select>
        <button className='katalog'>Каталог</button>
        </div>
        </div>
        <div className="ul">
        <ul>
            <li>Частые вопросы</li>
            <li>Сотрудничество</li>
        </ul>
        <div className="btn2">
          <div className="btn3">
        <button className='heart_btn'><CiHeart className='heart' /></button>
        <button className='search_btn'><CiSearch className='search' /> Поиск по названию</button>
          </div>
        <button className='search_btn'><FaPhoneAlt className='search' /> Поиск по названию</button>
        </div>
        </div>
      </header>
    </div>
  )
}

export default header
