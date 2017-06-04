import $ from 'jquery'
import { ACCESS_TOKEN } from '../setting'

export const fetchInstagram = $.ajax(
  `https://api.instagram.com/v1/users/self/media/recent/?access_token=${ACCESS_TOKEN}`,
  {
    dataType: 'jsonp',
  }
)