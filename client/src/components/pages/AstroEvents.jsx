import { useEffect, useState } from 'react';
import Map from '../Map';
const AstroEvents = () => {
    const [apod, setApod] = useState();
    const fetchImage = async () => {
        try {
            const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${import.meta.env.VITE_NASA_API_KEY}`);
            const data = await res.json();
            setApod(data);
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        window.scrollTo(0,0);
        fetchImage()
    }, [])
    return (
        <div className='astro_events'>
            <div className="container">
                <h1 className='ae_heading'>
                    Astronomical Events
                </h1>
                <Map />
               
                <section className="apod">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <h2>Astronomy Picture of the Day</h2>
                            <div className="imgcont">
                                <img src={apod?.url} alt="" />
                            </div>
                            <div className="imgdesc">
                                <p>{apod?.explanation}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default AstroEvents