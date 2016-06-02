//  Файл say-hello.js

module.exports = function( name, element )
{
  element.textContent = 'Привет, ' + name + '!';
};