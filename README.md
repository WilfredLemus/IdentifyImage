# IdentifyImage
Es un chatbot de Facebook Messenger, al enviarle una foto detecta el rostro y atributos como edad, sexo, sonrisa y lentes.

Esto lo realiza con el ApiFace de los Servicios Congnitivos de Microsoft.

> ### [CHATEAR CON EL BOT](https://m.me/IdentifyImage)

## Quickstart
1. Clone el repositorio e ingrese a la carpeta del mismo.

2. Instalar las dependencias:
    - ```npm install ```

3.Crear el archivo config.js y agregar [Access Token de Messenger](https://developers.facebook.com) y [ApiKey de Microsoft](https://azure.microsoft.com/en-us/services/cognitive-services/) (config.sample.js de ejemplo):
    - 
    ```
    messenger: {
      access_token: 'access_token_facebook_messenger',
      verify_token: 'verify_toke_for_you',
    },
    apiKeyMicrosoft: 'key_of_service_cognitives'
    ```

4. Correr servidor con ``` npm start ``` , recuerda que para Facebook Messenger tienes que estar en un protocolo seguro (https). Puedes subir el proyecto a un servidor con dicho protocolo (como [Heroku](https://heroku.com/)) o utilizar [ngrok](https://ngrok.com/) en local.


## screenshot/Video

Pendiente....