import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import { doctorApi } from './DoctorLookup.js';

$(document).ready(function() {
  $('#searchDoctor').click(e => {
  e.preventDefault();
  let userInput = $('#doctorFind').val();
  Doctor.prototype.getDoctors(userInput, displayDoctor)
  $('#doctors').empty();
  });
});
