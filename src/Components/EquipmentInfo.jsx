import React, { useState } from 'react';

function EquipmentInfo() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>

      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter your input"
      />
    </div>
  );
}

export default EquipmentInfo;
