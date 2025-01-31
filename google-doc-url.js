// ID de la hoja de cálculo
var spreadsheetId = '1UDL7R83qJ6CpmPSu_Cp0WzU6ROfpaMPo0sdMJtWrkMk';
// El rango de celdas que deseas leer (ajústalo según sea necesario)
var range = 'Sheet1!A1:Z100';

// Tu clave de API de Google
var googleApiKey = 'AIzaSyBh9nKnVZm2RPeZa0ywCOxPAgJJfK87WhY';

// La URL para obtener los datos
var googleSheetsAPIUrl = 'https://sheets.googleapis.com/v4/spreadsheets/' + spreadsheetId + '/values/' + range + '?key=' + googleApiKey;

// Llamada AJAX para obtener los datos
fetch(googleSheetsAPIUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => console.error('Error:', error));
