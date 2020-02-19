import React, { Component } from "react";
// import PropTypes from "prop-types";
import "../styles/service.scss";
import Popup from "reactjs-popup";

class ServiceTemplate extends Component {
    render () {
        return (
            <div className="col">
                <section className="service">
                    <div className="service__wrapper">
                        <h2 className="service__price">{this.props.service.price} ₽ / м<sup>2</sup> </h2>
                        <span className="service__item">{this.props.service.deadline}</span>
                        <span className="service__item">{this.props.service.row1}</span>
                        <span className="service__item">{this.props.service.row2}</span>
                        <span className="service__item">{this.props.service.row3}</span>
                        <span className="service__item">{this.props.service.row4}</span>
                        {/* <Popup trigger={<button className="service__button button-reset"><span>{this.props.service.buttontext}</span></button>} modal> */}
                        <Popup
                            trigger={<button className="button service__button"><span>{this.props.service.buttontext}</span></button>}
                            modal
                            closeOnDocumentClick
                        >
                             {close => (
                            <form className="form container">
                            <a className="close" onClick={close}>
                            &times;
                            </a>
                                <div className="form__wrapper">
                                <h4 class="visually-hidden">Форма обратной связи</h4>
				
                <div class="row">
                    <div class="col">
            
                        <div class="form__item">
                            <label for="name" class="visually-hidden">Имя</label>
                            <input type="text" placeholder="Ваше имя*" name="name" required/>
                        </div>
            
                    </div>
                </div>
            
                <div class="row">
                    <div class="col">
            
                        <div class="form__item">
                            <label for="phone" class="visually-hidden">Телефон</label>
                            <input type="text" placeholder="Телефон*" name="phone" required/>
                        </div>
            
                    </div>
                </div>
            
                <div class="row">
                    <div class="col">
            
                        <div class="form__item">
                            <label for="email" class="visually-hidden">Электронная почта</label>
                            <input type="text" placeholder="Электронная почта*" name="email" required/>
                        </div>
            
                    </div>
                </div>
            
                <div class="row">
                    <div class="col">
            
                        <div class="form__item">
                            <label for="name" class="visually-hidden">Тип объекта</label>
                            <input type="text" placeholder="Тип объекта" name="name"/>
                        </div>
            
                    </div>
                </div>
            
                <div class="row">
                    <div class="col">
            
                        <div class="form__item">
                            <label for="name" class="visually-hidden">Площадь</label>
                            <input type="text" placeholder="Площадь, м²" name="name"/>
                        </div>
            
                    </div>
                </div>
            
                <div class="row">
                    <div class="col">
            
                        <div class="form__item">
                            <label for="name" class="visually-hidden">Комментарий</label>
                            <input type="textarea" placeholder="Комментарий" name="name"/>
                        </div>
            
                    </div>
                </div>
            
                <div class="row">
                    <div class="col">
                        <button type="submit" class="form__button button ">Отправить</button>
                    </div>
                </div> 
                                </div>



                            </form>
                            )}
                        </Popup>

                        
                    </div>
                </section>


            </div>

        )
    }
}

// ProjectTemplate.propTypes = {
//     project: PropTypes.shape({
//         title: PropTypes.string,
//         year: PropTypes.string,
//     }),
// };

export default ServiceTemplate;