const sayHello = require( './say-hello' );

require( './styles/main.scss' );

sayHello( 'Иван Иванов', document.querySelector( 'h2' ) );

/*
* Создаем изображение и вставляем его в тело документа
* */
var imgElement = document.createElement( 'img' );
imgElement.src = require( './images/my-image.png' );

document.body.appendChild( imgElement );