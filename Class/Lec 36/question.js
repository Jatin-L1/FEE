/*
function DownloadFile(url,download)
----started Downloading
------setTimeout(2sec)------
       ---var a=url.split("/").pop()
       -----download(a)
-------DownloadFile()

function compressFile(path,compress)
------log("File compressing began")
------setTimeout(2s)
----------

function uploadFile(comp,upload)
------log("upload successful")

https://www.axyz.com/abc.mp3 => abc.mp3 => abc.zip


Let a=url.split('/).pop()

let b=comp.split('.') + "zip => " abc.zip

DownloadFile("https://www.axyz.com/abc.mp3", path)
*/


// Function to download a file
function DownloadFile(url, download) {
    console.log("Download started...");
    setTimeout(() => {
        var fileName = url.split("/").pop();
        console.log(`Downloaded file: ${fileName}`);
        download(fileName);
    }, 2000);
}

// Function to compress the downloaded file
function compressFile(fileName, compress) {
    console.log("File compressing began...");
    setTimeout(() => {
        var compressedFile = fileName.split(".")[0] + ".zip";
        console.log(`File compressed to: ${compressedFile}`);
        compress(compressedFile);
    }, 2000); 
}

// Function to upload the compressed file
function uploadFile(compressedFile, upload) {
    console.log("Uploading file...");
    setTimeout(() => {
        console.log(`Upload successful: ${compressedFile}`);
        upload(compressedFile);
    }, 2000); 
}

// Example usage of the functions with callbacks
DownloadFile("https://www.axyz.com/abc.mp3", function (downloadedFile) {
    compressFile(downloadedFile, function (compressedFile) {
        uploadFile(compressedFile, function () {
            console.log("Process completed!");
        });
    });
});
