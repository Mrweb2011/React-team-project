import React from '../style/menupage.css';
import Photo1 from "../components/photo 1.png";
import Photo2 from "../components/photo 2.png";
import Photo3 from "../components/photo 3.png";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaVk } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFilePen } from "react-icons/fa6";
import { FaHeadphones } from "react-icons/fa6";
import { BsPersonHeart } from "react-icons/bs";
import { IoIosStarOutline } from "react-icons/io";
import Img1 from "../components/img.png";
import Img2 from "../components/img (1).png";
import Img3 from "../components/img (2).png";
import Img4 from "../components/img (3).png";
import Img5 from "../components/img (4).png";
import Img6 from "../components/img (5).png";
import { LuBedSingle } from "react-icons/lu";
import { PiFlowerTulipDuotone } from "react-icons/pi";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";

function menu_page() {
  return (
    <div>
      <div className="header_card">
        <div className="text">
        <h1>Аренда коттеджей <br />и домов в Казани</h1>
        <h3>Найдите идеальный вариант сами <br />или предоставьте это нам</h3>
        <div className="photos">
          <button><FaAngleLeft /></button>
          <div className="photos_2">
          <div className="photo_1">
          <img src={Photo1} alt="" />
          <h4>С бассейном</h4>
          </div>
          <div className="photo_2">
          <img src={Photo2} alt="" />
          <h4>Семейные <br />и уютные</h4>
          </div>
          <div className="photo_3">
          <img src={Photo3} alt="" />
          <h4>Хиты продаж</h4>
          </div>
          </div>
          <button><FaAngleRight /></button>
        </div>
        <div className="icons">
          <button><AiOutlineYoutube /></button>
          <button><FaInstagram /></button>
          <button><FaVk /></button>
          <button><FaWhatsapp /></button>
          <button><FaTelegramPlane /></button>
        </div>          
        </div>
        <div className="input">
          <div className="inputs_1">
          <div className="inp1">
          <h3>Въезд</h3>
          <input type="text" placeholder='От' />
          </div>
          <hr />
          <div className="inp2">
          <h3>Отъезд</h3>
          <input type="text" placeholder='До' />
          </div>
          </div>
          <h3>Количество человек</h3>
          <input className='input_3' type="number" placeholder='12' />
          <div className="btn">
          <div className="range">
            <div className="line">
            </div>

            <div className="divs">
            <div className="div_1">
            <div className="div1">
            </div>
            <div className="div1_text">
              <h3>13 000 ₽</h3>
            </div>
            </div>
            <div className="div_2">
            <div className="div2">
            </div>
            <div className="div2_text">
              <h3>150 000 ₽</h3>
            </div>
            </div>
            </div>
          </div>
          <button>Найти</button>          
          </div>
        </div>
      </div>
      <div className="cards_1">
        <h1>О нас</h1>
        <div className="cards_2">
        <div className="card_1">
          <button><FaFilePen /></button>
          <h4>Работаем с юридическими <br />и физическими лицами</h4>
        </div>
        <div className="card_1">
          <button><FaHeadphones /></button>
          <h4>Бесплатный подбор, честные <br />консультации и открытость <br />к сотрудничеству</h4>
        </div>
        <div className="card_1">
          <button><BsPersonHeart /></button>
          <h4>Работаем с 2014 года. Консультируем <br />30-80 человек в сутки, заселяем от 3 <br />до 5 компаний в день. Помогли более <br />21 000 клиентам</h4>
        </div>
        <div className="card_1">
          <button><IoIosStarOutline /></button>
          <h4>Средний рейтинг компании 4,5 из 5 <br />(Avito, Google, Отзовик)</h4>
        </div>
        </div>
      </div>
      <div className="cards_3">
        <h1>Популярное в каталоге</h1>
        <div className="cards_3_1">
          <div className="card_3_1">
            <img src={Img1} alt="" />
            <div className="heart">
              <h1><CiHeart className='heart_icon' /></h1>
            </div>
            <h2 className='h2_1'>Новая сосновка</h2>
            <h3 className="h3_1"><LuBedSingle className='icon' /> 5 спальных мест</h3>
            <h3 className="h3_1">Настольный теннис</h3>
            <h3 className="h3_1"><PiFlowerTulipDuotone className='icon' /> Баня</h3>
            <h3 className="h3_1"><LiaSwimmingPoolSolid className='icon' /> Бассейн</h3>
            <div className="podrobni">
            <h2>от 10 000 ₽ / сутки </h2>
            <h3 className="button">Подробнее</h3>
            </div>
          </div>
          <div className="card_3_1">
            <img src={Img2} alt="" />
            <div className="heart">
              <h1><CiHeart className='heart_icon' /></h1>
            </div>
            <h2 className='h2_1'>Новая сосновка</h2>
            <h3 className="h3_1"><LuBedSingle className='icon' /> 5 спальных мест</h3>
            <h3 className="h3_1">Настольный теннис</h3>
            <h3 className="h3_1"><PiFlowerTulipDuotone className='icon' /> Баня</h3>
            <h3 className="h3_1"><LiaSwimmingPoolSolid className='icon' /> Бассейн</h3>
            <div className="podrobni">
            <h2>от 10 000 ₽ / сутки </h2>
            <h3 className="button">Подробнее</h3>
            </div>
          </div>
          <div className="card_3_1">
            <img src={Img3} alt="" />
            <div className="heart">
              <h1><CiHeart className='heart_icon' /></h1>
            </div>
            <h2 className='h2_1'>Новая сосновка</h2>
            <h3 className="h3_1"><LuBedSingle className='icon' /> 5 спальных мест</h3>
            <h3 className="h3_1">Настольный теннис</h3>
            <h3 className="h3_1"><PiFlowerTulipDuotone className='icon' /> Баня</h3>
            <h3 className="h3_1"><LiaSwimmingPoolSolid className='icon' /> Бассейн</h3>
            <div className="podrobni">
            <h2>от 10 000 ₽ / сутки </h2>
            <h3 className="button">Подробнее</h3>
            </div>
          </div>
        </div>
        <div className="cards_3_2">
          <div className="card_3_1">
            <img src={Img4} alt="" />
            <div className="heart">
              <h1><CiHeart className='heart_icon' /></h1>
            </div>
            <h2 className='h2_1'>Новая сосновка</h2>
            <h3 className="h3_1"><LuBedSingle className='icon' /> 5 спальных мест</h3>
            <h3 className="h3_1">Настольный теннис</h3>
            <h3 className="h3_1"><PiFlowerTulipDuotone className='icon' /> Баня</h3>
            <h3 className="h3_1"><LiaSwimmingPoolSolid className='icon' /> Бассейн</h3>
            <div className="podrobni">
            <h2>от 10 000 ₽ / сутки </h2>
            <h3 className="button">Подробнее</h3>
            </div>
          </div>
          <div className="card_3_1">
            <img src={Img5} alt="" />
            <div className="heart">
              <h1><CiHeart className='heart_icon' /></h1>
            </div>
            <h2 className='h2_1'>Новая сосновка</h2>
            <h3 className="h3_1"><LuBedSingle className='icon' /> 5 спальных мест</h3>
            <h3 className="h3_1">Настольный теннис</h3>
            <h3 className="h3_1"><PiFlowerTulipDuotone className='icon' /> Баня</h3>
            <h3 className="h3_1"><LiaSwimmingPoolSolid className='icon' /> Бассейн</h3>
            <div className="podrobni">
            <h2>от 10 000 ₽ / сутки </h2>
            <h3 className="button">Подробнее</h3>
            </div>
          </div>
          <div className="card_3_1">
            <img src={Img6} alt="" />
            <div className="heart">
              <h1><CiHeart className='heart_icon' /></h1>
            </div>
            <h2 className='h2_1'>Новая сосновка</h2>
            <h3 className="h3_1"><LuBedSingle className='icon' /> 5 спальных мест</h3>
            <h3 className="h3_1">Настольный теннис</h3>
            <h3 className="h3_1"><PiFlowerTulipDuotone className='icon' /> Баня</h3>
            <h3 className="h3_1"><LiaSwimmingPoolSolid className='icon' /> Бассейн</h3>
            <div className="podrobni">
              <h2>от 10 000 ₽ / сутки </h2>
              <h3 className="button">Подробнее</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default menu_page