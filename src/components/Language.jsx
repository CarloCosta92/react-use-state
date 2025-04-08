
// {
//     id: 1,
//     title: "HTML",
//     description: "HTML (HyperText Markup Language) è il linguaggio standard per creare pagine e applicazioni web. Struttura il contenuto web e fornisce elementi di base come titoli, paragrafi e immagini."
// },


export default function Language({ title, onClick }) {
    return (
        <button onClick={onClick}>
            {title}
        </button>
    );
}



