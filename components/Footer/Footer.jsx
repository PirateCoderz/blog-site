import './footer.css';

const Footer = () => {
    return (

        < footer className="footer" >
            <div className="heading">
                <h2>
                    Pirate<sup>Blogs</sup>
                </h2>
            </div>
            <div className="content">
                <div className="paragraph">
                    <p>
                        Welcome to our Blog website, a space dedicated to honoring and
                        celebrating the lives of remarkable individuals who have left an
                        indelible mark on the world. Here, we pay tribute to the extraordinary
                        achievements, enduring legacies, and profound impact of those who have
                        inspired and influenced countless lives
                    </p>
                </div>
                <div className="social-media">
                    <h4>Social</h4>
                    {/* <p>
                        <a href="https://linkedin.com/in/piratecoder">
                            <i className="fab fa-linkedin" style={{ color: "#0077B5" }} />{" "}
                            Linkedin
                        </a>
                    </p> */}
                    <p>
                        <a href="https://twitter.com/">
                            <i className="fab fa-twitter" style={{ color: "#1DA1F2" }} />{" "}
                            Twitter
                        </a>
                    </p>
                    <p>
                        <a href="https://github.com/piratecoderz">
                            <i className="fab fa-github" style={{ color: "#333" }} /> Github
                        </a>
                    </p>
                    <p>
                        <a href="https://www.facebook.com">
                            <i className="fab fa-facebook" style={{ color: "#1877F2" }} />{" "}
                            Facebook
                        </a>
                    </p>
                    <p>
                        <a href="https://www.instagram.com/numliancoder">
                            <i className="fab fa-instagram" style={{ color: "#C13584" }} />{" "}
                            Instagram
                        </a>
                    </p>
                </div>
                <div className="links">
                    <h4>Quick links</h4>
                    <p>
                        <a href="/">Home</a>
                    </p>
                    <p>
                        <a href="/about-us">About Us</a>
                    </p>
                    <p>
                        <a href="/about-us#conact-us">Contact Us</a>
                    </p>
                    <p>
                        <a href="/blogs">Blogs</a>
                    </p>
                </div>
            </div>
        </footer>

    );
}

export default Footer;