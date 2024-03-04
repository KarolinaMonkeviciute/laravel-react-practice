import "./style.scss";
import List from "./List";
import { useContext } from "react";
import { Data } from "./Data";
import Delete from "./Delete";

export default function Layout() {
    const { deleteColor } = useContext(Data);

    return (
        <main>
            <div className="bin">
                <h1>Colors</h1>
                <List />
                {deleteColor && <Delete />}
            </div>
        </main>
    );
}
