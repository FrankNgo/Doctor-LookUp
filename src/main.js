import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import { doctorApi } from './DoctorLookup.js';

const displayDoctor = entry => {
  if (entry.data.length == 0 ) {
    $('.doctorsList').text("There is no match with your search")
  } else {
    entry.data.forEach(data => {
      let firstName = data.profile.first_name;
      let lastName = data.profile.last_name;

      $('#showDoctors').append(`<li>`+ firstName + " "+ lastName + " " + `<br>`);
    });
  }
}


$(document).ready(function() {
  $('#searchDoctor').click(e => {
  e.preventDefault();
  let userInput = $('#doctorFind').val();
  doctorApi.prototype.getDoctors(userInput, displayDoctor)
  $('#showDoctors').empty();
  });
});
