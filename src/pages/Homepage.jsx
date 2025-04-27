export default function Homepage() {

    document.body.classList.remove(
        'img-back',
        'img-back-2',
        'img-back-3',
        'img-back-home',
    );

    document.body.classList.add('img-back-home');

    return <div>

        <h1 className="text-center mt-4 mb-4 h1-title">BOOK ROOMS</h1>
        <div className="container text-center mb-4">
            <div className="row align-items-start my-gap">
                <div className="col-sm-12 col-md-5 col-lg-3 text-white">
                    <h3 className="fw-bold nosifer-regular">Cos'è una Book Room?</h3>
                    <div className="b-color rounded-2">
                        <p className="cal-sans-regular">Una Book Room è come un'escape room, però virtuale!</p>
                    </div>
                </div>
                <div className="col-sm-12 col-md-5 col-lg-3 text-white">
                    <h3 className="fw-bold nosifer-regular">Lo scopo</h3>
                    <div className="b-color rounded-2">
                        <p className="cal-sans-regular">Devi indovinare attraverso delle scelte, quale sia la via giusta per uscirne vivo!</p>
                    </div>
                </div>
                <div className="col-sm-12 col-md-5 col-lg-3 text-white">
                    <h3 className="fw-bold nosifer-regular">Pronto a metterti alla prova?</h3>
                    <div className="b-color rounded-2">
                        <p className="cal-sans-regular">"Logica, intuito e creatività: le Book Room sono il modo perfetto per mettere alla prova il tuo cervello divertendoti!"</p>
                    </div>
                </div>
                <div className="col-sm-12 col-md-5 col-lg-3 text-white">
                    <h3 className="fw-bold nosifer-regular">Un divertimento assicurato</h3>
                    <div className="b-color rounded-2">
                        <p className="cal-sans-regular">Chiunque abbia provato le nostre Book Room ne è uscito soddisfatto!</p>
                    </div>
                </div>
                <div className="col-sm-12 col-md-5 col-lg-3 text-white">
                    <h3 className="fw-bold nosifer-regular">Coinvolgimento narrativo</h3>
                    <div className="b-color rounded-2">
                        <p className="cal-sans-regular">Ogni Book Room è basata su una storia unica che ti trascina dentro un mondo misterioso. Sei il protagonista: le tue scelte scrivono il finale!</p>
                    </div>
                </div>
                <div className="col-sm-12 col-md-5 col-lg-3 text-white">
                    <h3 className="fw-bold nosifer-regular">Gioca dove e quando vuoi</h3>
                    <div className="b-color rounded-2">
                        <p className="cal-sans-regular">Ti basta un dispositivo e una connessione: nessun orario, nessun limite. Vivi l’esperienza ovunque ti trovi, da solo o in compagnia!</p>
                    </div>
                </div>
            </div>
        </div>

    </div>

};
