1. 1st rule of webdev: Always keep dev console open
	1. `option-cmd-i`
	2. `Disable-cache` should be on
	3. `Preserve log`
		1. Saves logs printed by app when page is reloaded 
2. HTTP GET
	1. Server and browser communicate using the [[HTTP Protocol]] 
	2. Network tab shows how they communicate 
		1. When clicking on an event, a side window will open showing details about it
		2. General
			1. Shows some general info about the request
			```
			1.  Request URL: https://studies.cs.helsinki.fi/exampleapp/
			2.  Request Method: GET
			3.  Status Code: 200
			4.  Remote Address: 128.214.9.77:443
			5.  Referrer Policy: strict-origin-when-cross-origin			
			```
		3. Response Headers
			1. Show header encoding from response 
		4. Request Headers
			1. Show header encoding info from request 
3. Traditional Web Development
	1. Static pages
		1. Requests to the server will return a pre-formed HTML document 
	2. Dynamic pages
		1. Requests to the server will return an HTML document, but the content of the page can be updated or changed based on data within the server logic / database
		2. Ex: `<h1>Hello {user.name}</h1>`
		```js
		const getFrontPageHtml = noteCount => {
		  return `
		    <!DOCTYPE html>
		    <html>
		      <head>
		      </head>
		      <body>
		        <div class='container'>
		          <h1>Full stack example app</h1>
		          <p>number of notes created ${noteCount}</p>
		          <a href='/notes'>notes</a>
		          <img src='kuva.png' width='200' />
		        </div>
		      </body>
		    </html>
		`
		}
		
		app.get('/', (req, res) => {
		  const page = getFrontPageHtml(notes.length)
		  res.send(page)
		})
		```
4. Running application logic in browser
	1. `<script type='text/javascript' src='./index.js'></script>` 
		1. Can be placed in the `head` or `body` of the HTML document
		2. When loaded by the browser, a request to the specified URL will be made and the contained Javascript loaded 
		3. When encountered by the browser, will immediately begin loading, and size of program can cause delays in DOM rendering if JS file is too large 
5. Event handlers and Callback functions
	1. Event handlers
		1. Code which listens for an 'event' to occur, after running its contained code 
		2. Also called callback functions 
6. Document Object Model (DOM)
	1. Tree structure representing the structure of the web page 
	2. Can be viewed in dev tools under 'Elements'
7. Manipulating the DOM
	1. Topmost node on DOM tree is called the `document` object
	2. Actions can be performed using the DOM-API methods
		1. `getElementsByTagName()`
		2. `createElement()`
		3. `appendChild()`
8. Cascading Style Sheets (CSS)
	1. Style sheet language used to describe the appearance of elements on a page 
9. Forms and HTTP POST
	1. Form elements allow users to enter information which is packaged into a single entity
	2. Has methods and attributes to be used to send that information using the network
	3. Usually sends a POST request to the server containing the form information in the body 
10. AJAX (Asynchronous JavaScript and XML)
	1. Describes a new revolutionary approach that enabled the fetching of content to web pages using JavaScript included within the HTML, without the need to rerender the page.
11. SPA (Single Page Application)
	1. Don't fetch all pages seperately from the server, instead fetch a single document the contents of which are manioulated with Javascript that executes in the browser
	2. 