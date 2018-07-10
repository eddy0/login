import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Message = (props) => {
    return (
        <div className="form-message" style={props.valid ? null : {color: 'red'}  }>
            {props.children}
        </div>
    )
}


class SingnupForm extends Component {

    state= {
        message: '',
        isValid: false,
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('ok', this.email, this.password)

    }

    existChecking = (value) => {

        if (this.state.isValid) {
            // API.emailChecking(value)
            this.setState(() => {
                return {
                    message: 'you can use this name'
                }
            })
        }
    }

    validChecking = (e) => {
        let value = e.target.value
        let suffex = ['.com', '.net', '.cn']
        let isValid =  suffex.some((char) => {
                            return value.includes(char)
                        })  && value.includes('@')
        this.setState(() => ({
            isValid: isValid,
            message: 'the email is not valid'
        }), (value) => this.existChecking(value) )


    }

    passwordConfirming = () => {

    }

    render() {
        console.log(this.state.isValid)
        return (
            <form action="" onSubmit={this.handleSubmit} className="form__signup" autoComplete="off">
                <div className="form__box">
                    <input type="email"
                        id="email"
                        placeholder="E-mail"
                        ref={(email) => this.email = email}
                        onBlur={this.validChecking} />
                    <label htmlFor="email">E-mail

                    </label>
                    {
                        <Message valid={this.state.isValid} >{this.state.message}</Message>
                    }
                </div>
                <div className="form__box">

                    <input type="password"
                        id="password"
                        placeholder="password"
                        ref={(password) => this.password = password}/>
                    <label htmlFor="password">password</label>
                </div>
                <div className="form__box">

                    <input type="password"
                        id="password--confirm"
                        onChange={this.passwordConfirming}
                    placeholder="confirm password"/>
                    <label htmlFor="password--confirm">confirm password</label>
                </div>
                <button type="submit" className="btn btn__plain"  >Sign Up</button>
            </form>
        )
    }
}


SingnupForm.propTypes = {
    message: PropTypes.string.isRequired,
    isValid: PropTypes.bool.isRequired,
}


export default SingnupForm;
