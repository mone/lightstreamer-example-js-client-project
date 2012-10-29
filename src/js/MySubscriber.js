//NOTE there wasn't a design goal in separating the logic this way. It was made this way to show that the Lightstreamer modules
//can be included both by the main module and by other modules

define(["Lightstreamer/Subscription","domReady!"],function(Subscription) {

  var schema = ["stock_name", "last_price"];  
  
  var MySubscriber = function(lsClient,cssClass) {
    this.items = {};
    this.lsClient = lsClient;    
    this.cssClass = cssClass;
    this.htmlEls = {};
  };
  
  
  MySubscriber.prototype = {
      
      start: function(item) {
        
        if (this.items[item]) {
          return;
        }
        
        var subscription = new Subscription("MERGE",item,schema);
        subscription.setRequestedSnapshot("yes");
        subscription.setDataAdapter("QUOTE_ADAPTER");
        
        this.htmlEls[item] = document.createElement("div");
        this.htmlEls[item].className = this.cssClass;
        document.body.appendChild(this.htmlEls[item]);
        
        var nameEl = document.createElement("span");
        this.htmlEls[item].appendChild(nameEl);
        
        var priceEl = document.createElement("span");
        this.htmlEls[item].appendChild(priceEl);
        
        
        subscription.addListener({
          onItemUpdate: function(obj) {
            
            if (obj.isSnapshot()) {
              nameEl.innerHTML = obj.getValue("stock_name");
            }
            priceEl.innerHTML = obj.getValue("last_price");
            
          }
          
        });
        
        
        this.items[item] = subscription;
        
        this.lsClient.subscribe(subscription);
        
      },
      
      stop: function(item) {
        if (!this.items[item]) {
          return;
        }
        
        document.body.removeChild(this.htmlEls[item]);
        delete(this.htmlEls[item]); 
        this.lsClient.unsubscribe(this.items[item]);
        delete(this.items[item]);
      }
      
      
  };
  
  return MySubscriber;


});