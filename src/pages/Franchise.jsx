import React from 'react'
import FranchiseHero from '../components/FranchiseHero';
import InvestmentStructures from '../components/InvestmentStructures';
import Features from '../components/FeaturesFranchesis';
import PartnerBenefits from '../components/PartnerBenefits';
import ApplicationForm from '../components/ApplicationForm';
function Franchise() {
  return (
    <div>
      <FranchiseHero />
      <InvestmentStructures/>
      <Features/>
      <PartnerBenefits/>
      <ApplicationForm />


    </div>
  )
}

export default Franchise
