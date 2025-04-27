export default function About() {

    document.body.classList.remove(
        'img-back',
        'img-back-2',
        'img-back-3',
        'img-back-home',
        'img-back-games'
    );
    document.body.classList.remove('img-back-home');

    return <div className="container mt-5">

        <h1 className="mb-4">Di noi</h1>
        <p>
            Siamo <strong>Marco Vacchi</strong> ed <strong>Enrico Ciccolini</strong>, due sviluppatori junior con una passione per il codice, le storie coinvolgenti e le esperienze interattive.
        </p>
        <p>
            Il nostro progetto si chiama <strong>Book Room</strong>: un mix tra varie escape rooms e delle avventure narrative, tutta in formato digitale. L'idea è semplice ma ambiziosa: mettere alla prova la logica, l'intuizione e la curiosità dei giocatori attraverso scelte, enigmi e percorsi diversi, dove ogni decisione può cambiare il finale.
        </p>
        <p>
            Stiamo costruendo questa esperienza passo dopo passo, imparando e crescendo ogni giorno nel mondo dello sviluppo web. Il nostro obiettivo? Creare qualcosa di originale, divertente e immersivo, che possa sorprendere e intrattenere chiunque voglia mettersi alla prova.
        </p>
        <p>
            Un ringraziamento speciale va ad <strong>Eneru Escape</strong> per aver condiviso con noi l'entusiasmante storia che anima la Book Room. La loro generosità è stata fondamentale per dare vita a questo progetto!
        </p>
        <p>
            Grazie per essere qui e buon divertimento nella tua avventura nella Book Room!
        </p>
        <p>
            <p>Version: Beta</p>
        </p>

    </div>
};
