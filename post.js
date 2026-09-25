

async function createUser() {
  const user = {
    name: "John",
    username: "john123",
    email: "john@example.com"
  };

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    }
  );

  const data = await response.json();

  console.log(data);
}

createUser();