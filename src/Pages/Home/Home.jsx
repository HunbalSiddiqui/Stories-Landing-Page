import React from 'react'
import './Home.css'
import Nav from '../../Components/Nav/Nav'
import StorySlider from '../../Components/StorySlider/StorySlider'
import AboutUs from '../../Components/AboutUs/AboutUs'
import TheStories from '../../Components/TheStories/TheStories'
import b1 from './blogs/b1.jpg'
import b2 from './blogs/b2.jpg'
import b3 from './blogs/b3.jpg'
import b4 from './blogs/b4.jpg'
import FullNav from '../../Components/FullNav/FullNav'
export default function Home() {
    return (
        <div className="home_cont">
            <FullNav/>
            <div className="nav_home">
                <Nav/>
            </div>
            <div className="cover_stories">
                <StorySlider/>
            </div>
            <div className="about_bar">
                <AboutUs/>
            </div>
            <div className="the_stories_heading heading5 flex bold">
                The Stories
            </div>
            <div className="the_stories">
                <TheStories/>
            </div>
            <div className="view_all_blogs flex heading6">
                <h3 className="pointer">Featured Blogs <i className="fas fa-long-arrow-alt-right"></i></h3>
            </div>
            <div className="featured flex">
                <div className="blogs_box">
                    <div className="blog_img">
                        <img className="blog_img_size" src={b1} alt=""/>
                    </div>
                    <div className="blog_details flex-col">
                        <h1 className="bold heading5">Making Art in the Middle of Nowhere</h1>
                        <p>Exploring a West Texas must-see, firmly planted at the crossroads of Art and Myth.</p>
                    </div>
                </div>
                <div className="blogs_box">
                    <div className="blog_img">
                        <img className="blog_img_size" src={b2} alt=""/>
                    </div>
                    <div className="blog_details flex-col">
                        <h1 className="bold heading5">Celina Muire</h1>
                        <p>Austin-based woodworker Celina Muire talks to us about process, pyrography, and the perfectly imperfect nature of making by hand.</p>
                    </div>
                </div>
                <div className="blogs_box">
                    <div className="blog_img">
                        <img className="blog_img_size" src={b3} alt=""/>
                    </div>
                    <div className="blog_details flex-col">
                        <h1 className="bold heading5">Cookfire</h1>
                        <p>A meal out-of-doors in Mt. Hood, OR with two of Portland’s finest foodies.</p>
                    </div>
                </div>
                <div className="blogs_box">
                    <div className="blog_img">
                        <img className="blog_img_size" src={b4} alt=""/>
                    </div>
                    <div className="blog_details flex-col">
                        <h1 className="bold heading5">LA Juice Shop</h1>
                        <p>Thoughts on juicing and the place to go for the best fresh, local, and organic beverages in West Hollywood.</p>
                    </div>
                </div>
            </div>
            <div className="footer flex">
                <div className="fitem flex-col heading5"><i className="fab fa-instagram"></i></div>
                <div className="fitem flex-col heading5"><i className="fab fa-facebook"></i></div>
                <div className="fitem flex-col heading5"><i className="fab fa-twitter"></i></div>
                <div className="fitem flex-col heading5"><i className="fas fa-envelope-square"></i></div>
            </div>
        </div>
    )
}
