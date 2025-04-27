import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import horrorRooms from "../data/horrorRooms";

export default function ThirdCard() {

    const { slug } = useParams();

    document.body.classList.remove('img-back-games');

    const array = horrorRooms.find(ele => (ele.slug == slug));

    array ? document.body.classList.add('img-back-3') : '';

    const scelta = array.choice1 && array.n1 || array.choice2 && array.n2;

    return <div className="d-flex justify-content-center mt-5 container">

        <div className="card" >
            <img src={array.image} className="card-img-top" alt="ultimo" />
            <div className="card-body">
                <h5 className="card-title butcherman-regular">{array.title}</h5>
                <p className="card-text comic-relief-bold">{array.body}</p>
                <div className="d-flex justify-content-center">
                    {scelta ? (
                        <>
                            {array.choice1 && array.n1 && (
                                <Link className="btn btn-secondary mx-2" to={`/games/horror/${array.n1}`}>
                                    {array.choice1}
                                </Link>
                            )}
                            {array.choice2 && array.n2 && (
                                <Link className="btn btn-secondary" to={`/games/horror/${array.n2}`}>
                                    {array.choice2}
                                </Link>
                            )}
                        </>
                    ) : (
                        <div className="text-center mt-4">
                            <h4>HAI VINTO!</h4>
                            <Link to="/" className="btn btn-success mt-3 mb-3">Torna alla Home</Link>
                            <h4>PER GIOCARE DAL VIVO VIENI A TROVARCI!</h4>
                            <a className="btn btn-success mt-3" href="https://eneruescape.it/?gad_source=1&gclid=CjwKCAjwk43ABhBIEiwAvvMEB2yw26r6SVMxB8TlSODaCZVY5HOix3-sAyBNHB0vX1I_FiBHFRiEPxoCtJoQAvD_BwE">ENERU GAMES</a>
                        </div>
                    )}
                </div>
            </div>
        </div>

    </div>
};
