// src/components/LibraryManagement.js
import React, { useState,useEffect } from 'react';
import useScanDetection from 'use-scan-detection-react18';
import Navbar from './Navbar';

const Home = () => {
  const [scannedCodes, setScannedCodes] = useState("No data found");
 

  useScanDetection({
    onComplete: (code) => {setScannedCodes(code) },
    minLength: 3,
   })
function handelClear(){
  setScannedCodes("")
}
  

  return (
    <>
    <Navbar/>
    <div className="container mx-auto mt-8 p-2">
      <h1 className="text-3xl font-bold mb-4">Library Management System</h1>

      <div className="mb-4">
        <input
          type="text"
          className="border border-gray-300 p-2"
          readOnly
          value={scannedCodes || ''}
        />
      </div>

      <div className="mb-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        onClick={handelClear}
        >
          Clear Scanned Codes
        </button>
      </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Scanned Codes</h2>
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 border-b">Index</th>
                <th className="py-2 px-4 border-b">Barcode Data</th>
              </tr>
            </thead>
            <tbody>
                <tr className="border-b text-center">
                  <td className="py-2 px-4">1</td>
                  <td className="py-2 px-4">{scannedCodes}</td>
                </tr>
            </tbody>
          </table>
        </div>
     
    </div>

    </>
  );
};

export default Home;
