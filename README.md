# HashingAPI
Node.js API using Express that accepts a file (request) and returns its SHA256 hash as a JSON object (response).

This API sets up an Express server with a single POST endpoint at `/hash`. When a file is uploaded to this endpoint, it calculates the SHA256 hash of the file and returns it as a JSON object.

## Usage
To start the API on your local machine, follow these steps:

1. Clone the repository by following command:
```
git clone https://github.com/SatyamV7/HashingAPI.git
```

3. Make sure you have Node.js and npm installed on your machine. You can download and install them from the official Node.js website if you haven't already.

4. Open a terminal or command prompt, navigate to the directory where you cloned the repository, and run the following command to install the necessary dependencies:

```
npm install express multer crypto
```

4. Once the dependencies are installed, you can start the API by running the following command in the terminal:

```
npm start
```

5. You should see a message indicating that the server is running on port 3000:

```
Server is running on port 3000
```

Now, the API is running on your local machine, and you can send requests to it as needed.

You can send a request to this API using various methods. One common way is to use a tool like cURL or Postman. Here's how to do it with cURL:

```bash
curl -X POST -F "file=@/path/to/your/file" http://localhost:3000/hash
```

Replace `/path/to/your/file` with the path to the file you want to upload. This command will send a POST request to `http://localhost:3000/hash` with the file attached. You'll receive a JSON response containing the SHA256 hash of the file.

Alternatively, you can create a form in HTML and use JavaScript to send the request. Make sure to send the file using a form with `enctype="multipart/form-data"`. Here's an example using the Fetch API:

```html
<!DOCTYPE html>
<html>
<head>
    <title>File Upload</title>
</head>
<body>
    <input type="file" id="fileInput">
    <button onclick="uploadFile()">Upload</button>

    <script>
        function uploadFile() {
            const fileInput = document.getElementById('fileInput');
            const file = fileInput.files[0];

            const formData = new FormData();
            formData.append('file', file);

            fetch('http://localhost:3000/hash', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                console.log('SHA256 Hash:', data.hash);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
    </script>
</body>
</html>
```

This HTML page allows you to select a file and upload it to the `/hash` endpoint using JavaScript's Fetch API. When the upload is successful, it logs the SHA256 hash to the console.
