import { Link, useParams } from "react-router-dom";

const Archer = () => {
    const param = useParams();
    return (
        <>
            <h1>Archer {param.archerId}</h1>
            <Link to='/archers'>Go back</Link>
        </>
    );
};

export default Archer;