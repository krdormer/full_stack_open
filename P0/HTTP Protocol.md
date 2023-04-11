1. Hypertext Transfer Protocol
2. Application layer protocol for transmitting hypermedia documents such as HTML
3. Designed for communication between web browsers and servers, but can be used for other purposes 
4. Follows client-server model
	1. Client (browser) opens a connection to make a request, then waits until it receives a response 
5. Stateless protocol 
	1. Server does not keep any datas, or state, between 2 requests 
6. Methods:
	1. GET
		1.  Requests a representation of the specified resource. Requests using `GET` should only be used to request data (they shouldn't include data).
7. Status Codes:
	1. Issued by a server in response to a client's request
	2. Integers representing success, failure, or other status 
		-   _1xx informational response_ – the request was received, continuing process
		-   _2xx successful_ – the request was successfully received, understood, and accepted
		-   _3xx redirection_ – further action needs to be taken in order to complete the request
		-   _4xx client error_ – the request contains bad syntax or cannot be fulfilled
		-   _5xx server error_ – the server failed to fulfil an apparently valid request
8. Headers
	1. List of strings sent and received by client and server on every request and response 
	2. Invisible to end user
	3. Only processed and logged by server or client 
	4. Defines how information sent or received through the connection are encoded
9. 