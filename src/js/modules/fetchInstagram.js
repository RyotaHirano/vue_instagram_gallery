import 'whatwg-fetch'
import $ from 'jquery'

export default function fetchInstagram() {
  const fetchInstagram = () => {
    fetch(
      `https://api.instagram.com/v1/users/self/media/recent/?access_token=5410618512.a999b0b.d4d95a7f76c644048aa3740728deaef0`,
      {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
      }
    )
      .then(response => {
        if(response.ok) {
          response.json().then(data => {
            console.log(data);
          })
        }
      })
      .catch(error => {
        console.log('There has been a problem with your fetch operation: ' + error.message);
      })
  }

  const jQueryGetInstagram = () => {
    $.ajax(
      `https://api.instagram.com/v1/users/self/media/recent/?access_token=5410618512.a999b0b.d4d95a7f76c644048aa3740728deaef0&callback=callbackFunction`,
      {
        dataType: 'jsonp',
      }
    )
      .done(data => {
        console.log(data);
      })
  }

  jQueryGetInstagram()

  const callbackFunction = data => {
    return data
  }
}