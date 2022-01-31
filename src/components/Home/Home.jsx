import { useRef } from 'react'


//components
import Header from '../Header/Header'

//SASS
import './Home.scss'

//images
import calendar from '../../Assets/img/calendar.svg'
import direction_icon from '../../Assets/img/direction_icon.svg'
import online_icon from '../../Assets/img/online_icon.svg'
import offline_icon from '../../Assets/img/offline_icon.svg'
import person_icon from '../../Assets/img/person_icon.svg'
import arrow from '../../Assets/img/search_arrow.svg'
import isayev from '../../Assets/img/isaev.png'
import user_icon from '../../Assets/img/user.svg' 
import clock_icon from '../../Assets/img/clock.svg' 
import design_icon from '../../Assets/img/Design.svg' 
import eye_icon from '../../Assets/img/eye.svg' 
import presentation_icon from '../../Assets/img/user.svg' 
import reklama1 from '../../Assets/img/reklama1.png'
import reklama2 from '../../Assets/img/reklama2.png'


function Home() {

    const secondSearchClass = useRef()
    const actionSearchClass = useRef()
    const speakerClass = useRef()

    function secondSearch() {
        secondSearchClass.current.classList.toggle('search__second--active')
        actionSearchClass.current.classList.remove('search__action--active')
        speakerClass.current.classList.remove('search__speaker--active')
    }
    function action() {
        secondSearchClass.current.classList.remove('search__second--active')
        actionSearchClass.current.classList.toggle('search__action--active')
        speakerClass.current.classList.remove('search__speaker--active')
    }
    function speaker() {
        secondSearchClass.current.classList.remove('search__second--active')
        actionSearchClass.current.classList.remove('search__action--active')
        speakerClass.current.classList.toggle('search__speaker--active')
    }
    return (
        <>
            < Header />
            <main>
                <section className='search'>
                    <div className="container">
                        <h1 className='search__title'>Eng so'ngi master klasslar va tadbirlar bizning saytda</h1>
                        <form action="" className='search__form'>
                            <ul className='search__list'>
                                <li className='search__item'>
                                    <img className='search__icon' src={calendar} alt="calendar" />
                                    <p className='search__text'>22 / 02 / 2022</p>
                                    <img className='search__arrow--icon' src={arrow} alt="arrow" />
                                </li>
                                <li className='search__item' onClick={secondSearch}>
                                    <img className='search__icon' src={direction_icon} alt="direction_icon" />
                                    <p className='search__text'>Bo'lim tanlang</p>
                                    <img className='search__arrow--icon' src={arrow} alt="arrow" />
                                    <ul ref={secondSearchClass} className='search__second'>
                                        <li className='search__second--item'>
                                            <h2 className='search__second--category'>IT</h2>
                                            <div className='search__second--subCategory'>
                                                <input id='1' className='search__second--checkbox' type="checkbox" />
                                                <label htmlFor="1">
                                                    <p className='search__second--text'>Web dasturlash</p>
                                                </label>
                                            </div>
                                            <div className='search__second--subCategory'>
                                                <input id='2' className='search__second--checkbox' type="checkbox" />
                                                <label htmlFor="2">
                                                    <p className='search__second--text'>Mobile dasturlash</p>
                                                </label>
                                            </div>
                                        </li>
                                        <li className='search__second--item'>
                                            <h2 className='search__second--category'>IT</h2>
                                            <div className='search__second--subCategory'>
                                                <input id='3' className='search__second--checkbox' type="checkbox" />
                                                <label htmlFor="3">
                                                    <p className='search__second--text'>Web dasturlash</p>
                                                </label>
                                            </div>
                                            <div className='search__second--subCategory'>
                                                <input id='4' className='search__second--checkbox' type="checkbox" />
                                                <label htmlFor="4">
                                                    <p className='search__second--text'>Mobile dasturlash</p>
                                                </label>
                                            </div>
                                        </li>
                                        <li className='search__second--item'>
                                            <h2 className='search__second--category'>Dizayn</h2>
                                            <div className='search__second--subCategory'>
                                                <input id='5' className='search__second--checkbox' type="checkbox" />
                                                <label htmlFor="5">
                                                    <p className='search__second--text'>UI/UX dizayn</p>
                                                </label>
                                            </div>
                                            <div className='search__second--subCategory'>
                                                <input id='6' className='search__second--checkbox' type="checkbox" />
                                                <label htmlFor="6">
                                                    <p className='search__second--text'>Grafik dizayn</p>
                                                </label>
                                            </div>
                                        </li>
                                        <li className='search__second--item'>
                                            <h2 className='search__second--category'>Dizayn</h2>
                                            <div className='search__second--subCategory'>
                                                <input id='7' className='search__second--checkbox' type="checkbox" />
                                                <label htmlFor="7">
                                                    <p className='search__second--text'>UI/UX dizayn</p>
                                                </label>
                                            </div>
                                            <div className='search__second--subCategory'>
                                                <input id='8' className='search__second--checkbox' type="checkbox" />
                                                <label htmlFor="8">
                                                    <p className='search__second--text'>Grafik dizayn</p>
                                                </label>
                                            </div>
                                        </li>
                                        <li className='search__second--item'>
                                            <h2 className='search__second--category'>Biznes</h2>
                                            <div className='search__second--subCategory'>
                                                <input id='9' className='search__second--checkbox' type="checkbox" />
                                                <label htmlFor="9">
                                                    <p className='search__second--text'>Menejment</p>
                                                </label>
                                            </div>
                                            <div className='search__second--subCategory'>
                                                <input id='10' className='search__second--checkbox' type="checkbox" />
                                                <label htmlFor="10">
                                                    <p className='search__second--text'>Kredit va audit</p>
                                                </label>
                                            </div>
                                        </li>
                                        <li className='search__second--item'>
                                            <h2 className='search__second--category'>Biznes</h2>
                                            <div className='search__second--subCategory'>
                                                <input id='11' className='search__second--checkbox' type="checkbox" />
                                                <label htmlFor="11">
                                                    <p className='search__second--text'>Menejment</p>
                                                </label>
                                            </div>
                                            <div className='search__second--subCategory'>
                                                <input id='12' className='search__second--checkbox' type="checkbox" />
                                                <label htmlFor="12">
                                                    <p className='search__second--text'>Kredit va audit</p>
                                                </label>
                                            </div>
                                        </li>
                                        <li className='search__second--item'>
                                            <h2 className='search__second--category'>Ta'lim</h2>
                                            <div className='search__second--subCategory'>
                                                <input id='13' className='search__second--checkbox' type="checkbox" />
                                                <label htmlFor="13">
                                                    <p className='search__second--text'>Matematika</p>
                                                </label>
                                            </div>
                                            <div className='search__second--subCategory'>
                                                <input id='14' className='search__second--checkbox' type="checkbox" />
                                                <label htmlFor="14">
                                                    <p className='search__second--text'>Fizika</p>
                                                </label>
                                            </div>
                                        </li>

                                    </ul>
                                </li>
                                <li className='search__item' onClick={action}>
                                    <img className='search__icon' src={online_icon} alt="online_icon" />
                                    <p className='search__text'>Online / Offline</p>
                                    <img className='search__arrow--icon' src={arrow} alt="arrow" />
                                    <ul ref={actionSearchClass} className='search__action'>
                                        <li className='search__action--item'>
                                            <img className='search__action--icon' src={online_icon} alt="online_icon" />
                                            <label htmlFor="online" className='search__action--label'>Online</label>
                                            <input name='ganre' id='online' className='search__action--radio' type="radio" />
                                        </li>
                                        <li className='search__action--item'>
                                            <img className='search__action--icon' src={offline_icon} alt="online_icon" />
                                            <label htmlFor="offline" className='search__action--label'>Offline</label>
                                            <input name='ganre' id='offline' className='search__action--radio' type="radio" />
                                        </li>
                                    </ul>
                                </li>
                                <li onClick={speaker} className='search__item'>
                                    <img className='search__icon' src={person_icon} alt="person_icon" />
                                    <p className='search__text'>Ism familya</p>
                                    <img className='search__arrow--icon' src={arrow} alt="arrow" />
                                    <ul ref={speakerClass} className='search__speaker'>
                                        <li className='search__speaker--item'>
                                            <input id='17' className='search__speaker--input' type="checkbox" />
                                            <label htmlFor="17" className='search__speaker--label'>Abdulla Azizov</label>
                                        </li>
                                        <li className='search__speaker--item'>
                                            <input id='18' className='search__speaker--input' type="checkbox" />
                                            <label htmlFor="18" className='search__speaker--label'>Akbar Turdiyev</label>
                                        </li>
                                        <li className='search__speaker--item'>
                                            <input id='19' className='search__speaker--input' type="checkbox" />
                                            <label htmlFor="19" className='search__speaker--label'>Akbar Jumayev</label>
                                        </li>
                                        <li className='search__speaker--item'>
                                            <input id='20' className='search__speaker--input' type="checkbox" />
                                            <label htmlFor="20" className='search__speaker--label'>Begzod Iskandarov</label>
                                        </li>
                                        <li className='search__speaker--item'>
                                            <input id='21' className='search__speaker--input' type="checkbox" />
                                            <label htmlFor="21" className='search__speaker--label'>Baxodir Jalolov</label>
                                        </li>
                                        <li className='search__speaker--item'>
                                            <input id='22' className='search__speaker--input' type="checkbox" />
                                            <label htmlFor="22" className='search__speaker--label'>Sardor Qodirov</label>
                                        </li>
                                        <li className='search__speaker--item'>
                                            <input id='23' className='search__speaker--input' type="checkbox" />
                                            <label htmlFor="23" className='search__speaker--label'>Sohib Sharipov</label>
                                        </li>
                                        <li className='search__speaker--item'>
                                            <input id='24' className='search__speaker--input' type="checkbox" />
                                            <label htmlFor="24" className='search__speaker--label'>Dilmurod Alimbayev</label>
                                        </li>
                                        <li className='search__speaker--item'>
                                            <input id='25' className='search__speaker--input' type="checkbox" />
                                            <label htmlFor="25" className='search__speaker--label'>Dilshod Rahmanov</label>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <button className='search__btn'>Izlash</button>
                        </form>
                    </div>
                </section>

                <section className='intro'>
                    <div className="container">
                        <h3 className='intro__title'>Oxirgi e’lonlar</h3>
                        <ul className='intro__list'>
                            <li className='intro__card'>
                                <img className='intro__card--img' src={isayev} alt="isayev" />
                                <div className='intro__box'>
                                <h2 className='intro__card--title'>Alisher Isaevdan biznes va IT bo’yicha master klass</h2>
                                <ul className='intro__card--box'>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={user_icon} alt="user_icon" />
                                        <p className='intro__card--text'>Alisher Isaev</p>
                                    </li>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={design_icon} alt="design_icon" />
                                        <p className='intro__card--text'>Tadbirkor</p>
                                    </li>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={calendar} alt="calendar" />
                                        <p className='intro__card--text'>17 / 01 / 2022</p>
                                    </li>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={clock_icon} alt="clock_icon" />
                                        <p className='intro__card--text'>15 : 00</p>
                                    </li>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={online_icon} alt="online_icon" />
                                        <p className='intro__card--text'>Online</p>
                                    </li>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={eye_icon} alt="eye" />
                                        <p className='intro__card--text'>2250</p>
                                    </li>
                                </ul>
                                </div>
                            </li>
                            <li className='intro__card'>
                                <img className='intro__card--img' src={isayev} alt="isayev" />
                                <div className='intro__box'>
                                <h2 className='intro__card--title'>Alisher Isaevdan biznes va IT bo’yicha master klass</h2>
                                <ul className='intro__card--box'>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={user_icon} alt="user_icon" />
                                        <p className='intro__card--text'>Alisher Isaev</p>
                                    </li>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={design_icon} alt="design_icon" />
                                        <p className='intro__card--text'>Tadbirkor</p>
                                    </li>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={calendar} alt="calendar" />
                                        <p className='intro__card--text'>17 / 01 / 2022</p>
                                    </li>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={clock_icon} alt="clock_icon" />
                                        <p className='intro__card--text'>15 : 00</p>
                                    </li>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={online_icon} alt="online_icon" />
                                        <p className='intro__card--text'>Online</p>
                                    </li>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={eye_icon} alt="eye" />
                                        <p className='intro__card--text'>2250</p>
                                    </li>
                                </ul>
                                </div>
                            </li>
                            <li className='intro__card'>
                                <img className='intro__card--img' src={isayev} alt="isayev" />
                                <div className='intro__box'>
                                <h2 className='intro__card--title'>Alisher Isaevdan biznes va IT bo’yicha master klass</h2>
                                <ul className='intro__card--box'>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={user_icon} alt="user_icon" />
                                        <p className='intro__card--text'>Alisher Isaev</p>
                                    </li>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={design_icon} alt="design_icon" />
                                        <p className='intro__card--text'>Tadbirkor</p>
                                    </li>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={calendar} alt="calendar" />
                                        <p className='intro__card--text'>17 / 01 / 2022</p>
                                    </li>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={clock_icon} alt="clock_icon" />
                                        <p className='intro__card--text'>15 : 00</p>
                                    </li>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={online_icon} alt="online_icon" />
                                        <p className='intro__card--text'>Online</p>
                                    </li>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={eye_icon} alt="eye" />
                                        <p className='intro__card--text'>2250</p>
                                    </li>
                                </ul>
                                </div>
                            </li>
                            <li className='intro__card'>
                                <img className='intro__card--img' src={isayev} alt="isayev" />
                                <div className='intro__box'>
                                <h2 className='intro__card--title'>Alisher Isaevdan biznes va IT bo’yicha master klass</h2>
                                <ul className='intro__card--box'>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={user_icon} alt="user_icon" />
                                        <p className='intro__card--text'>Alisher Isaev</p>
                                    </li>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={design_icon} alt="design_icon" />
                                        <p className='intro__card--text'>Tadbirkor</p>
                                    </li>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={calendar} alt="calendar" />
                                        <p className='intro__card--text'>17 / 01 / 2022</p>
                                    </li>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={clock_icon} alt="clock_icon" />
                                        <p className='intro__card--text'>15 : 00</p>
                                    </li>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={online_icon} alt="online_icon" />
                                        <p className='intro__card--text'>Online</p>
                                    </li>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={eye_icon} alt="eye" />
                                        <p className='intro__card--text'>2250</p>
                                    </li>
                                </ul>
                                </div>
                            </li>
                            <li className='intro__card'>
                                <img className='intro__card--img' src={isayev} alt="isayev" />
                                <div className='intro__box'>
                                <h2 className='intro__card--title'>Alisher Isaevdan biznes va IT bo’yicha master klass</h2>
                                <ul className='intro__card--box'>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={user_icon} alt="user_icon" />
                                        <p className='intro__card--text'>Alisher Isaev</p>
                                    </li>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={design_icon} alt="design_icon" />
                                        <p className='intro__card--text'>Tadbirkor</p>
                                    </li>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={calendar} alt="calendar" />
                                        <p className='intro__card--text'>17 / 01 / 2022</p>
                                    </li>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={clock_icon} alt="clock_icon" />
                                        <p className='intro__card--text'>15 : 00</p>
                                    </li>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={online_icon} alt="online_icon" />
                                        <p className='intro__card--text'>Online</p>
                                    </li>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={eye_icon} alt="eye" />
                                        <p className='intro__card--text'>2250</p>
                                    </li>
                                </ul>
                                </div>
                            </li>
                            <li className='intro__card'>
                                <img className='intro__card--img' src={isayev} alt="isayev" />
                                <div className='intro__box'>
                                <h2 className='intro__card--title'>Alisher Isaevdan biznes va IT bo’yicha master klass</h2>
                                <ul className='intro__card--box'>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={user_icon} alt="user_icon" />
                                        <p className='intro__card--text'>Alisher Isaev</p>
                                    </li>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={design_icon} alt="design_icon" />
                                        <p className='intro__card--text'>Tadbirkor</p>
                                    </li>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={calendar} alt="calendar" />
                                        <p className='intro__card--text'>17 / 01 / 2022</p>
                                    </li>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={clock_icon} alt="clock_icon" />
                                        <p className='intro__card--text'>15 : 00</p>
                                    </li>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={online_icon} alt="online_icon" />
                                        <p className='intro__card--text'>Online</p>
                                    </li>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={eye_icon} alt="eye" />
                                        <p className='intro__card--text'>2250</p>
                                    </li>
                                </ul>
                                </div>
                            </li>
                            <li className='intro__card'>
                                <img className='intro__card--img' src={isayev} alt="isayev" />
                                <div className='intro__box'>
                                <h2 className='intro__card--title'>Alisher Isaevdan biznes va IT bo’yicha master klass</h2>
                                <ul className='intro__card--box'>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={user_icon} alt="user_icon" />
                                        <p className='intro__card--text'>Alisher Isaev</p>
                                    </li>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={design_icon} alt="design_icon" />
                                        <p className='intro__card--text'>Tadbirkor</p>
                                    </li>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={calendar} alt="calendar" />
                                        <p className='intro__card--text'>17 / 01 / 2022</p>
                                    </li>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={clock_icon} alt="clock_icon" />
                                        <p className='intro__card--text'>15 : 00</p>
                                    </li>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={online_icon} alt="online_icon" />
                                        <p className='intro__card--text'>Online</p>
                                    </li>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={eye_icon} alt="eye" />
                                        <p className='intro__card--text'>2250</p>
                                    </li>
                                </ul>
                                </div>
                            </li>
                            <li className='intro__card'>
                                <img className='intro__card--img' src={isayev} alt="isayev" />
                                <div className='intro__box'>
                                <h2 className='intro__card--title'>Alisher Isaevdan biznes va IT bo’yicha master klass</h2>
                                <ul className='intro__card--box'>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={user_icon} alt="user_icon" />
                                        <p className='intro__card--text'>Alisher Isaev</p>
                                    </li>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={design_icon} alt="design_icon" />
                                        <p className='intro__card--text'>Tadbirkor</p>
                                    </li>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={calendar} alt="calendar" />
                                        <p className='intro__card--text'>17 / 01 / 2022</p>
                                    </li>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={clock_icon} alt="clock_icon" />
                                        <p className='intro__card--text'>15 : 00</p>
                                    </li>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={online_icon} alt="online_icon" />
                                        <p className='intro__card--text'>Online</p>
                                    </li>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={eye_icon} alt="eye" />
                                        <p className='intro__card--text'>2250</p>
                                    </li>
                                </ul>
                                </div>
                            </li>
                            <li className='intro__card'>
                                <img className='intro__card--img' src={isayev} alt="isayev" />
                                <div className='intro__box'>
                                <h2 className='intro__card--title'>Alisher Isaevdan biznes va IT bo’yicha master klass</h2>
                                <ul className='intro__card--box'>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={user_icon} alt="user_icon" />
                                        <p className='intro__card--text'>Alisher Isaev</p>
                                    </li>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={design_icon} alt="design_icon" />
                                        <p className='intro__card--text'>Tadbirkor</p>
                                    </li>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={calendar} alt="calendar" />
                                        <p className='intro__card--text'>17 / 01 / 2022</p>
                                    </li>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={clock_icon} alt="clock_icon" />
                                        <p className='intro__card--text'>15 : 00</p>
                                    </li>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={online_icon} alt="online_icon" />
                                        <p className='intro__card--text'>Online</p>
                                    </li>
                                    <li className='intro__card--item'>
                                        <img className='intro__card--icon' src={eye_icon} alt="eye" />
                                        <p className='intro__card--text'>2250</p>
                                    </li>
                                </ul>
                                </div>
                            </li>
                        </ul>
                        <button className='intro__nextBtn'>Ko’proq ko’rish</button>
                    </div>
                </section>

                <section className='advertising'>
                    <div className="container">
                        <ul className='advertising__list'>
                            <li className='advertising__item'>
                                <img className='advertising__img' src={reklama1} alt="reklama1" />
                            </li>
                            <li className='advertising__item'>
                                <img className='advertising__img' src={reklama2} alt="reklama2" />
                            </li>
                        </ul>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home