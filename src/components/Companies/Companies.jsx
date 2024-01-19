import React from 'react'
import './Companies.css'
import prologis from '../../assets/prologis.png';
import tower from '../../assets/tower.png';
import equinix from '../../assets/equinix.png';
import reality from '../../assets/realty.png'
function Companies() {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <img src={prologis} alt="" />
        <img src={tower} alt="" />
        <img src={equinix} alt="" />
        <img src={reality} alt="" />
      </div>
    </section>
  )
}

export default Companies