import React from 'react';

const LoginComponent = () => {
    console.log("Login component rendered");

    const [rememberMe, setRememberMe] = React.useState<boolean>(false);

    const login = (event: React.FormEvent<HTMLFormElement>) => {
        const data = new FormData(event.currentTarget);
        console.log({
            username: data.get('username'),
            password: data.get('password')
        });
        event.preventDefault();
    }

    const handleRememberMeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRememberMe(event.target.checked);
    }

    return (
        <div>
            <form onSubmit={login}>
                <div className='labelInput'>
                    <label htmlFor='username' autoFocus>Username:</label>
                    <input type='text' name='username' autoComplete='true' />
                </div>
                <div className='labelInput'>
                    <label htmlFor='password'>Password:</label>
                    <input type='password' name='password' autoComplete='true' />
                </div>

                <div className='btnCollection'>
                    <input type='submit' value='Login' />
                </div>
            </form>
        </div>
    );
};

export default LoginComponent;