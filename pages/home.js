import yelpFusion from '../lib/load-yelp-fusion';
import unsplash from '../lib/load-unsplash';

const Home = ({yelpData, unsplashData}) => {
  
  var numberOfCampgrounds = 0;

  const unsplashImages = (step) => {
    for (; step < unsplashData.length; step++) {
      return unsplashData[step].urls.small
    }
  }

  return (
    <div>
      <h1>Home Page</h1>
      {yelpData.map(camp => (
        <div key={numberOfCampgrounds}>
          <h2>{camp.name}</h2>
          <img src={unsplashImages(numberOfCampgrounds++)} />
        </div>
      ))}
    </div>
  );
}

Home.getInitialProps = async function() {
  const yelpData = await yelpFusion();
  const unsplashData = await unsplash();
  
  return { yelpData, unsplashData }
};


export default Home
