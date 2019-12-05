import { useState } from 'react';

export const useSearchValues = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchLocation, setSearchLocation] = useState('');

  return { 
    searchTerm, setSearchTerm, 
    searchLocation, setSearchLocation,
  }
}