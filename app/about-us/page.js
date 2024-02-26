import './about.css';

const Page = () => {
  return (
    <div className="container">
      <h1>About Us</h1>
      <div className="about-section">
        <p>
          Welcome to WH Tribute, a dedicated platform paying tribute to some of the
          most influential figures in the history of our nation. We honor the
          remarkable lives and contributions of great leaders such as Quaid-e-Azam
          Muhammad Ali Jinnah, Allama Iqbal, and many others who played instrumental
          roles in shaping our nation&apos;s destiny.
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
      <div className="contact-section" id='contact-us'>
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
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27246.001300100368!2d73.1281051287996!3d31.393451721621336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922670dc167e1f5%3A0x38f9e2c3bf402ccf!2sNUML%20Faisalabad%20Campus!5e0!3m2!1sen!2s!4v1708942337446!5m2!1sen!2s" width="600" height="450" style={{border:0+"px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <p>Location: National University of Modern Languages, Faisalabad City, Pakistan</p>
      </div>
    </div>

  );
}

export default Page;


export function generateMetadata ({params}) {
  return {
      title: "About Us | Pirate Blogs"
  };
}