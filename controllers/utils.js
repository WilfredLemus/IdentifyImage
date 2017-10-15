'user strict'
const config = require('../config');
const request = require('request');
const rp = require('request-promise');


function callSendAPI(messageData){
  
  request({
    uri: 'https://graph.facebook.com/v2.6/me/messages',
    qs: { access_token: config.messenger.access_token },
    method: 'POST',
    json: messageData

  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var recipientId = body.recipient_id;
      var messageId = body.message_id;
      console.log("Successfully sent generic message with id %s to recipient %s", 
        messageId, recipientId);
    } else {
      console.error("Unable to send message.");
      console.error(response);
      console.error(error);
    }
  });
}


function getDataImg(imageUrl) {
  const urlDetect = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true&returnFaceAttributes=age,gender,glasses,smile';

  var options = {
    headers: {
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': config.apiKeyMicrosoft
    },
    uri: urlDetect,
    method: 'POST',
    json: {
      url: imageUrl
    } 
  };
  
  return rp(options);

  // request({
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Ocp-Apim-Subscription-Key': config.apiKeyMicrosoft
  //   },
  //   uri: urlDetect,
  //   method: 'POST',
  //   json: {
  //     url: imageUrl
  //   } 
  // }, 
  // function (error, response, data) {
  //   if (!error && response.statusCode == 200) {
  //     console.log(data);
  //     dataResponse = data;
  //   } else {
  //     return false;
  //     console.error("Error in post to FaceApi.");
  //     console.error(response);
  //     console.error(error);
  //   }
  // });

}


module.exports = {
  callSendAPI,
  getDataImg
}