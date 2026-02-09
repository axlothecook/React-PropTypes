import { Link, Outlet } from 'react-router-dom';

const Archers = () => {
    const archerList = [1, 2, 3, 4, 5];
    return (
        <>
            <h1>Archers Page</h1>
            <Link to='/'>Go Home</Link>
            <nav>
                <ul>
                    {archerList.map((item) => (
                        <li key={item}>
                            <Link key={item} to={`/archers/${item}`}>Archer {item}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <Outlet />
        </>
    );
};

export default Archers;