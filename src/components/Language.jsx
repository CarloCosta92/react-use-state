import { useState } from "react";


// {
//     id: 1,
//     title: "HTML",
//     description: "HTML (HyperText Markup Language) è il linguaggio standard per creare pagine e applicazioni web. Struttura il contenuto web e fornisce elementi di base come titoli, paragrafi e immagini."
// },


export default function Language(props) {

    const [isOpen, setIsOpen] = useState(false);

    console.log(isOpen)

    return (
        <>
            <div >
                <button onClick={() => setIsOpen((display) => !display)}>{props.title}</button>

                <div>
                    <h2>{isOpen && props.title}</h2>
                    <p>{isOpen && props.description}</p>
                </div>
            </div>
        </>

    )

}

