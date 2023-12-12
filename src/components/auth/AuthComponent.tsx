import '../../styles/AuthStyles.css';

const AuthComponent = () => {
    

    return (
        <div className='container'>
            <ul className='tabs'>
                <li className='leftTab '>
                    <a href='#login'>Login</a>
                </li>
                <li className='rightTab'>
                    <a href='#register'>Register</a>
                </li>
            </ul>
        </div>
    );
};

export default AuthComponent;