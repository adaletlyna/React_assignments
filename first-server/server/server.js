import express from "express";
import { faker } from "@faker-js/faker";
const app = express();
const port = 8000;



const createUser = () => ({
  _id: faker.string.uuid(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  phoneNumber: faker.phone.number(),
});

const createCompany = () => ({
  _id: faker.string.uuid(),
  name: faker.company.name(),
  address: {
    street: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    zipCode: faker.location.zipCode(),
    country: faker.location.country(),
  },
});


app.get("/api/users/new", (req, res) => {
  res.json(createUser());
});

app.get("/api/companies/new", (req, res) => {
  res.json(createCompany());
});

app.get("/api/user/company", (req, res) => {
  res.json({
    user: createUser(),
    company: createCompany(),
  });
});
// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
