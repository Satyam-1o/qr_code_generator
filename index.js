

function getUrl() {
    document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // ⛔ stop form from reloading page

    let url = document.getElementById('link').value;
    console.log("URL entered:", url);
});
}

