import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
const Qrcode = () => {
  const [result, setResult] = useState('');


  return (
    <div className="max-w-md mx-auto mt-8 p-4 border border-gray-300 rounded-md">
      <h2 className="text-xl font-bold mb-4">QR Code Scanner</h2>

      <QrReader
      onResult={(result, error) => {
        if (!!result) {
            setResult(result?.text);
        }

        if (!!error) {
          console.info(error);
        }
      }}/>

        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Scanned Data:</h3>
          <p>{result}</p>
        </div>
     
    </div>
  );
};






export default Qrcode