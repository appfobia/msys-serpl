// client-side js
// run by the browser each time your view template is loaded

console.log('hello world :o');
var list =[];

function saveToLocalDb(_data) {
    console.log(_data.responseJSON);
        list.push(_data.responseJSON);
     
}

function onSuccess(_data) {
  /*
        var obj={};
        console.log("success");
        const data = $('#inoutfileForm').serializeArray();
        data.forEach(function(ele,index){
        obj[ele.name]= ele.value;
        });
        inFiles.push(obj); */
        saveToLocalDb(_data);
        document.getElementById("alert_msg").classList.remove('nodisplay');
        setTimeout(function(){ document.getElementById("alert_msg").classList.add('nodisplay');}, 3000);
        //appendNewFile(obj);
}

/*
function appendNewFile(_fileObj) {
  const newListItem = document.createElement('li');
  newListItem.innerHTML = dream;
  dreamsList.appendChild(newListItem);
}
*/
$(document).ready(function(){

$('#inout_btn').click(function(e){
  console.log("btn clicked!");
  e.preventDefault();
  const data = $('#inoutfileForm').serializeArray();
  //console.log(data);
  $.ajax({
      type: "POST",
      url: "/fileinoutdata",
      data: data,
      dataType: "json",
      success: function(data) {
      //console.log(JSON.stringify(data));
      },
      complete: function(_data) {
        onSuccess(_data);
     },
    error: function() {
        //alert('error handing here');
    }
});
});
  
$('.tab').on('click',function(e){
console.log("click!");
  
});
 

  
});
/*  
  $('#inoutfileForm').submit(function(e){

  const form = e.target;
  $(document.body).append(form);
  form.submit();
  //e.preventDefault();
  return false;
  });
});
*/
/*
// our default array of dreams
const dreams = [
  'Find and count some sheep',
  'Climb a really tall mountain',
  'Wash the dishes'
];

// define variables that reference elements on our page
const dreamsList = document.getElementById('dreams');
const dreamsForm = document.forms[0];
const dreamInput = dreamsForm.elements['dream'];

// a helper function that creates a list item for a given dream
const appendNewDream = function(dream) {
  const newListItem = document.createElement('li');
  newListItem.innerHTML = dream;
  dreamsList.appendChild(newListItem);
}

// iterate through every dream and add it to our page
dreams.forEach( function(dream) {
  appendNewDream(dream);
});

// listen for the form to be submitted and add a new dream when it is
dreamsForm.onsubmit = function(event) {
  // stop our form submission from refreshing the page
  event.preventDefault();

  // get dream value and add it to the list
  dreams.push(dreamInput.value);
  appendNewDream(dreamInput.value);

  // reset form 
  dreamInput.value = '';
  dreamInput.focus();
};
*/