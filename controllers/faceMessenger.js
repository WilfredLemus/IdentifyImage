'user strict'
const config = require('../config');
const recipients = require('../recipients/recipient');
const utils = require('./utils');

function verifyToken(req, res) {
  if(req.query['hub.verify_token'] === config.messenger.verify_token){
    res.status(200).send(req.query['hub.challenge']);
  }else {
    console.error("Failed validation.");
    res.sendStatus(403);
  }
}


function processMessage(req, res) {
  var data = req.body;
  if(data.object == 'page'){
    data.entry.forEach(function(entry) {
      entry.messaging.forEach(function(messagingEvent) {
        console.log(messagingEvent)
        if(messagingEvent.message){
          if(messagingEvent.message.attachments) {
            processImage(messagingEvent);
          }else {
            sendMessageText(messagingEvent);
          }
        }
      });
    });
    res.sendStatus(200);
  }
}

function sendMessageText(event) {
  var responseMessage = 'Hola, necesito que me envies una foto con tu rostro :)';
  var messageData = recipients.recipientText(event.sender.id, responseMessage);
  utils.callSendAPI(messageData);
}


function processImage(event){
  var responseMessage = 'Genial, dame un momento para procesar tu foto 😜';
  var messageData = recipients.recipientText(event.sender.id, responseMessage);
  utils.callSendAPI(messageData);

  // PROCESS IMAGE
  var imageUrl = event.message.attachments[0].payload.url;
  utils.getDataImg(imageUrl)
    .then(function (data) {
      console.log(data);
      var messageData = recipients.recipientGeneric(event.sender.id, imageUrl, data);
      utils.callSendAPI(messageData);
    })
    .catch(function (err) {
      console.error(err);
    });
}


module.exports = {
  verifyToken,
  processMessage
}