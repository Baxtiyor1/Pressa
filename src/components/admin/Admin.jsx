import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import useToken from '../../Hook/useToken'

//SASS
import './admin.scss'

//Images
import back_a from '../../Assets/img/back_a.svg'
import bell_a from '../../Assets/img/bell_a.svg'
import brush_a from '../../Assets/img/brush_a.svg'
import home_a from '../../Assets/img/home_a.svg'
import search_a from '../../Assets/img/search_a.svg'
import setting_a from '../../Assets/img/setting_a.svg'
import stat_a from '../../Assets/img/stat_a.svg'

function Admin() {
    const [changeClass, setChangeClass] = useState(1)
    const [token] = useToken()
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://pressademobackend.herokuapp.com/admin', {
            method: "GET",
            headers: {
                token
            }
        })
            .then(res => res.json())
            .then(data => setData(data))
    })

    //get
    function pendingPosts() {
        fetch('https://pressademobackend.herokuapp.com/admin', {
            method: "GET",
            headers: {
                token
            }
        })
            .then(res => res.json())
            .then(data => setData(data))
    }

    //accepted
    function acceptedPosts() {
        fetch('https://pressademobackend.herokuapp.com/admin/accepted', {
            method: "GET",
            headers: {
                token
            }
        })
            .then(res => res.json())
            .then(data => setData(data))
    }
    //tasdiqlash
    function accept(e) {
        fetch('https://pressademobackend.herokuapp.com/admin', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                token
            },
            body: JSON.stringify({
                postId: e.target.value,
                agree: true
            })
        })
    }

    //reject
    function reject(e){
        fetch('https://pressademobackend.herokuapp.com/admin', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                token
            },
            body: JSON.stringify({
                postId: e.target.value,
                agree: false
            })
        }).then(res=> res.json())
        .then(data => console.log(data))
    }

    //rejected
    function rejected() {
        fetch('https://pressademobackend.herokuapp.com/admin/rejected', {
            method: "GET",
            headers: {
                token
            }
        })
            .then(res => res.json())
            .then(data => setData(data))
    }
    
    return (

        <section className='admin__section'>
            {/* <div className="container"> */}
            <div className='admin'>
                <div className='admin__bar'>
                    <div>
                        <p className='admin__logo'>Pressa</p>
                        <ul className='admin__bar--list'>
                            <li className="admin__bar--item">
                                <img className='admin__bar--icon' src={home_a} alt="home_a" />
                                <Link to='/' className='admin__bar--text'>Bosh Sahifa</Link>
                            </li>
                            <li className="admin__bar--item">
                                <img className='admin__bar--icon' src={stat_a} alt="home_a" />
                                <p className='admin__bar--text'>Statistika</p>
                            </li>
                            <li className="admin__bar--item">
                                <img className='admin__bar--icon' src={brush_a} alt="home_a" />
                                <p className='admin__bar--text'>O’chirilganlar</p>
                            </li>
                            <li className="admin__bar--item">
                                <img className='admin__bar--icon' src={setting_a} alt="home_a" />
                                <p className='admin__bar--text'>Sozlamalar</p>
                            </li>
                            <li className="admin__bar--item">
                                <img className='admin__bar--icon' src={back_a} alt="home_a" />
                                <p className='admin__bar--text'>Chiqish</p>
                            </li>
                        </ul>
                    </div>
                    <p className='admin__bar--subtext'>Baxtiyor © 2021</p>
                </div>
                <div className="admin__wrapper">
                    <div className="admin__header">
                        <form className="admin__header--form" action="">
                            <img className="admin__header--icon" src={search_a} alt="search_a" />
                            <input className="admin__header--input" type="text" placeholder='search' />
                        </form>
                        <div className="admin__header--box">
                            <img className='admin__header--bell' src={bell_a} alt="" />
                            <span className='admin__header--bell-count'>{data.length}</span>
                            <div className="admin__header--subbox">
                                <img className="admin__header--pic" src='https://picsum.photos/44' alt="img" />
                                <div className='admin__header--profil'>
                                    <h3 className='admin__header--name'>Baxtiyor Xusanov</h3>
                                    <p className='admin__header--id'>id:12432</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="admin__filter">
                        <ul className="admin__filter--list">
                            <li
                                className={`admin__filter--item ${changeClass === 1 ? 'admin__filter--item--active' : ''}`}
                                onClick={() => {
                                    pendingPosts()
                                    setChangeClass(1)
                                }}>Kutilmoqda</li>
                            <li className={`admin__filter--item ${changeClass === 2 ? 'admin__filter--item--active' : ''}`}
                                onClick={() => {
                                    setChangeClass(2)
                                    acceptedPosts(2)
                                }}>Qabul qiligan</li>
                            <li className={`admin__filter--item ${changeClass === 3 ? 'admin__filter--item--active' : ''}`}
                                onClick={() => {
                                    rejected()
                                    setChangeClass(3)
                                }}>Rad etilgan</li>
                        </ul>
                        <div className="admin__filter--box">
                            <label className="admin__filter--label" htmlFor="1" >Oxirgilari</label>
                            <input name='radio' className="admin__filter--checkbox" id='1' type="radio" />
                            <label className="admin__filter--label" htmlFor="2" >Eng so’ngilari</label>
                            <input name='radio' className="admin__filter--checkbox" id='2' type="radio" />
                        </div>
                    </div>
                    <div className='admin__main'>
                        <h3 className='admin__main--title'>Eng so’ngi xabarnomalar</h3>
                        <ul className='admin__list'>
                            {
                                data.map(e => {
                                    return (
                                        <li key={e.postId} className='admin__card'>
                                            <div className='admin__card--box'>
                                                <p className='admin__card--title'>{e.title}</p>
                                                <div className='admin__card--btnbox'>
                                                    <button className='admin__card--firstbtn' value={e.postId} onClick={reject}>Bekor qilish</button>
                                                    <button className='admin__card--secondbtn' value={e.postId} onClick={accept}>Tasdiqlash</button>
                                                </div>
                                            </div>
                                            <ul className='admin__card--subbox'>
                                                <li className='admin__card--text'>{e.speaker}</li>
                                                <li className='admin__card--text'><a href="tel: +998991201010">{e.phone[0]}</a></li>
                                                <li className='admin__card--text'>{e.date}</li>
                                                <li className='admin__card--text'>{e.time}</li>
                                                <li className='admin__card--text'>{e.subCategory}</li>
                                            </ul>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </section>
    )
}

export default Admin