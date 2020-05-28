import React from 'react'
import './TheStories.css'
import e2 from './Eons of Earth/e2.jpg'
import e5 from './Eons of Earth/e5.jpg'
import e4 from './Eons of Earth/e4.jpg'
import hcover from './Closer to Home/hcover.jpg'
export default function TheStories() {
    return (
        <div className="TheStories flex">
            <div className="story_box pointer">
                <div className="story_img">
                    <img className="story_img_size" src={e2} alt=""/>
                </div>
                <div className="story_details fex-col">
                    <h1>Wonder Valley</h1>
                    <p>As a landscape photographer and solo traveler, Cody Cobb elevates the immensity and grandeur of his subjects above all else, reminding viewers of the mystery that lies beyond the boundary of civilization.</p>
                </div>
            </div>
            <div className="story_box pointer">
                <div className="story_img">
                    <img className="story_img_size" src={hcover} alt=""/>
                </div>
                <div className="story_details flex-col">
                    <h1>Closer To Home</h1>
                    <p>Bryce Ehrecke & Kelly Brown share how natural building could empower both a more beautiful and a more sustainable future.</p>
                </div>
            </div>
            <div className="story_box pointer">
                <div className="story_img">
                    <img className="story_img_size" src={e5} alt=""/>
                </div>
                <div className="story_details flex-col">
                <h1>Wonder Valley</h1>
                    <p>As a landscape photographer and solo traveler, Cody Cobb elevates the immensity and grandeur of his subjects above all else, reminding viewers of the mystery that lies beyond the boundary of civilization.</p>
                </div>
            </div>
            <div className="story_box pointer">
                <div className="story_img">
                <img className="story_img_size" src={e4} alt=""/>
                </div>
                <div className="story_details flex-col">
                    <h1>Wonder Valley</h1>
                    <p>As a landscape photographer and solo traveler, Cody Cobb elevates the immensity and grandeur of his subjects above all else, reminding viewers of the mystery that lies beyond the boundary of civilization.</p>
                </div>
            </div>
        </div>
    )
}
