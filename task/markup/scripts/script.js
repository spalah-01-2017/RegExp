// console.log('%cТвоя реализация должна быть в этом файле \t ---->', 'font-size: 8px; font-weight: bold; color: blue');

var reg_full_name = /^ {0,}[A-Z][a-z]+( [A-Z][a-z]+){1,2} {0,}$/;
var reg_phone = /^ {0,}\+380[\d]{9} {0,}$/;
var reg_email =/^ {0,}([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6} {0,}$/i;
var reg_psw = /^[A-Za-z0-9]{7,}$/;
var reg_country = /^ {0,}[A-Z][a-z]+( [A-Z][a-z]+){0,} {0,}$/;
var reg_postcode = /^ {0,}[0-9]{5} {0,}$/;

var form = document.querySelector('#r-form');
form.addEventListener('submit', validation);
function validation(event){
  var error = false;

  var formGroups = this.querySelectorAll('.control-group.required');
  formGroups = Array.prototype.slice.apply(formGroups);

  formGroups.forEach(function (item) {
    var input = item.querySelector('.control input');
    var regular = null;

    if(input.name == 'psw-r'){
      var pass = document.querySelector('input#psw').value;
      if(input.value == pass && input.value != ''){
        input.className = '';
        input.classList.add('valid');
      }else{
        input.className = '';
        input.classList.add('error');
        error = true;
      }
      return;
    }

    if(input.name == 'full-name') regular = reg_full_name;
    if(input.name == 'phone') regular = reg_phone;
    if(input.name == 'email') regular = reg_email;
    if(input.name == 'psw') regular = reg_psw;
    if(input.name == 'country') regular = reg_country;
    if(input.name == 'postcode') regular = reg_postcode;
    if(regular && regular.test(input.value)){
      input.className = '';
      input.classList.add('valid');
    }else{
      input.className = '';
      input.classList.add('error');
      error = true;
    };
  });

  if(error){
    var message = new Message('Fill all required field and verify your infromation');
    message.render();
  }else{
    var message = new Message('Successfully registered');
    message.render();
  }
  event.preventDefault();
  // return false;

}

function Message(message) {
  this.massage = message;
  this.element =  document.createElement('div');
  this.closer = document.createElement('span');
  this.closer.onclick = function(){
    this.parentNode.remove();
  };
}
Message.prototype.render = function () {
  var text = document.createTextNode(this.massage);
  var closerText = document.createTextNode('✖');
  Object.assign(this.element.style, {
    'position': 'fixed',
    'z-index': '5',
    'marginBottom': '5px',
    'width': '100%',
    'boxSizing': 'border-box',
    'padding': '20px',
    'backgroundColor': '#f00',
    'color': '#fff',
    'fontSize': '20px',
    'textAlign': 'center'
  });
  Object.assign(this.closer.style, {
    'width': '15px',
    'height': '15px',
    'position': 'absolute',
    'right': '5px',
    'top': '5px',
    'display': 'block',
    'cursor': 'pointer',
    'lineHeight': '15px',
    'color': '#fff',
    'fontSize': '16px',
    'fontWeight': 'bold'
  });
  this.closer.appendChild(closerText);
  this.element.appendChild(this.closer);
  this.element.appendChild(text);
  document.body.insertBefore( this.element, document.body.firstChild );
};
Message.prototype.destroy = function () {
  this.element.remove();
};