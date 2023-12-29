function getEvents() {
  // Set the API endpoint URL
  const endpointUrl = 'https://www.googleapis.com/calendar/v3/calendars/calendarId/events';

  // Set the calendar ID
  const calendarId = 'https://www.googleapis.com/calendar/v3/calendars/6c93f18c24f87270ade8abd3a4feec9d9edadd26cc907e349820321c4a1ce3bd@group.calendar.google.com';

  // Normally I would hide this, but the API is locked down to localhost and the website. 
  const apiKey = 'AIzaSyCZfkOMxglq6X4Q5YXoznrPRaLBfJfo0_8';

  // Build the API request URL
  const requestUrl = `${endpointUrl}?calendarId=${calendarId}&key=${apiKey}`;

  // Make an HTTP GET request to the API
  fetch(requestUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Check if there are events
      if (data.items && data.items.length > 0) {
        console.log(data);
      } else {
        console.log('No events scheduled.');
      }
    })
    .catch(error => console.error('If running on local host, you cannot access google api for calendar information'));
}

// Call the function
getEvents();