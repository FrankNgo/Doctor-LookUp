import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import { doctorApi } from './DoctorLookup.js';

const displayDoctor = entry => {
  if (response.data.length == 0 ) {
    $('.list-doctors').text("There is no match with your search")
  } else {
    response.data.forEach(data => {
      let firstName = data.profile.first_name;
      let lastName = data.profile.last_name;

      $('#doctors').append(`<li>`
        + firstName + " "
        + lastName + " " + `<br>`
    })
  }
}


$(document).ready(function() {
  $('#searchDoctor').click(e => {
  e.preventDefault();
  let userInput = $('#doctorFind').val();
  Doctor.prototype.getDoctors(userInput, displayDoctor)
  $('#doctors').empty();
  });
});
