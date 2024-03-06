import "./style.scss";
import List from "./List";
import { useContext } from "react";
import { Data } from "./Data";
import Delete from "./Delete";
import Edit from "./Edit";
import { Head } from "@inertiajs/react";
import Create from "./Create";

export default function Layout() {
    const { deleteColor, editColor, createColor } = useContext(Data);

    return (
        <>
            <Head title="Magic Colors" />
            <main>
                <div className="bin">
                    <h1>Colors</h1>
                    <List />
                    {deleteColor && <Delete />}
                    {editColor && <Edit />}
                    {createColor && <Create />}
                </div>
            </main>
        </>
    );
}
