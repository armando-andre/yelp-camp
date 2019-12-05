import getCollection from '../firebase/queries/getCampgrounds'

const ShowUsers = ({ campgrounds }) => {
  let numberOfCampgrounds = 0
  
  return (
    <div>
      <h1>Campground of the Week</h1>
      
      <h1>Most Visited Campgrounds</h1>
      {campgrounds.map(c => (
        <div key={numberOfCampgrounds++}>
          <h2>{c.name}</h2>
          <img src={c.image} width="500px" height="500px"/>
          <p>{c.description}</p>
          <p>{c.warnings}</p>
        </div>
      ))}
      <h1>Available During All Year</h1>

      <h1>Campgrounds to Visit Alone</h1>

      <h1>Campgrounds to Visit With Group</h1>

    </div>
  );
}

ShowUsers.getInitialProps = async function() {
  const campgrounds = await getCollection('campgrounds')

  return campgrounds
};


export default ShowUsers
