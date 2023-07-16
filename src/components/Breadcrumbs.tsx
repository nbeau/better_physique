import useBreadcrumbs from 'use-react-router-breadcrumbs';
import "../styles/Breadcrumbs.css";
import { Link } from 'react-router-dom';

const routes_english = [
    { path: '/', breadcrumb: 'home' },
    { path: '/training', breadcrumb: 'training' },
    { path: '/dieting', breadcrumb: 'dieting' },
    { path: '/analysis', breadcrumb: 'analysis' },
    { path: '/training/strength', breadcrumb: 'strength' },
    { path: '/training/hypertrophy', breadcrumb: 'hypertrophy' },
    { path: '/training/endurance', breadcrumb: 'endurance' },
    { path: '/dieting/bulking', breadcrumb: 'bulking' },
    { path: '/dieting/cutting', breadcrumb: 'cutting' },
    { path: '/dieting/maintaining', breadcrumb: 'maintaining' },

];

const routes_french = [
    { path: '/', breadcrumb: 'foyer' },
    { path: '/training', breadcrumb: 'entrainement' },
    { path: '/dieting', breadcrumb: 'régime' },
    { path: '/analysis', breadcrumb: 'analyse' },
    { path: '/training/strength', breadcrumb: 'force' },
    { path: '/training/hypertrophy', breadcrumb: 'hypertrophie' },
    { path: '/training/endurance', breadcrumb: 'endurance' },
    { path: '/dieting/bulking', breadcrumb: 'gonflage' },
    { path: '/dieting/cutting', breadcrumb: 'coupe' },
    { path: '/dieting/maintaining', breadcrumb: 'maintien' },

];

interface Props {
    lang: string;
}

function Breadcrumbs({ lang }:Props) {
    const breadcrumbs = useBreadcrumbs(lang === "english" ? routes_english : routes_french);

    return (
        <h6 className="breadcrumbs_h6" >
            {breadcrumbs.map(({ match, breadcrumb }) => (
                <Link key={match.pathname} to={match.pathname} >
                    <span> &gt; </span>
                    {breadcrumb}
                </Link>
            ))}
        </h6>
    );
}

export default Breadcrumbs;