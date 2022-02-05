import './Order.scss'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import homeSvg from '../../Assets/img/Home.svg'
import { useRef } from 'react'

function Order() {
    const offRef = useRef()
    const onRef = useRef()
    return (
        <>
            <Header />
            <div className="container">
                <div className="top_container">
                    <span className='order_span'>
                        <img className='order_home_svg' src={homeSvg} alt="img" />
                        <p className='order_tile'>E’lon berish</p>
                    </span>
                    <h1 className='order_title_order'>E’lon berish</h1>

                    <form className="order_form">
                        <div className="order_div_order">
                            <h1 className='order_div_title'>Vaqt va yo’nalishni tanlang</h1>
                            <div className="order_mini_div_one">
                                <p className='order_div_text'>O’tkaziladigan sanani kiriting</p>
                                <input type="date" className='order_div_select' />
                                <input type="time" className='order_div_select_tis'/>
                            </div>
                            <div className="order_mini_div_two">
                                <p className='order_div_text_two'>Yo’nalishni belgilang</p>
                                <p className='order_div_text_three'>Ichki yo’nalishni</p>
                                {/* <select  className='order_div_select_direction' >
                                    <option className='order_div_option' value="Information Technologies" selected disabled>Information Technologies</option>
                                    <option className='order_div_option' value="Web Dizayn">Web Dizayn</option>
                                    <option className='order_div_option' value="SMM">SMM</option>
                                    <option className='order_div_option' value="GRAFIK DIZAYN">GRAFIK DIZAYN</option>
                                    <option className='order_div_option' value="Web Dasturlash">Web Dasturlash</option>
                                </select> */}
                                <select  className='order_div_select_mini_direction' defaultValue={'web'}>
                                    <option className='order_div_option' value="Java developer">Java developer</option>
                                    <option className='order_div_option' value="Node Js developer">Node Js developer</option>
                                    <option className='order_div_option' value="React developer">React developer</option>
                                    <option className='order_div_option' value="Phyton developer">Phyton developer</option>
                                </select>
                            </div>
                            <div className="order_mini_div_three">
                                <p className='order_div_text_two'>Tadbir turi</p>
                                <button type='button' className='clicked' value="2" ref={offRef} onClick={() => {
                                    offRef.current.classList.add('order')
                                    if (offRef.current.classList.contains('order')) {
                                        offRef.current.classList.add('clicked')
                                        offRef.current.classList.remove('type_btn')
                                        onRef.current.classList.add('type_btn')
                                        onRef.current.classList.remove('clicked')
                                    } else {
                                        offRef.current.classList.remove('clicked')
                                        offRef.current.classList.add('type_btn')
                                        onRef.current.classList.add('clicked')
                                        onRef.current.classList.remove('type_btn')
                                    }
                                }}>Online</button>
                                <button type='button' className='type_btn' value="1" ref={onRef} onClick={() => {
                                    onRef.current.classList.remove('order')
                                    if (onRef.current.classList.contains('order')) {
                                        offRef.current.classList.add('clicked')
                                        offRef.current.classList.remove('type_btn')
                                        onRef.current.classList.remove('clicked')
                                        onRef.current.classList.add('type_btn')
                                    } else {
                                        offRef.current.classList.remove('clicked')
                                        offRef.current.classList.add('type_btn')
                                        onRef.current.classList.add('clicked')
                                        onRef.current.classList.remove('type_btn')
                                    }
                                }}>Offline</button>
                                <div className="order_link_div">
                                    <p className='order_div_text_link'>Link kiriting</p>
                                    <input required type="url" className='order_input_link' />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="top_container_two">
                    <h1 className='order_title_order'>Tashkilotchi</h1>
                    <div className="order_flex_div">
                        <div className="user_normal_div">
                            <label htmlFor="1" className='order_normal_title'>Jismoniy shaxs</label>
                            <input id='1' required type="radio" value="standard" name='user' className='order_normal_check' />
                        </div>
                        <div className="user_normal_div">
                            <label htmlFor="2" className='order_normal_title'>Yuridik shaxs</label>
                            <input id='2' required type="radio" value="normal" name='user' className='order_normal_check' />
                        </div>
                    </div>
                    <form className="order_form">
                        <div className="order_div_order">
                            <div className="order_mini_div_two">
                                <p className='order_div_text_two'>Yuridik nomi</p>
                                <p className='order_div_text_three'>Ismi sharifi</p>
                                <input required type="text" className='order_div_select_direction' />
                                <input required type="text" className='order_div_select_mini_direction' />
                            </div>
                            <div className="order_mini_div_three">
                                <p className='order_div_text_two_prof'>Professiya</p>
                                <input type="text" required className='order_div_select_prof_direction' />
                                <div className="order_link_div">
                                    <p className='order_div_text_link'>Telefon raqami</p>
                                    <input required type="tel" defaultValue="+998" maxLength="13" minLength="13" className='order_input_link_prof' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                                </div>
                                <p className='order_div_text_two_tel'>Qo’shimcha tel raqam</p>
                                <input required type="tel" defaultValue="+998" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" maxLength="13" minLength="13" className='order_div_select_mini_direction_tel' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Order