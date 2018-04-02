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
      let address_street = data.practices[0].visit_address.street;
      let address_state = data.practices[0].visit_address.state;
      let address_zip = data.practices[0].visit_address.zip;

      $('#showDoctors').append(`<li>`+ firstName + " "+ lastName + " " + address_street + " " + address_state + " " + address_zip + `<br>`);
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
