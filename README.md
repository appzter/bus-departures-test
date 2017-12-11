#Bus Departures Test.

Small application I created when playing around with the Stockholm public transportation API.

- Uses the SL API to fetch data about bus departures from a hardcoded location.
- Built with React and ES6
- Hosted on departures-977ba.firebaseapp.com/ for demo purposes.

To use:

1. Get an API key from https://www.trafiklab.se/api/sl-realtidsinformation-4
2. Create the file secretKey.js in /src and add the line ```export const apiKey={your key}```
3. You will probably want to change the departure location. The location is determined with the siteId property in the query string, so find out what siteId matches your location on the trafiklab site and change it in the API query.
4. Voila, should work!
