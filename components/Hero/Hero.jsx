import axios from 'axios';
import './styling.css';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = async () => {

  const response = await axios.get("http://localhost:3000/api/blogs");
  const data = response.data.result;

  return (

    <div className='div-container'>

      {data.map((n) => {
        return (
          <section key={n._id} className='item'>
            <div className="container">
              <div className="row">
                <div className="image-center col-md-6 text-center py-4">
                  <Image src={n.featureImg} title={n.heading} width={800} height={400} alt={n.heading} />
                </div>
                <div className="col-md-6">
                  <div className="h-text">
                    {/* <span>{n.heading}</span> */}
                    <h1 className='margin'>{n.heading}</h1>
                    <Link href={'/blogs/' + n._id} className="btn btn-primary">
                      READ MORE
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      })}

    </div>
  );
}

export default HeroSection;