import React, { Component } from 'react'
import banner from '../img/banner.png';
import arrowPrev from '../img/slide-prev.png';
import arrowNext from '../img/slide-next.png';

var slides = [
    { id: '0', img: banner, primary: 'Nossa especialidade: ', secondary: 'experiência de compra.', item: 'underline' },

    { id: '1', img: 'https://static.pexels.com/photos/7360/startup-photos-large.jpg' },
    { id: '2', img: 'https://static.pexels.com/photos/8807/sopot-medium.jpg' },
    { id: '3', img: 'https://static.pexels.com/photos/8807/sopot-medium.jpg' },

]

const Carousel = ({ slide }) => {
    const styles = {
        backgroundImage: `url(${slide.img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };

    return (
        <div className={`banner-slide slide-${slide.id}`}>
            <div className="slide-img" style={styles}></div>
            <div className="banner-wrapper">
                <div className="banner-text">{slide.primary}
                    <div>{slide.secondary}</div>
                    <div className={slide.item}></div>
                </div>
            </div>
        </div>
    );
};


export default class Banner extends Component {
    state = {
        currentIndex: 0
    };

    previous = () => {
        const lastIndex = slides.length - 1;
        const resetIndex = this.state.currentIndex === 0;
        const index = resetIndex ? lastIndex : this.state.currentIndex - 1;
        
        this.setState({ currentIndex: index });
    };

    next = (e) => {
        const lastIndex = slides.length - 1;
        const resetIndex = this.state.currentIndex === lastIndex;
        const index = resetIndex ? 0 : this.state.currentIndex + 1;


        this.setState({ currentIndex: index });
    };

    dots = (e) => {

        const index = e.target.id - 0;

        console.log(index);

        var btnContainer = document.getElementById("banner-dots");
        var btns = btnContainer.getElementsByClassName("dot-icon");

        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function () {
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
            });
        }

        this.setState({ currentIndex: index });

    }

    render() {
        return (
            <div className="banner">
                <Carousel slide={slides[this.state.currentIndex]} />

                <span className="slide-arrow arrow-prev" onClick={this.previous}><img src={arrowPrev} alt="" /></span>
                <span className="slide-arrow arrow-next" onClick={this.next}><img src={arrowNext} alt="" /></span>

                <div className="banner-dots" id="banner-dots" onClick={this.dots}>
                    <span className="dot-icon active" id="0" ></span>
                    <span className="dot-icon" id="1" ></span>
                    <span className="dot-icon" id="2"></span>
                    <span className="dot-icon" id="3"></span>
                </div>
            </div >
        )
    }
}
