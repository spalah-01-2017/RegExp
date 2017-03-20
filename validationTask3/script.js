/**
 * Created by Дмитрий on 20.03.2017.
 */

(function () {
  var input = document.querySelector('input[type="text"]');
  input.addEventListener('blur', validation);
  function validation(){
    var reg = /^[A-Z][a-z]+( [A-Z][a-z]+){1,2}$/;
    var name = this.value;
    if(reg.test(name)){
      this.parentNode.classList.remove('error');
      this.parentNode.classList.add('no-error');
    }else {
      this.parentNode.classList.remove('no-error');
      this.parentNode.classList.add('error');
    }
  }

})();
