import { useUserValues } from '../hooks/AddCampgroundHooks';
import loadDB from '../lib/load-firebase';

const campgroundValues = () => {

  const valueHooks = useUserValues();

  const addCampgroundMutation = async (collection) => {
    const db = await loadDB();
  
    db.collection(collection).add({
      name: valueHooks.name,
      description: valueHooks.description,
      image: valueHooks.image,
      rating: `${valueHooks.rating} / 5.0`,
      temperature: valueHooks.temperature,
      warnings: valueHooks.warnings
    })
    .then(function() {
      console.log("Document successfully written!");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    addCampgroundMutation('campgrounds');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input onChange={event => valueHooks.setName(event.target.value)} />
        <br />
        <label>Image URL:</label>
        <input onChange={event => valueHooks.setImage(event.target.value)} />
        <br />
        <label>Rating:</label>
        <input onChange={event => valueHooks.setRating(event.target.value)} /><label> / 5.0</label>
        <br />
        <label>Temperature:</label>
        <br />
        <input type="radio" name="temperature" value="Cold" onChange={event => valueHooks.setTemperature(event.target.value)} />
        <label>Cold</label>
        <br />
        <input type="radio" name="temperature" value="Hot" onChange={event => valueHooks.setTemperature(event.target.value)} />
        <label>Hot</label>
        <br />
        <input type="radio" name="temperature" value="Regular" onChange={event => valueHooks.setTemperature(event.target.value)} />
        <label>Regular</label>
        <br />
        <input type="radio" name="temperature" value="Hot and Cold" onChange={event => valueHooks.setTemperature(event.target.value)} />
        <label>Hot and Cold</label>
        <br />
        <label>Description</label>
        <br />
        <textarea rows="5" cols="50" onChange={event => valueHooks.setDescription(event.target.value)} />
        <br />
        <label>Activities:</label>
        <br />
        <textarea rows="5" cols="50" onChange={event => valueHooks.setActivities(event.target.value)} />
        <br />
        <label>Warnings:</label>
        <br />
        <textarea rows="5" cols="50" onChange={event => valueHooks.setWarnings(event.target.value)} />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default campgroundValues;
