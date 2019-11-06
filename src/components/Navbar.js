import React, { Component } from 'react';
import logo from '../img/logo.png';
import bar from '../img/bar.png';
import user from '../img/user.png';
import cart from '../img/cart.png';
import lupa from '../img/lupa.png';
import br from '../img/br.png';
import es from '../img/es.png';
import en from '../img/en.png';

export default class Navbar extends Component {
    state = {
        isOpen: false,
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        window.addEventListener("resize", this.updateDimensions)
    }


    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    updateDimensions = () => {
        let { isOpen, open } = this.state;
        if (window.innerWidth >= 768) {
            isOpen = false;
        }
        this.setState({
            isOpen, open
        });
    }

    render() {
        return (
            <div className="navbar navbar-expand-md">
                <span className="nav-lang" onClick={this.handleToggle}>
                    <img src={bar} alt="" className="search-icon" />
                </span>
                <div className="brand">
                    <img src={logo} alt="" className="" />
                </div>
                <form className="form-inline search-bar">
                    <input className="form-control" type="search" placeholder="O que você está procurando?" aria-label="Search"
                    />
                    <a href="#">
                        <img src={lupa} alt="" className="search-icon" />
                    </a>
                </form>

                <ul className="navbar-nav user-wrapper">
                    <li className="nav-item">
                        <a href="#" className="nav-link user-icon">
                            <img src={user} alt="" className="" />
                            <span className="user-text"> Minha Conta</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link cart-icon">
                            <img src={cart} alt="" className="" />
                            <span className="badge">1
                                                </span>
                        </a>
                    </li>
                </ul>
                <div className="divider"></div>
                <ul className={this.state.isOpen ? "navbar-nav show-navlang flags" : "navbar-nav flags nav-hidden"}>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <img src={br} alt="" className="" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <img src={es} alt="" className="" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <img src={en} alt="" className="" />
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}
