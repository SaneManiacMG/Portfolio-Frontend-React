import '../../styles/AuthStyles.css';

type onClick = () => void;

const AuthComponent = () => {
    const loginClicked: onClick = () => {
        console.log('login clicked');
        alert('login clicked');
    }

    const registerClicked: onClick = () => {
        console.log('register clicked');
        alert('register clicked');
    }

    return (
        <div className='container'>
            <div>
                <ul className='tabs'>
                    <li className='leftTab '>
                        <a
                            onClick={loginClicked}
                            href='#login'>Login</a>
                    </li>
                    <li className='rightTab'>
                        <a
                            onClick={registerClicked}
                            href='#register'>Register</a>
                    </li>
                </ul>
            </div>
            <div className='tabContent'>
                Some dummy content
            </div>
        </div>
    );
};

export default AuthComponent;