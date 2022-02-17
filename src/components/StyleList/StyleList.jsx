import './StyleList.css';
export default function StyleList({ styles, activeTaco, setActiveTaco }) {
    const tacos = styles.map(taco =>
        <li
            key={taco}
            className={taco === activeTaco ? 'active' : ''}
            onClick={() => setActiveTaco(taco)}
        >
            {taco}
        </li>
    );
    return (
        <ul className="StyleList">
            {tacos}
        </ul>
    );
}
