
// {
//     id: 1,
//     title: "HTML",
//     description: "HTML (HyperText Markup Language) è il linguaggio standard per creare pagine e applicazioni web. Struttura il contenuto web e fornisce elementi di base come titoli, paragrafi e immagini."
// },


const Language = ({ title, description, isOpen, onClick }) => {
    return (
        <div>
            <button onClick={onClick}>{title}</button>
            <div>
                <h2>{isOpen && title}</h2>
                <p>{isOpen && description}</p>
            </div>
        </div>
    );
};

export default Language;
