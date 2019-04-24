import React from 'react';

export default class LoginForm extends React.Component<Props> {

    render(){
        return (
            <div>
                <form method='POST'>
                    <input type='text'/>
                    <input type='password'/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }

}