import { Link } from "react-router-dom"

const DefaultPage = () => {
    return (
        <>
        <h1>Default page for archers</h1>
        <Link to='/'>Go Back To Archers</Link>
        </>
    );
};

export default DefaultPage;