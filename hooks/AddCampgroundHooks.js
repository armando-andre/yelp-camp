import { useState } from 'react';

export const useUserValues = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [rating, setRating] = useState('')
  const [activities, setActivities] = useState('')
  const [temperature, setTemperature] = useState('')
  const [warnings, setWarnings] = useState('')

  return { 
    name, setName, 
    description, setDescription,
    image, setImage,
    rating, setRating, 
    activities, setActivities, 
    temperature, setTemperature,
    warnings, setWarnings
  }
}