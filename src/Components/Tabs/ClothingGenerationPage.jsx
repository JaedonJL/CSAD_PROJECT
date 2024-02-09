import React, { useState } from 'react';

function ClothingGenerationPage() {
  const [length, setLength] = useState('');
  const [temperature, setTemperature] = useState('');
  const [attribute, setAttribute] = useState('');
  const [generated, setGenerated] = useState('');

  const generateResult = () => {
    if (!length || !temperature) {
      alert('Please fill in all the fields!');
      return;
    }
    setGenerated(`${length} ${temperature} ${attribute}`);
  };

  return (
    <div className="flex flex-col items-center mt-2 w-full">
      <h1 className="font-roboto font-medium text-md text-gray-1000 no-underline tracking-normal leading-none">Outfit Generation</h1>
      <div className="flex flex-col py-4 w-full bg-white rounded-3xl shadow-lg mb-4">
        <h2>Choose Length:</h2>
        <select value={length} onChange={(e) => setLength(e.target.value)}>
          <option value="">Select Length</option>
          <option value="long">Long</option>
          <option value="short">Short</option>
        </select>
      </div>
      <div className="flex flex-col py-4 w-full bg-white rounded-3xl shadow-lg mb-4">
        <h2>Choose Temperature:</h2>
        <select value={temperature} onChange={(e) => setTemperature(e.target.value)}>
          <option value="">Select Temperature</option>
          <option value="hot">Hot</option>
          <option value="cold">Cold</option>
        </select>
      </div>
      <div className="flex flex-col py-4 w-full bg-white rounded-3xl shadow-lg mb-4">
        <h2>Enter Attribute:</h2>
        <input
          type="text"
          placeholder="Enter Attribute"
          value={attribute}
          onChange={(e) => setAttribute(e.target.value)}
        />
      </div>
      <div className="flex flex-col py-4 w-full bg-white rounded-3xl shadow-lg">
        <h2 className="font-roboto font-medium text-md text-gray-700 no-underline tracking-normal leading-none">Generated Combination:</h2>
        <p>{generated}</p>
        <button onClick={generateResult}>Generate</button>
      </div>
    </div>
  );
}

export default ClothingGenerationPage;


