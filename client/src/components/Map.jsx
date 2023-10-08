import { GoogleMap, useJsApiLoader, MarkerF, InfoWindowF } from '@react-google-maps/api';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Map = () => {

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY
    })

    const markers = [
        {
            name: "Alaska",
            position: { lat: 64.8401, lng: 147.7200 },
            icon: '/assets/polar.png',
            marker: {
                title: "Polar Lights",
                desc: "Polar lights, also known as auroras, are stunning natural light displays near the poles caused by solar particles colliding with the Earth's magnetic field. They create vibrant curtains of colorful light in the night sky.",
                place: "Fairbanks",
                date: "02.01.2023, 15:30",
                price: 50,
                icon: '/assets/polar_pic.png'
            }
        },
        {
            name: "Norway",
            position: { lat: 69.6492, lng: 18.9553 },
            icon: '/assets/polar.png',
            marker: {
                title: "Polar Lights",
                desc: "Polar lights, also known as auroras, are stunning natural light displays near the poles caused by solar particles colliding with the Earth's magnetic field. They create vibrant curtains of colorful light in the night sky.",
                place: "Tromso",
                date: "11.02.2023, 21:45",
                price: 20,
                icon: '/assets/polar_pic.png'
            }
        },
        {
            name: "New Zealand",
            position: { lat: -45.031162, lng: 168.662643 },
            icon: '/assets/polar.png',
            marker: {
                title: "Polar Lights",
                desc: "Polar lights, also known as auroras, are stunning natural light displays near the poles caused by solar particles colliding with the Earth's magnetic field. They create vibrant curtains of colorful light in the night sky.",
                place: "Queenstown",
                date: "22.04.2023, 13:15",
                price: 150,
                icon: '/assets/polar_pic.png'
            }
        },
        {
            name: "Chile",
            position: { lat: -23.863213, lng: -69.141754 },
            icon: '/assets/solar.png',
            marker: {
                title: "Solar Eclipse",
                desc: "A solar eclipse occurs when the Moon passes between the Earth and the Sun, blocking out the Sun's light and casting a shadow on Earth. This rare celestial event can create a breathtaking spectacle as the sky darkens during the day, revealing the Sun's outer atmosphere, called the solar corona.",
                place: "Atacama Desert",
                date: "05.0.5.2023, 16:00",
                price: 75,
                icon: '/assets/solar_pic.png'
            }
        },
        {
            name: "Norway",
            position: { lat: 77.8750, lng: 20.9752 },
            icon: '/assets/solar.png',
            marker: {
                title: "Solar Eclipse",
                desc: "A solar eclipse occurs when the Moon passes between the Earth and the Sun, blocking out the Sun's light and casting a shadow on Earth. This rare celestial event can create a breathtaking spectacle as the sky darkens during the day, revealing the Sun's outer atmosphere, called the solar corona.",
                place: "Svalbard",
                date: "23.05.2023, 15:30",
                price: 30,
                icon: '/assets/solar_pic.png'
            }
        },
        {
            name: "Chile",
            position: { lat: -27.114410, lng: -109.425270 },
            icon: '/assets/solar.png',
            marker: {
                title: "Solar Eclipse",
                desc: "A solar eclipse occurs when the Moon passes between the Earth and the Sun, blocking out the Sun's light and casting a shadow on Earth. This rare celestial event can create a breathtaking spectacle as the sky darkens during the day, revealing the Sun's outer atmosphere, called the solar corona.",
                place: "Easter Island",
                date: "15.06.2023, 12:45",
                price: 80,
                icon: '/assets/solar_pic.png'
            }
        },


        {
            name: "Hawai",
            position: { lat: 20.005039, lng: -155.824615 },
            icon: '/assets/lunar.png',
            marker: {
                title: "Lunar Eclipse",
                desc: "A lunar eclipse happens when the Earth passes between the Sun and the Moon, causing Earth's shadow to be cast on the Moon's surface. During a lunar eclipse, the Moon can appear reddish due to Earth's atmosphere.",
                place: "Mauna Kea",
                date: "28.06.2023, 02:00",
                price: 40,
                icon: '/assets/lunar_pic.png'
            }
        },
        {
            name: "Namibia",
            position: { lat: -24.2889, lng: 15.2605 },
            icon: '/assets/lunar.png',
            marker: {
                title: "Lunar Eclipse",
                desc: "A lunar eclipse happens when the Earth passes between the Sun and the Moon, causing Earth's shadow to be cast on the Moon's surface. During a lunar eclipse, the Moon can appear reddish due to Earth's atmosphere.",
                place: "Namib Desert",
                date: "11.08.2023, 23:00",
                price: 500,
                icon: '/assets/lunar_pic.png'
            }
        },


        {
            name: "Spain",
            position: { lat: 28.291565, lng: -16.629129 },
            icon: '/assets/planet.png',
            marker: {
                title: "Planet Observation",
                desc: "Some of the planets in our solar system are often visible. Venus, Mars, Jupiter, and Saturn are also visible at certain times of the year. These planets are usually much brighter than stars.",
                place: "The Canary Islands",
                date: "27.08.2023, 05:10",
                price: 60,
                icon: '/assets/planet_pic.png'
            }
        },
        {
            name: "Jordan",
            position: { lat: 29.5726, lng: 35.4186 },
            icon: '/assets/planet.png',
            marker: {
                title: "Planet Observation",
                desc: "Some of the planets in our solar system are often visible. Venus, Mars, Jupiter, and Saturn are also visible at certain times of the year. These planets are usually much brighter than stars.",
                place: "Wadi Rum",
                date: "07.09.2023, 01:45",
                price: 25,
                icon: '/assets/planet_pic.png'
            }
        },


        {
            name: "Pennysilvania",
            position: { lat: 41.6632, lng: -77.8234 },
            icon: '/assets/star.png',
            marker: {
                title: "Stargazing",
                desc: "Stargazing involves looking at the stars and celestial objects in the night sky for enjoyment or scientific observation. It's a fascinating hobby that allows us to explore the wonders of the cosmos.",
                place: "Cherry Springs State Park",
                date: "09.09.2023, 21:00",
                price: 35,
                icon: '/assets/star_pic.png'
            }
        },
        {
            name: "Namibia",
            position: { lat: -25.0000, lng: 16.0000 },
            icon: '/assets/star.png',
            marker: {
                title: "Stargazing",
                desc: "Stargazing involves looking at the stars and celestial objects in the night sky for enjoyment or scientific observation. It's a fascinating hobby that allows us to explore the wonders of the cosmos.",
                place: "NamibRand Nature Reserve",
                date: "21.10.2023, 04:30",
                price: 15,
                icon: '/assets/star_pic.png'
            }
        },
        {
            name: "New Zealand",
            position: { lat: -44.007576, lng: 170.49942 },
            icon: '/assets/star.png',
            marker: {
                title: "Stargazing",
                desc: "Stargazing involves looking at the stars and celestial objects in the night sky for enjoyment or scientific observation. It's a fascinating hobby that allows us to explore the wonders of the cosmos.",
                place: "Aoraki Mackenzie Dark Sky Reserve",
                date: "17.11.2023, 02:15",
                price: 90,
                icon: '/assets/star_pic.png'
            }
        },


        {
            name: "USA",
            position: { lat: 33.8734, lng: -115.900650 },
            icon: '/assets/asteroid.png',
            marker: {
                title: "Meteor Shower",
                desc: "A meteor shower is a celestial event when numerous meteors streak across the night sky, creating a dazzling display. It occurs when Earth passes through the debris left by a comet.",
                place: "Joshua Tree National Park",
                date: "06.12.2023, 10:45",
                price: 50,
                icon: '/assets/asteroid_pic.png'
            }
        },

        {
            name: "Spain",
            position: { lat: 28.2539, lng: -16.6183 },
            icon: '/assets/burc.png',
            marker: {
                title: "Constellations",
                desc: "Constellations are groupings of stars in the night sky that form recognizable patterns or shapes. They have been used for centuries as a way to navigate and tell stories about the stars.",
                place: "Teide National Park",
                date: "20.12.2023, 11:30",
                price: 25,
                icon: '/assets/burc_pic.png'
            }
        },
        {
            name: "USA",
            position: { lat: 37.5930, lng: -112.1871 },
            icon: '/assets/burc.png',
            marker: {
                title: "Constellations",
                desc: "Constellations are groupings of stars in the night sky that form recognizable patterns or shapes. They have been used for centuries as a way to navigate and tell stories about the stars.",
                place: "Bryce Canyon National Park",
                date: "26.12.2023, 15:30",
                price: 50,
                icon: '/assets/burc_pic.png'
            }
        },
        {
            name: "Greece",
            position: { lat: 36.3932, lng: 25.4615 },
            icon: '/assets/burc.png',
            marker: {
                title: "Constellations",
                desc: "Constellations are groupings of stars in the night sky that form recognizable patterns or shapes. They have been used for centuries as a way to navigate and tell stories about the stars.",
                place: "Santorini",
                date: "30.12.2023, 15:30",
                price: 45,
                icon: '/assets/burc_pic.png'
            }
        },
        {
            name: "Azerbaijan",
            position: { lat: 40.7821, lng: 48.5983 },
            icon: '/assets/star.png',
            marker: {
                title: "Stargazing",
                desc: "Stargazing involves looking at the stars and celestial objects in the night sky for enjoyment or scientific observation. It's a fascinating hobby that allows us to explore the wonders of the cosmos.",
                place: "Shamakhy Astrophysical Observatory",
                date: "02.01.2023, 15:30",
                price: 10,
                icon: '/assets/star_pic.png'
            }
        },

    ];

    const [markerId, setMarkerId] = useState();

    return (
        <>
            {
                isLoaded &&
                <GoogleMap
                    center={{ lat: markers[markerId]?.position.lat || 39.0000, lng: markers[markerId]?.position.lng || 34.0000 }}
                    zoom={2}
                    mapContainerStyle={{
                        width: "100%",
                        height: "80vh"
                    }}
                >
                    {
                        markers.map(({ position, icon, marker }, idx) => (
                            <MarkerF
                                key={idx}
                                position={position}
                                icon={{
                                    url: icon,
                                    scaledSize: { width: 50, height: 50 }
                                }}
                                onClick={() => setMarkerId(idx)}
                            >
                                {
                                    markerId === idx &&
                                    <InfoWindowF
                                        position={position}
                                        onCloseClick={() => { setMarkerId(null) }}
                                    >
                                        <div className='marker_info'>
                                            <div className="marker_title">
                                                {marker?.title}
                                                <img src={marker?.icon} alt="" />
                                            </div>

                                            <div className="line"></div>
                                            <p>{marker?.desc}</p>
                                            <h5>Place: {marker?.place}</h5>
                                            <h5>Date: {marker?.date}</h5>
                                            <h5>Price: {marker?.price}$</h5>
                                            <div className='ticket_link'><Link to='/book-ticket'>Book a ticket</Link></div>
                                        </div>
                                    </InfoWindowF>
                                }

                            </MarkerF>
                        ))
                    }
                </GoogleMap>
            }
        </>
    )
}

export default Map