'use client'
import React, { useState, useRef, useEffect } from 'react';

const EditableInput:React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState('CTO & Manager');
  const inputRef = useRef(null);

  const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputValue(e.target.value);
  };

  const handleInputClick = () => {
    setIsEditing(true);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
    // Save the input value or perform any other action here
    console.log('Value saved:', inputValue);
  };

  const handleMouseLeave = () => {
    if (isEditing) {
      handleInputBlur();
    }
  };

  // Close the input on Escape key press
  const handleKeyPress = (e: { key: string; }) => {
    if (e.key === 'Escape') {
      handleInputBlur();
    }
  };

  // Set focus on the input when editing starts
  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus<null>();
    }
  }, [isEditing]);

  return (
    <div>
      {isEditing ? (
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyPress={handleKeyPress}
          className='border border-slate-100 outline-slate-100 text-slate-500'
        />
      ) : (
        <p onClick={handleInputClick} className='text-[13px] font-semibold text-slate-500 uppercase cursor-pointer'>{inputValue}</p>
      )}
    </div>
  );
};

export default EditableInput;
