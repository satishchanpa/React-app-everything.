import React from 'react';
import './design.css';
import { useState } from 'react';

export function Form() {
        const [formData, setFormData] = useState({});
        const [submitSuccess, setsubmitSuccess] = useState(false);

        let getInput = (name, value) => {

                let data = { [name]: value }
                setFormData({ ...formData, ...data });
        }

        let submit = (event) => {
                event.preventDefault()
                console.log(formData)
                setsubmitSuccess(true);
        }

        return (
                <div>
                        <form onSubmit={submit}>
                                <div className='form' >
                                        <input placeholder='write your name here...'
                                                name='name'
                                                type='text'
                                                onChange={(event) => getInput(event.target.name, event.target.value)}
                                        /><br />
                                        <input placeholder='write your age...'
                                                name='age'
                                                type='number'
                                                onChange={(event) => getInput(event.target.name, event.target.value)}
                                        /><br />
                                        <input placeholder='write your email...'
                                                name='email'
                                                type='email'
                                                onChange={(event) => getInput(event.target.name, event.target.value)}
                                        /><br />
                                        <input placeholder='date...'
                                                name='date'
                                                type='date'
                                                onChange={(event) => getInput(event.target.name, event.target.value)}
                                        /><br />
                                        <button type='submit'> submit</button>
                                        <button type='reset'> Reset</button>
                                </div>
                        </form>

                        {submitSuccess ? <div className='formUser'> <h1> Successfully Submited the form</h1>
                                {Object.values(formData).map((val) => <ul><li>{val}</li></ul>)} </div> : null}

                </div>
        )
}
