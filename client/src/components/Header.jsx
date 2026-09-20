export default function Header() {
    return (
        <header className="topbar">
            <div>
                <p className="eyebrow">Учебный проект</p>
                <h1>Добро пожаловать в TaskFlow</h1>
                <p className="subtitle">Здесь будут собраны ваши задачи, проекты и
                прогресс. Ниже можно ознакомиться со списком задач.</p>
            </div>
            <button className="primaryButton" type="button">
            + Новая задача
            </button>
        </header>
    );
}