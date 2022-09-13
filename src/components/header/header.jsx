import { useState } from 'react';
import './header.scss';


export function Header() {
  const [burger, setBurger] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a href="/" className="header__logo-link">
              <img className="header__logo" src="./images/logo-nootris.svg" alt="logo-nootris" />
            </a>
          </div>

          <div className="header__right">
            <nav className={`header__nav ${burger ? 'active' : ''}`}>
              <ul className='header__nav-list'>
                <li className="header__nav-item"><a href="/">FAQ</a></li>
                <li className="header__nav-item"><a href="/">Оплата и доставка</a></li>
                <li className="header__nav-item"><a href="/">Возврат</a></li>
                <li className="header__nav-item"><a href="/">Исследования</a></li>
                <li className="header__nav-item"><a href="/">Личный кабинет</a></li>
              </ul>
            </nav>

            <div className="header__contact">
              <a href="tel: 8 8 (880) 600-09-90" className="header__contact-tel">8 8 (880) 600-09-90</a>
              <a href="tel: 8 8 (880) 600-09-90" className="header__contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M16.9245 176588e-10C14.1521 176588e-10 11.6432 1.19992 9.82422 3.11978L11.154 4.533C11.9083 3.72599 12.8054 3.08552 13.7936 2.64847 14.7818 2.21142 15.8416 1.98641 16.912 1.98641 17.9823 1.98641 19.0421 2.21142 20.0303 2.64847 21.0185 3.08552 21.9157 3.72599 22.67 4.533L23.9998 3.11978C23.0728 2.12877 21.9703 1.34282 20.7559.807338 19.5415.271857 18.2393-.00253579 16.9245 176588e-10z" fill="#FFFFFF" />
                  <path d="M21.3656 5.94632C20.1853 4.6997 18.5888 4 16.9247 4 15.2607 4 13.6642 4.6997 12.4839 5.94632L13.8136 7.35955C14.604 6.51961 15.7079 5.98632 16.9122 5.98632 18.1165 5.98632 19.2204 6.50628 20.0108 7.35955L21.3656 5.94632zM15.1559 8.7861 16.9247 10.666 18.6936 8.7861C18.2419 8.29281 17.6147 7.9995 16.9247 7.9995 16.2348 7.9995 15.6075 8.29281 15.1559 8.7861z" fill="#FFFFFF" />
                  <path d="M21.5787 15.8254 16.9748 14.8522C16.3475 14.7189 15.9336 15.1188 15.8457 15.2122L12.6845 18.5452C9.54827 16.6387 6.9515 13.8789 5.1576 10.5459L8.29379 7.18611C8.58232 6.86614 8.70777 6.42617 8.6325 5.9862L7.69165 1.06658C7.57874.453298 7.06441.0 6.46226.0H1.25618C.553677.0-.0359266.626619.00170769 1.37323.214969 5.22626 1.31891 8.83932 3.05008 11.9991 5.03216 15.6388 7.87982 18.6519 11.292 20.7584 14.2651 22.5849 17.6647 23.7715 21.2902 23.9981 21.9801 24.0381 22.5823 23.4249 22.5823 22.6649V17.132C22.5823 16.4921 22.1558 15.9454 21.5787 15.8254zM2.63611 2.66646H5.43359L6.02319 5.79955 3.9784 7.99938C3.30098 6.26618 2.84937 4.49299 2.63611 2.66646zM20.0733 21.1984C18.3547 20.9584 16.6862 20.4918 15.0554 19.7718L17.1253 17.5986 20.0733 18.2253V21.1984z" fill="#FFFFFF" />
                  </svg>
              </a>
            </div>

            <div className={`header__burger ${burger ? 'active' : ''}`} onClick={() => setBurger(!burger)}>
              <span></span>
            </div>

            <div className='header__card'>
              <a href="/" className='header__card-basket'>
                <img src="./images/basket.svg" alt="card" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}