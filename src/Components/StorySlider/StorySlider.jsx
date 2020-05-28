import React, { Component } from 'react'
import './StorySlider.css'
import ecover from './Eons of Earth/ecover.jpg'
import hcover from './Closer to Home/hcover.jpg'

export class StorySlider extends Component {
    state = {
        stories :[],
        currentPosition : 0
    }
    componentDidMount() {
        var storyArr = [];
        storyArr.push(ecover);
        storyArr.push(hcover);
        this.setState((prevState)=>({
            stories:storyArr
        }),()=>{
            this.setBackground();
        })        
    }
    setBackground (){
        var storyArea = document.querySelector('.StorySlider');
        var slow_display = document.querySelector('.slow_display')
        // storyArea.style.background = `url(${ecover})`;
        // storyArea.style.backgroundSize = '100% 100%,cover';
        var {currentPosition} = this.state;
        if(currentPosition===0)
        {
        storyArea.style.background = `url(${ecover})`;
        storyArea.style.backgroundSize = '100% 100%,cover';
        }
        else if(currentPosition===1)
        {
        storyArea.style.background = `url(${hcover})`;
        storyArea.style.backgroundSize = '100% 100%,cover';
        }
    }
    changeBackground (arrow){
        var {currentPosition} = this.state;
        if(arrow==='next')
        {
            if(currentPosition===0)
            {
                this.setState({
                    currentPosition:1
                },()=>{
                    this.setBackground()
                })
            }
            else if(currentPosition===1)
            {
                this.setState({
                    currentPosition:0
                },()=>{
                    this.setBackground()
                })
            }
        }
        else if(arrow==='prev')
        {
            if(currentPosition===0)
            {
                this.setState({
                    currentPosition:1
                },()=>{
                    this.setBackground()
                })
            }
            else if(currentPosition===1)
            {
                this.setState({
                    currentPosition:0
                },()=>{
                    this.setBackground()
                })
            }            
        }
    }
    render() {
        var {currentPosition} = this.state;
        return (
        <div className="StorySlider">
            <div className="left_btn flex pointer heading4" >
                <i className="fas fa-long-arrow-alt-left" id='prev'
                onClick={(e)=>{this.changeBackground(e.target.id)}}></i>
            </div>
            <div className="story flex-col">
                {
                    currentPosition===0 ? 
                    <div >
                    <h1 className="pointer white light">Eons of Earth</h1>
                    <button className="pointer story_btn">READ THIS STORY</button>
                    </div>
                    :
                    <div >
                    <h1 className="pointer white light">Closer to Home</h1>
                    <button className="pointer story_btn">READ THIS STORY</button>
                    </div>
                }
            </div>
            <div className="right_btn flex pointer heading4">
                <i className="fas fa-long-arrow-alt-right" id="next" 
                onClick={(e)=>{this.changeBackground(e.target.id)}}></i>
            </div>
        </div>
        )
    }
}

export default StorySlider

// export default function StorySlider() {
//     setBackground(){
//         console.log(document.querySelector('.story'))
//     }
//     return (
//         <div className="StorySlider">
//             <div className="left_btn"></div>
//             <div className="story">
//                 {this.setBackground()}
//             </div>
//             <div className="right_btn"></div>
//         </div>
//     )
// }
