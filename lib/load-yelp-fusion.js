export default function yelpFusion() { 
  const yelp = require('yelp-fusion');

  const apiKey = 'JQnvXVKEm-TX-9LItQw_ZVBXcliIDZcQgKSyDQ_6KkYBIzYHTG8rJL5ZIZuCWe0S0-QGqF1phH7HUPMRAwKVgwssE3_XtColVp9UN9deNtHWSFJZmeOwbMpSMNPnXXYx';

  const searchRequest = {
    term: 'Yosemite',
    location: 'California'
  };

  const client = yelp.client(apiKey);

  return client.search(searchRequest).then(response => {
    const yelpData = response.jsonBody.businesses;

    return yelpData;
  }).catch(error => {
    console.log(error);
  });
}