import "./style.scss";
import List from "./List";

export default function Layout() {
    return (
        <main>
            <div className="bin">
                <h1>Colors</h1>
                <List />
            </div>
        </main>
    );
}
