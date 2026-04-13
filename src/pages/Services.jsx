import React from 'react'
import ServiceBanner from '../components/ServiceBanner'
import ExpressDelivery from '../components/ExpressDelivery';
import PickupService from '../components/PickupService';
import CODService from '../components/CODService';
import ParcelSafety from '../components/ParcelSafety';
import BusinessSolutions from '../components/BusinessSolutions';
import ReadyToShip from '../components/ReadyToShip';

function Services() {
  return (
    <div className="space-y-20 md:space-y-28">

        <ServiceBanner /> 
        <ExpressDelivery />
        <PickupService />
        <CODService />
        <ParcelSafety />
        <BusinessSolutions />
        <ReadyToShip />
    </div>
  )
}

export default Services