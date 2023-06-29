import { Link } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import "../styles/Breadcrumbs.css";

const routes = [
    { path: '/', breadcrumb: 'home' },
    { path: '/training', breadcrumb: 'training' },
    { path: '/dieting', breadcrumb: 'dieting' }
];

function Breadcrumbs() {
    const breadcrumbs = useBreadcrumbs();

    return (
        <h6 className="breadcrumbs_h6" >
            {breadcrumbs.map(({ match, breadcrumb }) => (
                <a key={match.pathname} href={match.pathname}>
                    <span> &gt; </span>
                    {breadcrumb}
                </a>
            ))}
        </h6>
    );
}

export default Breadcrumbs;