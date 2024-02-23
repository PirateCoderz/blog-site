import './about.css';

const Page = () => {
    return ( 
        <div className="container">
  <h1>About Us</h1>
  <div className="about-section">
    <img src="ig/about.jpg" alt="Website Logo" />
    <p>
      Welcome to WH Tribute, a dedicated platform paying tribute to some of the
      most influential figures in the history of our nation. We honor the
      remarkable lives and contributions of great leaders such as Quaid-e-Azam
      Muhammad Ali Jinnah, Allama Iqbal, and many others who played instrumental
      roles in shaping our nation's destiny.
    </p>
  </div>
  <div className="mission-section">
    <h2>Mission</h2>
    <p>
      Our mission is to ensure that the incredible accomplishments and
      contributions of Mr. William Harrison are recognized and celebrated. We
      strive to preserve his memory, share his inspiring journey, and educate
      future generations about his lasting impact.
    </p>
    <h2>Vision</h2>
    <p>
      We envision a world where the indomitable spirit and tireless dedication
      of Mr. William Harrison continue to inspire and empower individuals to
      reach their full potential. Through his story, we aspire to motivate
      others to dream big, work hard, and make a positive difference in their
      communities.
    </p>
  </div>
  <div className="contact-section">
    <h2>Contact Us</h2>
    <form>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" />
      <br />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" />
      <br />
      <label htmlFor="message">Message:</label>
      <br />
      <textarea
        id="message"
        name="message"
        rows={4}
        cols={30}
        defaultValue={""}
      />
      <br />
      <input type="submit" defaultValue="Submit" />
    </form>
    <div className="map-container">
      {/* Replace the URL with the embed code from your map service */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385896.6482882927!2d-74.25986515133247!3d40.697149422324085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDM5JzM2LjEiTiA3NMKwMzknNTMuMiJX!5e0!3m2!1sen!2sus!4v1627432688101!5m2!1sen!2sus"
        allowFullScreen=""
      />
    </div>
    <p>Location: XYZ Street, ABC City, Country</p>
  </div>
</div>

     );
}
 
export default Page;