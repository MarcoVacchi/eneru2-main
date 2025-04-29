import { useState, useEffect } from "react";
import axios from "axios";

export default function Recensioni() {

    const endPoint = ('http://127.0.0.1:3003/reviews/');
    const [alert, setAlert] = useState({ type: '', message: '', alert: '' });
    const [array, setArray] = useState([]);
    const [loading, setLoading] = useState(true);

    function loadData() {
        setLoading(true);
        axios.get(endPoint)
            .then(res => {
                setArray(res.data);
                setLoading(false);
            })
    };
    useEffect(() => {
        loadData();
    }, [alert]);

    document.body.classList.remove(
        'img-back',
        'img-back-2',
        'img-back-3',
        'img-back-home',
        'img-back-games'
    );

    const [formData, setFormData] = useState({
        email: '',
        name: '',
        description: '',
        valutation: '★'
    });

    function handleFormData(event) {
        const value = event.target.value;

        setFormData((formData) => ({
            ...formData,
            [event.target.name]: value,
        }));
    };

    function savePost(event) {
        event.preventDefault();
        console.log(formData);

        axios.post(endPoint, formData)
            .then(res => {
                console.log(res.data);
                setAlert({
                    type: 'success',
                    message: 'Form inviato con successo!',
                    alert: 'Form inviato con successo!'
                });
            })
            .catch(error => {
                console.error(error);
                setAlert({
                    type: 'danger',
                    message: 'Invio form non riuscito!',
                    alert: 'Form non inviato con successo!'
                });
            });
    };


    function star(vote) {

        let star = ''
        for (let index = 0; index < vote; index++) {
            star += '★'

        }
        return star
    }

    return <>
        <div className='container mt-3'>
            {alert.message && (
                <div className={`alert alert-${alert.type}`}>
                    {alert.message}
                </div>
            )}
            <form onSubmit={savePost} className="my-form">
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="text"
                        name='email'
                        value={formData.email}
                        onChange={handleFormData}
                        placeholder='Inserisci una mail valida'
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Nome</label>
                    <input type="text"
                        name='name'
                        value={formData.name}
                        onChange={handleFormData}
                        placeholder='Inserisci il tuo nome'
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Valutazione</label>
                    <input type="number"
                        name='valutation'
                        value={formData.valutation}
                        onChange={handleFormData}
                        placeholder='Votazione: 1-5 ★'
                        className="form-control"
                        min={1} max={5}
                    />
                </div>

                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Lasciaci un feedback</label>
                    <textarea type="text"
                        name='description'
                        value={formData.description}
                        onChange={handleFormData}
                        placeholder='Lasciaci un feedback'
                        className="form-control" id="exampleFormControlTextarea1" rows="4"
                    />
                </div>

                <button type="submit" className="btn btn-primary">Invia recensione</button>
            </form>
        </div>

        {loading ? (
            <div>Caricamento in corso...</div>
        ) : (
            array.map(({ name, description, valutation }, index) => (
                <div key={index} className="container text-bg-secondary mb-2 mt-5 rounded-3 p-2 card-form my-form">
                    <h3 className="card-header mb-2">Valutazione:  <span className="text-warning">{star(valutation)}</span></h3>
                    <div className="card-body">
                        <h5 className="card-title mb-2">User: {name}</h5>
                        <textarea className="form-control mb-3" rows="3">{description}</textarea>
                    </div>
                </div>
            ))
        )}
    </>
};
