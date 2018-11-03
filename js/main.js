require(['Models/FindFeeling', 'Presenters/FindFeelingPresenter', 'Views/FindFeelingView'], function (FindFeeling, FindFeelingPresenter, FindFeelingView) {

// FindFeelingView.init();
// FindFeelingPresenter.init();
FindFeeling.init();
});

require.config({
  shim:{
    'clarifai': {
      'exports': 'Clarifai'
    }
  },
  paths: {
    'clarifai': "https://sdk.clarifai.com/js/clarifai-latest"
  }
});

// require(['clarifai'], function(Clarifai){
//   console.log(Clarifai);
// });
