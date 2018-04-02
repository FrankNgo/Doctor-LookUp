import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  doctorApi
} from './DoctorLookup.js';

const displayDoctor = entry => {
  if (entry.data.length == 0) {
    $('.doctorsList').text("There is no match with your search")
  } else {
    entry.data.forEach(data => {
      let firstName = data.profile.first_name;
      let lastName = data.profile.last_name;
      let address_street = data.practices[0].visit_address.street;
      let address_state = data.practices[0].visit_address.state;
      let address_zip = data.practices[0].visit_address.zip;
      let phoneNumber = data.practices[0].phones[0].number;
      let biography = data.profile.bio;
      let picture = data.profile.image_url;
      let doctorWebsite = data.practices[0].website;
      if (doctorWebsite === undefined) {
        doctorWebsite = "No website available."
      } else if (doctorWebsite === entry.data.practices[0].website) {
        doctorWebsite = entry.data.practices[0].website;
      }
      let acceptNewPatients = data.practices[0].accepts_new_patients;
      if (acceptNewPatients === true) {
        acceptNewPatients = "Currently accepting new patients.";
      } else if (acceptNewPatients === false) {
        acceptNewPatients = "Not currently accepting new patients."
      }

      $('#showDoctors').append("</p> </div> <div class='col-lg-5 col-sm-pull-6  col-sm-6'><img class='img-responsive doc-profile' src=" + picture + "<br>" + "<br>" + firstName + ' ' + lastName + "<br>" + address_street + ' ' + address_state + ' ' + address_zip + "<br>" + phoneNumber + "</h2>" + "<p class='lead'>" + biography + "<br>" + doctorWebsite + "<br>" +  "<strong>" + acceptNewPatients);
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
