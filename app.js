const app = new Clarifai.App({
  apiKey: '164f45df84854b22ba8061b21d2e95ae'
});

app.models.initModel({id: Clarifai.GENERAL_MODEL, version: "aa7f35c01e0642fda5cf400f543e7c40"})
  .then(generalModel => {
    return generalModel.predict("https://samples.clarifai.com/metro-north.jpg");
  })
  .then(response => {
    var concepts = response['outputs'][0]['data']['concepts'];
    console.log(concepts);
    var results = document.getElementById('results')
    var result = document.createElement('li');
    result.innerText = concepts[1].name;
    results.appendChild(result);
  })