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

let a = 'primero para rama test'
let b = 'segunda prueba rama test'
