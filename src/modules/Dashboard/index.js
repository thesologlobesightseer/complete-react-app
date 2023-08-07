import React from 'react';
import Ratings from 'library/common/components/Ratings';

const Dashboard = () => {
  return (
    <>
      <h1>Dashboard</h1>

      <Ratings type="q1" onChange={(type, value) => {console.log(type, value, "type and value")}} actualRating="2" values={['very bad', 'bad', 'good', 'excellent']} />
    </>
  )
};

export default Dashboard;
