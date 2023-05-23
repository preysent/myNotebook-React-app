import { useState } from "react";
import noteContext from "./NoteContext";

const NoteState = (props) => {
    const s1 = {
        name: "praveen",
        class: "FyBscIt"
    }

    const [state, setState] = useState(s1);

    const update = () => {
        setTimeout(() => {
            setState({
                name: "pramod",
                class: "okkk"
            })
        }, 2000)

    }

    return (
        <noteContext.Provider value={{ state, update }}>
            {props.children}
        </noteContext.Provider>
    )
}



export default NoteState