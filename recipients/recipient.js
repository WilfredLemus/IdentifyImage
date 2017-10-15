function recipientText(idSender, message) {
  return {
    recipient: {
      id: idSender
    },
    message: {
      text: message
    }
  };
}

function recipientGeneric(idSender, urlImg, data) {
  
  var edad = parseInt(data[0].faceAttributes.age);
  var sexo = ((data[0].faceAttributes.gender == 'male') ? 'Masculino' : 'Femenino');
  var sonrisa = (data[0].faceAttributes.smile * 100);

  var text = `Edad: ${edad}, Sexo: ${sexo}, Sonrisa: ${sonrisa}%, Lentes: ${data[0].faceAttributes.glasses}`;

  return messageData = {
    recipient: {
      id: idSender
    },
    message: {
      attachment: {
        type: "template",
        payload: {
          template_type: "generic",
          elements: [{
            title: text,
            image_url: urlImg,
          }]
        }
      }
    }
  };  
}


module.exports = {
  recipientText,
  recipientGeneric
}
