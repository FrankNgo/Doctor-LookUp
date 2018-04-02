import $ from 'jquery';

export class doctorApi {
  getDoctors(userInput, displayDoctor) {
    const apiKey = process.env.exports.apiKey;
    // const apiKey = '7c9ea3b81dc4d6d7f0c88e345d77cae5'
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${userInput}&location=or-portland&skip=0&limit=10&user_key=${apiKey}`)
    .then(entry => {
      displayDoctor(entry);
    })
    .fail(() => {
      $('#error').text("No Matches.")
    });
  }
}
