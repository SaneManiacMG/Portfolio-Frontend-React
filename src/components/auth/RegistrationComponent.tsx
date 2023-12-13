import React from 'react';

const RegistrationComponent = () => {
    console.log("Registration component rendered");

    return (
        <div>
            <form onSubmit={() => { }}>
                <div className='labelInput'>
                    <label htmlFor='firstName' autoFocus>First Name:</label>
                    <input type='text' name='firstName' autoComplete='true' />
                </div>
                <div className='labelInput'>
                    <label htmlFor='lastName'>Last Name:</label>
                    <input type='text' name='lastName' autoComplete='true' />
                </div>
                <div className='labelInput'>
                    <label htmlFor='username'>Username:</label>
                    <input type='text' name='username' autoComplete='true' />
                </div>
                <div className='labelInput'>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' name='email' autoComplete='true' />
                </div>
                <div className='labelInput'>
                    <label htmlFor='phoneNr'>Phone Number:</label>
                    <input type='tel' name='phoneNr' autoComplete='true' />
                </div>
                <div className='btnCollection'>
                    <input type='reset' value='Reset' />
                    <input type='submit' value='Register' />
                </div>
            </form>
        </div>
    );
};

export default RegistrationComponent;