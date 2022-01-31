import { useRef } from 'react'


//components
import Header from '../Header/Header'

//SASS
import './Home.scss'

//images
import calendar from '../../Assets/img/calendar.svg'
import direction_icon from '../../Assets/img/direction_icon.svg'
import online_icon from '../../Assets/img/online_icon.svg'
import person_icon from '../../Assets/img/person_icon.svg'
import arrow from '../../Assets/img/search_arrow.svg'


function Home() {

    const secondSearchClass = useRef()
    const actionSearchClass = useRef()

    function secondSearch(){
        secondSearchClass.current.classList.toggle('search__second--active')
        actionSearchClass.current.classList.remove('search__action--active')
    }
    function action(){
        secondSearchClass.current.classList.remove('search__second--active')
        actionSearchClass.current.classList.toggle('search__action--active')
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
                                            <img className='search__action--icon' src={online_icon} alt="online_icon" />
                                            <label htmlFor="offline" className='search__action--label'>Offline</label>
                                            <input name='ganre' id='offline' className='search__action--radio' type="radio" />
                                        </li>
                                    </ul>
                                </li>
                                <li className='search__item'>
                                    <img className='search__icon' src={person_icon} alt="person_icon" />
                                    <p className='search__text'>Ism familya</p>
                                    <img className='search__arrow--icon' src={arrow} alt="arrow" />
                                </li>
                            </ul>
                            <button className='search__btn'>Izlash</button>
                        </form>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home