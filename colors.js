var Body = {
  setColor:function(color){
      document.querySelector('body').style.color = color;
  },
  setBackgroundColor:function(color){
    document.querySelector('body').style.backgroundColor = color;
  }
}
var Links = {
  setColor:function(color){
    var alist = document.querySelectorAll('a');
    var i=0;
    while(i++ < alist.length){
      console.log(alist[i]);
      alist[i].style.color = color;
    }
  }
}
function nightDayHandler(self){
  var target = document.querySelector('body');
  //밤
  //if(target.style.backgroundColor === 'white')
  if(self.value === 'night')
  {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'day';

    Links.setColor('blue');
  }
  // 낮
  else{
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'night';

    Links.setColor('yellow');
  }
}
