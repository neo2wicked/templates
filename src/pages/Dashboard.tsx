import React from 'react';
import Header from '../components/Header';

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col flex-1 bg-[#121212] text-white">
      <Header title="Dashboard" />
      
      <div className="flex-1 p-6 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Welcome to your dashboard!</h2>
          <p className="text-gray-400 max-w-md mx-auto">
            Your onboarding is complete. This is where you would manage your business and see analytics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;