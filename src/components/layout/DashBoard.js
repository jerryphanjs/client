import React from 'react';
import Client from '../client/Clients';
import Sidebar from '../layout/Sidebar';

export default function DashBoard() {
  return (
    <div className="row">
      <div className="col-md-10">
        <Client />
      </div>
      <div className="col-md-2">
        <Sidebar />
      </div>
    </div>
  )
}
