
const Header = () => {
    return (
        <header className="header">
            <nav className="flex">
                <div className="logo">
                    <a href="/" className="nav-link">
                        <img
                            src="image-removebg-preview.png"
                            alt="Logo"
                            className="logo-img"
                            width={250}
                            height={200}
                            />
                    </a>
                </div>
                <div className="">

                </div>
                <ul className="nav-list">
                    <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
                    <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
                    <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
