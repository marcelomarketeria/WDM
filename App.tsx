
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyPayFullPrice from './components/WhyPayFullPrice';
import RetailInventory from './components/RetailInventory';
import HowToBuy from './components/HowToBuy';
import SaturdaySale from './components/SaturdaySale';
import WarehouseAccess from './components/WarehouseAccess';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <WhyPayFullPrice />
        <RetailInventory />
        <HowToBuy />
        <SaturdaySale />
        <WarehouseAccess />
      </main>
      <Footer />
    </div>
  );
};

export default App;
