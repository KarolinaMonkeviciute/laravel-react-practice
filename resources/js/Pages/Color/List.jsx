import { useContext } from "react";
import { Data } from "./Data";

export default function List() {
    const { colors } = useContext(Data);
    return (
        <div className="colors">
            {colors.map((color) => {
                return (
                    <div
                        key={color.id}
                        className="color"
                        style={{
                            backgroundColor: color.hex + "66",
                            width: color.size + "px",
                            height: color.size + "px",
                            border: "4px solid" + color.hex,
                        }}
                    >
                        <p>{color.hex}</p>
                    </div>
                );
            })}
        </div>
    );
}
