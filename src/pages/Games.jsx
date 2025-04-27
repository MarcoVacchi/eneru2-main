import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Games() {

    function removeBg() {

        document.body.classList.remove(
            'img-back',
            'img-back-2',
            'img-back-3',
            'img-back-home',
        );
        document.body.classList.add('img-back-games');
    };

    useEffect(() => {
        removeBg();
    }, []);

    return <div>

        <h2 className="text-center text-red fw-bold mt-5 mb-5 creepster-regular">Easiest level</h2>
        <div className="d-flex justify-content-center mt-5 gap-container">
            <div className="card">
                <img src="/manicomio.jpg" className="card-img-top" alt="ultimo" />
                <div className="card-body">
                    <h3 className="card-title nosifer-regular">L'ultimo reparto</h3>
                    <p className="card-text fw-bold cal-sans-regular">Sarai solo, un manicomio, spettrale, un'unica uscita... Riuscirai a trovarla?</p>
                    <div className="d-flex justify-content-center">
                        <Link className="btn btn-secondary" to={"/games/ultimo/:1"} >Gioca ora </Link>
                    </div>
                </div>
            </div>

            <div className="card">
                <img src="/mano.jpg" className="card-img-top" alt="sepolti-vivi" />
                <div className="card-body">
                    <h3 className="card-title nosifer-regular">Sepolti Vivi </h3>
                    <p className="card-text fw-bold cal-sans-regular">Sarai solo, sotto terra, in compagnia di ratti e scheletri, un'unica uscita... Riuscirai a trovarla?</p>
                    <div className="d-flex justify-content-center">
                        <Link className="btn btn-secondary" to={"/games/sepolti/:1"} >Gioca ora </Link>
                    </div>
                </div>
            </div>
        </div>

        <h2 className="text-center text-red fw-bold mt-5 mb-5 creepster-regular">Hardest level</h2>
        <div className="d-flex justify-content-center mt-5 gap-container">
            <div className="card mb-5">
                <img src="/horror.jpg" className="card-img-top h-pick" alt="horror-story" />
                <div className="card-body">
                    <h3 className="card-title nosifer-regular">Horror Story</h3>
                    <p className="card-text fw-bold cal-sans-regular">Sarai solo, chissà dove, fra anime affrante e un'unica uscita... Riuscirai a trovarla?</p>
                    <div className="d-flex justify-content-center">
                        <Link className="btn btn-secondary" to={"/games/horror/:1"} >Gioca ora </Link>
                    </div>
                </div>
            </div>
        </div>

    </div>
};
