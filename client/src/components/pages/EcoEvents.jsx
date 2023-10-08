import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from "react-icons/fi";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

const EcoEvents = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  },[])

  const data = [
    {
      id: 1,
      job: 'Cleaning beaches',
      date: "22/10/2023",
      about: "Cleaning beaches involves the removal of litter, debris, and pollutants from coastal areas to maintain their cleanliness and ecological health.",
      location: 'Azerbaijan, Baku, Caspian Sea',
      img: '/assets/ecoevent.jpg'
    },
    {
      id: 2,
      job: 'Recycling Plastic',
      date: "06/12/2023",
      about: "Recycling plastic is the process of reprocessing plastic materials to create new products, reducing the environmental impact of plastic waste.",
      location: 'Sensō-ji, Tokio ,Japan',
      img: '/assets/ecoevent3.jpg'
    },
    {
      id: 3,
      job: 'Planting trees',
      date: "22/10/2023",
      about: "Trees play a crucial role in mitigating climate change by absorbing carbon dioxide, providing oxygen, improving air quality, and supporting biodiversity.",
      location: 'San-Fransisko| New Dehli3, Part Time',
      img: '/assets/ecoevent2.jpg'
    },
    {
      id: 4,
      job: 'Planting trees',
      date: "22/10/2023",
      about: "Trees play a crucial role in mitigating climate change by absorbing carbon dioxide, providing oxygen, improving air quality, and supporting biodiversity.",
      location: 'San-Fransisko| New Dehli3, Part Time',
      img: '/assets/ecoevent2.jpg'
    }



  ]
  const [showAllData, setShowAllData] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };


  const filteredData = data.filter(item =>
    item.job.toLowerCase().startsWith(searchTerm.toLowerCase())
  );
  const displayedData = showAllData ? filteredData : filteredData.slice(0, 3);

  return (
    <>

      <div className="container total">

        <div className="row">
          <div className="col-lg-12 texting" >

            <div className="text">
              <h3>Ecological Events</h3>

            </div>
          </div>
          <div className="col-lg-12 second">
            <div className="search">
              <input type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder='Searching Events' />
              <div className="icon">
                <FiSearch></FiSearch>
              </div>

            </div>
          </div>
          <div className="col-lg-12 third">
            {displayedData.map((item, index) => (
              <div className="card" key={index}>
                <div className="left">
                  <img src={item.img} alt="" />

                </div>
                <div className="right">
                  <div className="sol">
                    <h2  >{item.job} </h2>
                    <h4>{item.about}</h4>
                    <h5>{item.date}</h5>
                    <h3>{item.location}</h3>
                  </div>

                  <div className="sag">



                    <Link to='/eco-events'>Join now</Link>
                  </div>
                </div>

              </div>))}


          </div>
          <div className="col-lg-12 fourth">
            <div className="button">
              <button onClick={() => setShowAllData(true)}> See all</button>
            </div>
          </div>
        </div>
      </div>

    </>


  )

}

export default EcoEvents