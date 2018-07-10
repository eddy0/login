import React, {Component} from 'react';

class SingnupForm extends Component {
    render() {
        return (<form action="" className="form__signup" autoComplete="off">
            <div className="form__box">

                <input type="text" id="email" placeholder="E-mail"/>
                <label htmlFor="email">E-mail</label>
            </div>
            <div className="form__box">

                <input type="text" id="password" placeholder="password"/>
                <label htmlFor="password">password</label>
            </div>
            <div className="form__box">

                <input type="text" id="password--confirm" placeholder="confirm password"/>
                <label htmlFor="password--confirm">confirm password</label>
            </div>
            <button className="btn btn__plain">Sign Up</button>
        </form>);
    }
}

export default SingnupForm;
