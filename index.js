function submitData(name, email) {
    const formData = {
      name: name,
      email: email,
    };
  
    return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Assuming there is a DOM element to append the id to
        const idElement = document.createElement('div');
        idElement.textContent = `User ID: ${data.id}`;
        document.body.appendChild(idElement);
      })
      .catch(error => {
        const errorElement = document.createElement('div');
        errorElement.textContent = `Error: ${error.message}`;
        document.body.appendChild(errorElement);
      });
  }
  
