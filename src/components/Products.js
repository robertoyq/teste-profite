import React, { Component } from 'react'
import img from '../img/product.png';
import off from '../img/off.png';
import arrowPrev from '../img/arrow-prev.png';
import arrowNext from '../img/arrow-next.png';

let products = [
    { "id": 0, "name": "Tenis Couro Puma R698 Q4 V2", "star": 1, "originalPrice": "299,00", "price": "399,00", "off": false, "img": img },
    { "id": 1, "name": "Tenis Couro Puma R698 Q4 V2", "star": 1, "originalPrice": "299,00", "price": "399,00", "off": true, "img": img },
    { "id": 2, "name": "Tenis Couro Puma R698 Q4 V2", "star": 1, "originalPrice": "299,00", "price": "399,00", "off": false, "img": img },
    { "id": 3, "name": "Tenis Couro Puma R698 Q4 V2", "star": 1, "originalPrice": "299,00", "price": "399,00", "off": false, "img": img },
    { "id": 4, "name": "Tenis Couro Puma R698 Q4 V2", "star": 1, "originalPrice": "299,00", "price": "399,00", "off": false, "img": img }
];

export default class Products extends Component {

    state = {
        limit: window.innerWidth > 1024 ? 4 : 2,
        minIndex: 0,
        scrollPosition: 0,
        scrollSize: 0,
        position: 0,
        items: []
    }

    componentDidMount() {
        let items = [...products];

        products = products.slice(0, this.state.limit);

        window.addEventListener("resize", this.updateDimensions)

        this.setState(() => {
            return {
                items
            }
        })
    }

    updateDimensions = () => {

        let { limit, items } = this.state;

        limit = window.innerWidth > 1024 ? 4 : 2;

        products = items.slice(0, limit);

        this.setState({ products, limit })

    }

    getPosition = () => {

        const lastIndex = this.state.items.length - 1;
        const resetIndex = this.state.minIndex == lastIndex;

        if (!resetIndex) {
            this.state.minIndex = this.state.minIndex + 1;
        } else {
            this.state.minIndex = 0;
        }
        this.setState({ minIndex: this.state.minIndex })

    }

    prev = () => {

        this.getPosition();

        const lastIndex = this.state.items.length - 1;
        let aux = this.state.minIndex;

        products = [];

        for (let i = 0; i < this.state.limit; i++) {

            if (aux == 0) {
                aux = lastIndex;
            }
            products.push(this.state.items[aux]);
            aux--;

        }

        this.setState({ minIndex: this.state.minIndex })
    }

    next = () => {

        this.getPosition();

        this.setSlide(this.state.minIndex);

        this.setState({ minIndex: this.state.minIndex })
    }

    setSlide(val) {
        let index = this.state.items.length - 1;
        let aux = val;

        products = [];

        for (let i = 0; i < this.state.limit; i++) {

            if (aux == index) {
                aux = 0;
            }
            products.push(this.state.items[aux]);
            aux++;
        }
    }

    setProduct = (e) => {

        var btnContainer = document.getElementById("products-slide");
        var btns = btnContainer.getElementsByClassName("product-wrapper");

        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function () {
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
            });
        }

    }

    dots = (e) => {

        const index = e.target.id - 0;

        var btnContainer = document.getElementById("product-dots");
        var btns = btnContainer.getElementsByClassName("product_dot-icon");

        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function () {
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
            });
        }

        this.setSlide(index);

        this.setState({ currentIndex: index });

    }

    render() {
        return (
            <div className="products">
                <div className="products-title">
                    Produtos
                </div>
                <div className="underline"></div>
                <div className="products-slide" id="products-slide">

                    <span className="carousel-arrow carousel-prev" onClick={this.prev}><img src={arrowPrev} alt="" /></span>
                    <span className="carousel-arrow carousel-next" onClick={this.next}><img src={arrowNext} alt="" /></span>

                    {(products.map(product => {
                        return (
                            <div key={product.id} className="product-wrapper" onClick={this.setProduct}>
                                {product.off ? <div className="product-off">
                                    <img src={off} alt={product.name} />
                                </div> : ''}
                                <div className="product-body">
                                    <img src={product.img} alt={product.name} />
                                    <div className="product-name">
                                        {product.name}
                                    </div>
                                    <div className="product-star">
                                        {product.star}
                                    </div>
                                    <div className="product-original">
                                        de R$ {product.price}
                                    </div>
                                    <div className="product-price">
                                        por <span className="price-text">R$ {product.price}</span>
                                    </div>
                                    <div className="product-text">
                                        our em 3x de R$ 133,00
                                    </div>
                                    <div className="product-btn">
                                        <button className="btn-custom">comprar</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }))}


                    <div className="product-dots" id="product-dots" onClick={this.dots}>
                        <span className="product_dot-icon" id="0" ></span>
                        <span className="product_dot-icon" id="1" ></span>
                        <span className="product_dot-icon" id="2"></span>
                        <span className="product_dot-icon" id="3"></span>
                    </div>
                </div>
            </div>

        )
    }
}
