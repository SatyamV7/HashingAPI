# HashingAPI
Node.js API using Express that accepts a file upload and returns its SHA256 hash as a JSON object

This API sets up an Express server with a single POST endpoint at `/hash`. When a file is uploaded to this endpoint, it calculates the SHA256 hash of the file and returns it as a JSON object.

## Usage
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