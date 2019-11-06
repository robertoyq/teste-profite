import React, { Component } from 'react'
import contact from '../img/contact.png';
import fone from '../img/fone.png';
import vtex from '../img/vtex.jpg';
import profit from '../img/profit.jpg';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-wrapper">
                    <div className="footer-primary">
                        Localização
                    </div>
                    <div className="underline"></div>
                    <div className="footer-card">
                        <div className="footer-section">
                            <div className="footer-left">
                                <div className="footer-title">
                                    São Paulo
                                </div>
                                <div className="footer-text">
                                    <div className="">Rua do Rócio, 423/1801</div>
                                    <div className="">Vila Olimpia - SP</div>
                                    <div className="">04552-000</div>
                                    <div className="">+55 11 3333 3333</div>
                                </div>
                            </div>
                            <div className="footer-right">
                                <div className="footer-title">
                                    Rio de Janeiro
                                </div>
                                <div className="footer-text">
                                    <div className="">Vol. da Pátria, 301/702</div>
                                    <div className="">Botafogo - RJ</div>
                                    <div className="">22270-000</div>
                                    <div className="">+55 21 3333 3333</div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-contact">
                            <div className="footer-btn">
                                <div className="footer-btn_icon">
                                    <img src={contact} alt="" className="search-icon" />
                                </div>
                                <div className="footer-btn_icon">
                                    Entre em contato
                                </div>
                            </div>
                            <div className="footer-btn">
                                <div className="footer-btn_icon">
                                    <img src={fone} alt="" className="search-icon" />
                                </div>
                                <div className="footer-btn_icon">
                                    Fale com o nosso consultor online
                                </div>
                            </div>
                        </div>
                        <div className="footer-info">
                            <div className="footer-icon">
                                <img src={profit} alt="" className="search-icon" />
                            </div>
                            <div className="footer-icon">
                                <img src={vtex} alt="" className="search-icon" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom"></div>
            </div>
        )
    }
}
