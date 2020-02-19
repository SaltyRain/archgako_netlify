import React, { Component } from "react";
import * as emailjs from 'emailjs-com';
// import PropTypes from "prop-types";
import "../styles/service.scss";
import Popup from "reactjs-popup";

// import { Button, FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap'
import {Button, FormFeedback, Form, FormGroup, Label, Input } from "react-bootstrap"
class ServiceTemplate extends Component {
    state = {
        name: '',
        email: '',
        tel: '',
        objectType: '',
        square: '',
        message: '',
      }
    handleSubmit(e) {
        e.preventDefault()
        const { name, email, tel, objectType, square, message } = this.state
        let templateParams = {
          from_name: email,
          to_name: 'archgako@gmail.com',
          subject: 'Запрос с сайта',
          message_html: message,
         }
         emailjs.send(
          'gmail',
          'template_MnGcma3j',
           templateParams,
          'user_w62oUVOF8qCHnDLLDcTDk'
         )
         this.resetForm()
     }
    resetForm() {
        this.setState({
            name: '',
            email: '',
            tel: '',
            objectType: '',
            square: '',
            message: '',
        })
      }
    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
      }
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
                    //         <Form onSubmit={this.handleSubmit.bind(this)}>
                    //             <FormGroup controlId="formBasicEmail">
                    //             <Label className="text-muted">Email address</Label>
                    //             <Input
                    //                 type="email"
                    //                 name="email"
                    //                 value={this.state.email}
                    //                 className="text-primary"
                    //                 onChange={this.handleChange.bind(this, 'email')}
                    //                 placeholder="Enter email"
                    //             />
                    //             </FormGroup>
                    // <FormGroup controlId="formBasicName">
                    //             <Label className="text-muted">Name</Label>
                    //             <Input
                    //                 type="text"
                    //                 name="name"
                    //                 value={this.state.name}
                    //                 className="text-primary"
                    //                 onChange={this.handleChange.bind(this, 'name')}
                    //                 placeholder="Name"
                    //             />
                    //             </FormGroup>
                    // <FormGroup controlId="formBasicSubject">
                    //             <Label className="text-muted">Subject</Label>
                    //             <Input
                    //                 type="text"
                    //                 name="subject"
                    //                 className="text-primary"
                    //                 value={this.state.subject}
                    //                 onChange={this.handleChange.bind(this, 'subject')}
                    //                 placeholder="Subject"
                    //             />
                    //             </FormGroup>
                    // <FormGroup controlId="formBasicMessage">
                    //             <Label className="text-muted">Message</Label>
                    //             <Input
                    //                 type="textarea"
                    //                 name="message"
                    //                 className="text-primary"
                    //                 value={this.state.message}
                    //                 onChange={this.handleChange.bind(this, 'message')}
                    //             />
                    //             </FormGroup>
                    // <Button variant="primary" type="submit">
                    //             Submit
                    //             </Button>
                    //         </Form>       
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
                            <input type="text" 
                            placeholder="Ваше имя*"
                            type="text"
                            name="name" 
                            value={this.state.name}
                            onChange={this.handleChange.bind(this, 'name')}
                            required/>
                        </div>
            
                    </div>
                </div>
            
                <div class="row">
                    <div class="col">
            
                        <div class="form__item">
                            <label for="phone" class="visually-hidden">Телефон</label>
                            <input 
                            type="text" 
                            placeholder="Телефон*" 
                            name="phone" 
                            value={this.state.tel}
                            onChange={this.handleChange.bind(this, 'tel')}
                            required/>
                        </div>
            
                    </div>
                </div>
            
                <div class="row">
                    <div class="col">
            
                        <div class="form__item">
                            <label for="email" class="visually-hidden">Электронная почта</label>
                            <input type="text" 
                            placeholder="Электронная почта*" 
                            name="email" 
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange.bind(this, 'email')}
                            required/>
                        </div>
            
                    </div>
                </div>
            
                <div class="row">
                    <div class="col">
            
                        <div class="form__item">
                            <label for="typeObject" class="visually-hidden">Тип объекта</label>
                            <input 
                            type="text" 
                            placeholder="Тип объекта" 
                            name="typeObject"
                            value={this.state.objectType}
                            onChange={this.handleChange.bind(this, 'objectType')}
                            
                            />

                        </div>
            
                    </div>
                </div>
            
                <div class="row">
                    <div class="col">
            
                        <div class="form__item">
                            <label for="square" class="visually-hidden">Площадь</label>
                            <input type="text"
                             placeholder="Площадь, м²" 
                             name="square"
                             value={this.state.square}
                            onChange={this.handleChange.bind(this, 'square')}
                             />
                        </div>
            
                    </div>
                </div>
            
                <div class="row">
                    <div class="col">
            
                        <div class="form__item">
                            <label for="message" class="visually-hidden">Комментарий</label>
                            <input type="textarea" p
                            placeholder="Комментарий" 
                            name="message"
                            value={this.state.message}
                            onChange={this.handleChange.bind(this, 'message')}

                            
                            />
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