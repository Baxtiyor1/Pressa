import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

// import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
// import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


//components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

//SASS
import './Single.scss'
import 'swiper/css';
import '../Home/Home.scss'

//Images
import clock_icon from '../../Assets/img/clock.svg'
import calendar from '../../Assets/img/calendar.svg'
import online_icon from '../../Assets/img/online_icon.svg'
import offline_icon from '../../Assets/img/offline_icon.svg'
import facebook_icon from '../../Assets/img/face_s.svg'
import tg_icon from '../../Assets/img/tg_s.svg'
import insta_icon from '../../Assets/img/insta_s.svg'
import share_icon from '../../Assets/img/share_icon.svg'
import twitt_icon from '../../Assets/img/twitt_icon.svg'
import tumbir_icon from '../../Assets/img/tumbir.svg'
import building from '../../Assets/img/building.svg'
import arrow from '../../Assets/img/search_arrow.svg'
import home_icon from '../../Assets/img/home_icon.svg'
import izoh_icon from '../../Assets/img/izoh.svg'
import women_1 from '../../Assets/img/women_1.png'
import women_2 from '../../Assets/img/women_2.png'
import location_icon from '../../Assets/img/location.svg'
import youtube from '../../Assets/img/youtube.svg'
import answer_icon from '../../Assets/img/answer_icon.svg'
import design_icon from '../../Assets/img/Design.svg'
import user_icon from '../../Assets/img/user.svg'
import eye_icon from '../../Assets/img/eye.svg'
import r_arrow from '../../Assets/img/r_arrow.svg'


// SwiperCore.use([Navigation]);
function Single() {
    const postId = useParams().postId

    const [post, setPost] = useState([])
    const [samePosts, setSamePosts] = useState([])

    useEffect(() => {
        fetch(`https://pressademobackend.herokuapp.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => setPost(data[0]))
    }, [postId])
    useEffect(() => {
        // https://pressademobackend.herokuapp.com/posts?subCategory=["${post.subCategory}"]
        fetch(`https://pressademobackend.herokuapp.com/posts`)
            .then(res => res.json())
            .then(data => setSamePosts(data))
    }, [])

    return (
        <>
            <Header />

            <main>
                <section className='single'>
                    <div className="container">
                        <div className='single__header'>
                            <img className='single__header--icon' src={home_icon} alt="home_icon" />
                            <Link to='/' className='single__header--link'> Home</Link>
                            <img className='single__header--arrow' src={arrow} alt="arrow" />
                            <p className='single__header--text'>{post.speaker}</p>
                        </div>
                        <div className="single__wrapper">
                            <aside className="single__aside">
                                <h2 className='single__aside--title'>{post.title}</h2>
                                <ul className='single__aside--list'>
                                    <li className='single__aside--item'>
                                        <img className='single__aside--icon' src={calendar} alt="calendar" />
                                        <p className='single__aside--text'>{post.date}</p>
                                    </li>
                                    <li className='single__aside--item'>
                                        <img className='single__aside--icon' src={clock_icon} alt="calendar" />
                                        <p className='single__aside--text'>{post.time}</p>
                                    </li>
                                    <li className='single__aside--item'>
                                        <img className='single__aside--icon' src={
                                            post.type == 1 ? offline_icon : online_icon
                                        } alt="calendar" />
                                        <p className='single__aside--text'>{
                                            post.type == 1 ? 'Offline' : "online"
                                        }</p>
                                    </li>
                                </ul>
                                <div className="single__aside--box">
                                    <div className='single__aside--yuridik'>
                                        {
                                            post.legalName ? <img className='single__aside--icon' src={building} alt="building" /> : null
                                        }
                                        <p className='single__aside--text'>{post.legalName}</p>
                                    </div>
                                    <button className="single__aside--share">
                                        <img className='single__aside--share-icon' src={share_icon} alt="share_icon" />
                                        <p className='single__aside--share-text'>Ulashing</p>
                                    </button>
                                    <div className="single__aside--icons">
                                        <a className='single__aside--link' href="#">
                                            <img src={facebook_icon} alt="facebook_icon" />
                                        </a>
                                        <a className='single__aside--link' href="#">
                                            <img src={tumbir_icon} alt="tumbir_icon" />
                                        </a>
                                        <a className='single__aside--link' href="#">
                                            <img src={insta_icon} alt="insta_icon" />
                                        </a>
                                        <a className='single__aside--link' href="#">
                                            <img src={twitt_icon} alt="twitt_icon" />
                                        </a>
                                        <a className='single__aside--link' href="#">
                                            <img src={tg_icon} alt="tg_icon" />
                                        </a>
                                    </div>
                                </div>
                            </aside>
                            <div className='single__bside'>
                                <h1 className='single__bside--title'>{post.title}</h1>
                                <p className='single__bside--desc'>{post.description}</p>
                                <img className='single__bside--pic' src={'https://pressademobackend.herokuapp.com' + post.image} alt="isaev" />
                                <p className='single__bside--desc'>{post.text}</p>
                                <div className='single__bside--box'>
                                    <a className='single__bside--link' href='#'>
                                        <img src={location_icon} alt="icon" />
                                        Google kartadan aniqlash
                                    </a>
                                    <a className='single__bside--link' target='_blank' href={post.link}>
                                        <img src={youtube} alt="icon" />
                                        Youtubedan tomosha qilish
                                    </a>
                                    <div className='single__bside--subbox'>
                                        <img className='single__bside--subbox-icon' src={calendar} alt="calendar" />
                                        <p className='single__bside--subbox-text'>{post.refusedDate}</p>
                                    </div>
                                    <div className='single__bside--subbox'>
                                        <img className='single__bside--subbox-icon' src={clock_icon} alt="calendar" />
                                        <p className='single__bside--subbox-text'>{post.refusedTime}</p>
                                    </div>
                                </div>

                                <div className='single__comment'>
                                    <div className='single__comment--header'>
                                        <img className='single__comment--header--icon' src={izoh_icon} alt="izoh_icon" />
                                        <h2 className='single__comment--title'>Izohlar</h2>
                                    </div>
                                    <div className='single__comment--sender'>
                                        <img className='single__comment--pic' src={women_1} alt="women_img" />
                                        <form action="/" className='single__comment--form'>
                                            <textarea className='single__comment--form--input' name="message" placeholder='Izoh yozing...'></textarea>
                                            <button className='single__comment--form--btn'>Yuborish</button>
                                        </form>
                                    </div>
                                    <div className='single__comment--messages'>
                                        <div className='single__comment--person'>
                                            <img className='single__comment--person--img' src={women_1} alt="women" />
                                            <div className='single__comment--person--box'>
                                                <h3 className='single__comment--person--name'>Angella</h3>
                                                <time className='single__comment--person--time'>Bugun 15:00</time>
                                            </div>
                                        </div>
                                        <div className='single__comment--messages-box'>
                                            <p className='single__comment--messages-content'>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam etiam at nunc tempor ac.
                                            </p>
                                            <div className='single__comment--messages-subbox'>
                                                <img className='single__comment--messages-icon' src={answer_icon} alt="answer_icon" />
                                                <p className='single__comment--messages-count'>Javob berish (12)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='single__comment--messages2'>
                                        <div className='single__comment--person'>
                                            <img className='single__comment--person--img' src={women_2} alt="women" />
                                            <div className='single__comment--person--box'>
                                                <h3 className='single__comment--person--name'>Merry</h3>
                                                <time className='single__comment--person--time'>Bugun 15:00</time>
                                            </div>
                                        </div>
                                        <div className='single__comment--messages-box'>
                                            <p className='single__comment--messages-content'>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam etiam at nunc tempor ac.
                                            </p>
                                            <div className='single__comment--messages-subbox'>
                                                <img className='single__comment--messages-icon' src={answer_icon} alt="answer_icon" />
                                                <p className='single__comment--messages-count'>Javob berish</p>

                                            </div>
                                            <button className='single__comment--messages-btn'>Ko'proq ko'rish...</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={3}
                            onSlideChange={() => console.log('slide change')}
                        >
                            {
                                samePosts.map(e => {
                                    return (
                                        <SwiperSlide key={e.postId}>
                                            <Link to={'/single/' + e.postId} className='intro__card'>
                                                <img className='intro__card--img' src={'https://pressademobackend.herokuapp.com' + e.image} alt="img" />
                                                <div className='intro__box'>
                                                    <h2 className='intro__card--title'>{e.title}</h2>
                                                    <ul className='intro__card--box'>
                                                        <li className='intro__card--item'>
                                                            <img className='intro__card--icon' src={user_icon} alt="user_icon" />
                                                            <p className='intro__card--text'>{e.speaker}</p>
                                                        </li>
                                                        <li className='intro__card--item'>
                                                            <img className='intro__card--icon' src={design_icon} alt="design_icon" />
                                                            <p className='intro__card--text'>{e.proffesion}</p>
                                                        </li>
                                                        <li className='intro__card--item'>
                                                            <img className='intro__card--icon' src={calendar} alt="calendar" />
                                                            <p className='intro__card--text'>{e.date}</p>
                                                        </li>
                                                        <li className='intro__card--item'>
                                                            <img className='intro__card--icon' src={clock_icon} alt="clock_icon" />
                                                            <p className='intro__card--text'>{e.time}</p>
                                                        </li>
                                                        <li className='intro__card--item'>
                                                            <img className='intro__card--icon' src={
                                                                e.type == 2 ? online_icon : offline_icon
                                                            } alt="online_icon" />
                                                            <p className='intro__card--text'>{
                                                                e.type == 2 ? 'online' : 'offline'
                                                            }</p>
                                                        </li>
                                                        <li className='intro__card--item'>
                                                            <img className='intro__card--icon' src={eye_icon} alt="eye" />
                                                            <p className='intro__card--text'>{e.views}</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </Link>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                        <div className='single__button--box'>
                            <button className='single__button--prew'>
                                <img src={r_arrow} alt="arrow" />
                            </button>
                            <button className='single__button--next'>
                                <img src={r_arrow} alt="arrow" />
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}

export default Single