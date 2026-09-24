
## How the web works
1. The browser goes to the DNS server and finds the real address of the server that the website lives on.
	* DNS is used as a lookup tool to find the IP addresses of a website.
2. The browser sends an HTTP request message to the server, asking it to send a copy of the website to the client. This message, and all other data sent between the client and the server, is sent across your internet connection using TCP/IP.
3. If the server approves the client's request, the server sends the client a "200 OK" message, which means "Of course you can look at that website! Here it is", and then starts sending the website's files to the browser as a series of small chunks called **packets**.
	* When data is sent across the web, it is sent in multiple small chunks called packets. Each packet contains:
		- A **header**, which includes details such as the server and client IP address, the packet number, the total number of packets in the transmission, and details of the protocols used in the transmission.
		- A **payload**, which contains the actual data sent in the packet.
	* why data is sent in small packets?
		* when a drop or corruption happens, it's quicker and easier for the client to request the missing packets rather than an entire file.
		* The packets can be routed along different paths, making the transmission as efficient as possible and reducing the possibility of slowing down the network
	* Important status codes
		1. `301`
			* The requested resource has been permanently moved to a new location, which is provided in the response. This is used for redirecting content when it's moved.

		2. `400`
			* The server can't process the request. This usually happens when the request isn't in a format the server understands, or has errors in it.

		3. `403`
			* The server will not give the client access to the requested resource. This usually happens when the server knows who the client is, but they don't have permission to access the requested page.

		4. `404`
			* The server cannot find the requested resource. This status is commonly returned if the URL is wrong or if content is deleted without putting a redirect in place.

		5. `503`
			* The request cannot be handled due to a problem with the server. This is common when servers are offline for maintenance, and it's expected to be temporary.
4. The browser assembles the small chunks into a complete web page and displays it to you.

## The web standards model
* 


## How browsers load websites