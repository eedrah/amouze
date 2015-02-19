$(startListening);

function startListening(){
  $('#container').one('mouseover', function(){
    new catController();
  });
};
