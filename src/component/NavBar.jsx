import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function NavBar() {

    return <div>

        <header>
            <nav className="navbar navbar-expand-lg bg-black">
                <div className="container-fluid">
                    <Link to={"/"} className="nav-link text-white mx-3" ><img src="/logo.png" alt="123" /></Link >
                    <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={"/"} className="nav-link text-white lato-black-italic" > Home</Link >
                            </li>
                            <li className="nav-item">
                                <Link to={"/games"} className="nav-link text-white lato-black-italic" > Games</Link >

                            </li>
                            <li className="nav-item">
                                <Link to={"/about"} className="nav-link text-white lato-black-italic" >Chi siamo</Link >
                            </li>
                            <li className="nav-item">
                                <Link to={"/Recensioni"} className="nav-link text-white lato-black-italic" >Recensioni</Link >
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <Outlet />

    </div >
};

