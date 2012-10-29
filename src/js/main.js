//Note, the only goal of this example is to show how to build a js application that uses Lightstreamer JS Client library using r.js 

require(["Lightstreamer/LightstreamerClient","Lightstreamer/StatusWidget","MySubscriber"], function(LightstreamerClient,StatusWidget,MySubscriber) {
  
  var lsClient = new LightstreamerClient("http://push.lightstreamer.com","DEMO");
  lsClient.addListener(new StatusWidget("right", "0px", true));

  lsClient.connect();
  
  //this class will us the LightstreamerClient to subscribe some items to the Lightstreamer server
  var subscriptionHandler = new MySubscriber(lsClient,"item");
  
  subscriptionHandler.start("item1");
  subscriptionHandler.start("item2");
  subscriptionHandler.start("item3");
  
  //subscriptionHandler.stop("item2");
  
});