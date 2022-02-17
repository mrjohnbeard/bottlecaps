import './CategoryList.css';
export default function CategoryList({ categories, activeTaco, setActiveTaco }) {
    const tacos = categories.map(taco =>
        <li
            key={taco}
            className={taco === activeTaco ? 'active' : ''}
            onClick={() => setActiveTaco(taco)}
        >
            {taco}
        </li>
    );
    return (
        <ul className="CategoryList">
            {tacos}
        </ul>
    );
}
