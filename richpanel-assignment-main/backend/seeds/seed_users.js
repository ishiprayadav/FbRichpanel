const { v4: uuidv4 } = require("uuid");

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  // await knex("Users").del();
  await knex("Users").insert([
    {
      UserID: "8430670b-c492-4c0d-8fa5-811ab4e52884",
      Name: "Simran Yadav",
      EmailAddress: "abcd@test.com",
      Password: "123gh",
    },
    {
      UserID: "b9bae0b8-f270-4d13-8e50-f657c276373f",
      Name: "Alexa",
      EmailAddress: "alexa@amazon.com",
      Password: "amazon1",
    },
  ]);
};
