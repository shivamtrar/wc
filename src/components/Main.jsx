import React from 'react'
import './Main.css'
import Card from './Card'
import { Link } from 'react-router-dom';

const Main = (props) => {
  return (
    <div className='main-section'>
        <div className="desc">
            <h2 className="main-head">Choose Product Category</h2>
            <div className='yellow'></div>
            <p className='para'> We believe technology should work for everyone. That’s why we offer a full range of tech & appliances repair solutions to keep you connected from protection and repair to installation and expert support.</p>
            <p className='para'> How can we help you today? </p>
            <h2 className="main-head">For Quick Assistance : +1-650-899-9698</h2>
        </div>

        <div className='cards'>
          <Card/>
        </div>

        <div className='appointment'>
        <div>
          {/* Link to ContactUs page */}
          <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h2>Book your Appointment</h2>
          </Link>
        </div>
        <div>
          <h2>Ask an Experts</h2>
        </div>
      </div>

        <div className='repair'>
          <div className='content-repair'>
            <h2 className='rep-head'>Fast repairs, right in your neighborhood</h2>
            <p className='rep-des'>Our experts can fix your tech & appliances easily. Make your appointment today and let us come to you. And our appliance repairs are just as simple. In select cities, we can have your device working after one visit to your home.</p>
            <p className='rep-icon'>Thousands of local repair experts ready to help</p>
            <p className='rep-icon'>Most repairs done in same day</p>
            <button className='button'>Book your Appointment</button>
          </div>
          <div className='rep-img-div'>
            <img src='/asset/repair.webp' className='img-rep'/>
          </div>
        </div>

        <div className='appointment'>
        <div>
          {/* Link to ContactUs page */}
          <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
            <h2>Book your Appointment</h2>
          </Link>
        </div>
        <div>
          <h2>Ask an Experts</h2>
        </div>
      </div>

        <div className='repair'>
          <div className='content-repair'>
            <h2 className='rep-head'>Who we are?</h2>
            <p className='rep-des'>Geek Tech Care is a comprehensive tech and appliance repair service provider that caters to a wide range of electronic devices and appliances. Specializing in services for Computers & Tablets, Mobile Devices, Printers, WiFi & Networking, TV & Home Theater, Video Games & Entertainment, Cameras & Camcorders, Smart Home, Home Security, Drones, Audio & Video, TV Mounting, Major Appliances, Small Appliances, and more, Geek Tech Care aims to address the diverse repair service needs of its customers.</p>
            <button className='button'>Read More</button>
          </div>
          <div className='rep-img-div'>
            <img src='/asset/about-us-banner.webp' className='img-rep'/>
          </div>
        </div>
        

      </div>
    
  )
}

export default Main
