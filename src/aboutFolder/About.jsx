import { Link } from 'react-router-dom';

const About = () => {
    return (
        <>
            <h1>About us Page</h1>
            <h3>We are a club!</h3>
            <Link to='/'>Go Home</Link>
        </>
    );
};

export default About;