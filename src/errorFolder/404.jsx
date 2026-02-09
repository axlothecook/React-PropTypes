import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <>
            <h1>404 page does not exist</h1>
            <h2>Return to <Link to='/'>Home page</Link></h2>
        </>
    );
};

export default ErrorPage;