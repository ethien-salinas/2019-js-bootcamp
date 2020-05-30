# Graphql API

To create a user
```sh
mutation{
  signup(name: "Ethien Salinas", email: "ethien.salinas@gmail.com", password: "qwerty"){
    id
    name
    email
  }
}
```

To get a token
```sh
query {
 signin(email: "ethien.salinas@gmail.com", password: "qwerty")
}
```