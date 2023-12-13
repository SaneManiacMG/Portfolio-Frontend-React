import { useEffect, useState } from 'react';
import '../../styles/FormStyles.css';
import LoginComponent from './LoginComponent';
import RegistrationComponent from './RegistrationComponent';

const AuthComponent = () => {
    useEffect(() => {
        console.log("Auth component rendered");

    }, [])

    const [selectedTab, setSelectedTab] = useState<string>('login');

    const loginClicked = (event: React.MouseEvent) => {
        event.preventDefault();
        setSelectedTab('login');
    };

    const registerClicked = (event: React.MouseEvent) => {
        event.preventDefault();
        setSelectedTab('register');
    };

    return (
        <div className='container'>
            <div>
                <ul className='tabs'>
                    <li className='leftTab '>
                        <a
                            onClick={loginClicked}
                            href='login'>Login</a>
                    </li>
                    <li className='rightTab'>
                        <a
                            onClick={registerClicked}
                            href='register'>Register</a>
                    </li>
                </ul>
            </div>
            <div className='tabContent'>
                {selectedTab === 'login' && <LoginComponent />}
                {selectedTab === 'register' && <RegistrationComponent />}
            </div>
        </div>
    );
};

export default AuthComponent;