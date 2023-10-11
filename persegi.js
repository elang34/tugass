function count  () {
    
    let panjang = document.getElementById('panjang').value;
    let lebar = document.getElementById('lebar').value;
    let hasil = document.getElementById('hasil')
   
    let  luas = panjang * lebar;

    hasil.value = luas;
    
   
    
  }
  function reset() {
      document.getElementById('panjang').value="";
      document.getElementById('lebar').value="";
      document.getElementById('hasil').value="";
      }
