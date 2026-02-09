import { Link, Outlet } from 'react-router-dom';

const Products = () => {
    const links = ['bow1', 'bow2', 'bow3'];

    return (
        <>
            <h1>Products Page</h1>
            <Link to='/'>Return Home</Link>
            <ul>
                {links.map((link) => (
                    <li key={link}>
                        <Link to={link}>{link}</Link>
                    </li>
                ))}
            </ul>
            <Outlet />
        </>
    );
};

export default Products;