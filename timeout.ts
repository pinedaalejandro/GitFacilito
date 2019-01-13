class Test {
  
  timeout() {
      var that = this;
      setTimeout(function () {
          console.log('Test');
          that.timeout();
      }, 2000);
  } 
  
}


let t = new Test();
t.timeout();