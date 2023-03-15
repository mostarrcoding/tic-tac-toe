var els = [];
for(var i = 1; i<=9; i++){
  var id = "cell" + i;
  //console.log(id);
  var el = document.getElementById(id);
  els.push(el);
  //console.log(els[i-1]);
  //console.log(els[i-1].textContent);
  //console.log(el);
  els[i-1].addEventListener("click", function(){
    //console.log(this);
    if(this.textContent === ''){
      this.textContent = 'X';
    }else if(this.textContent === 'X'){
      this.textContent = 'O';
    }else if(this.textContent === 'O'){
      this.textContent = '';
    }else{
      this.textContent = 'X';
    }
  })
}

function reset(){
  for(var i=1; i<=9; i++){
    els[i-1].textContent = '';
  }
}
