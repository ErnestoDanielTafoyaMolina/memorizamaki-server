// import request from "supertest";
// import mongoose from "mongoose";
// import app from "../src/app.js"; // Asegúrate de que la ruta sea la correcta
// import User from "../src/models/users.models.js"; // Asegúrate de que la ruta sea la correcta
// import { mongo_uri } from "../src/config.js"; // Asegúrate de que la ruta sea la correcta

// beforeAll(async () => {
//   await mongoose.connect(mongo_uri, { useNewUrlParser: true });
// });

// afterEach(async () => {
//   await User.deleteMany({});
// });

// afterAll(async () => {
//   await mongoose.connection.close();
// });

// function getRandomPhoneNumber() {
//   return Math.floor(Math.random() * 10000000000);
// }

// async function generateUniqueEmail() {
//   let email;
//   do {
//     email = `user${Math.floor(Math.random() * 100000)}@example.com`;
//   } while (await User.findOne({ email }));
//   return email;
// }

// describe("Register 100 Users", () => {
//     it("should register 100 users with unique phone numbers and emails", async () => {
//       const start = Date.now(); // Captura el tiempo de inicio
  
//       for (let i = 0; i < 100; i++) {
//         const userData = {
//           username: `user${i}`,
//           email: await generateUniqueEmail(),
//           password: "password123",
//           phoneNumber: getRandomPhoneNumber(),
//           region: ["México", "Perú", "Venezuela", "EEUU", "Canadá"][Math.floor(Math.random() * 5)],
//         };
  
//         const response = await request(app)
//           .post("/api/register") // Reemplaza con la ruta correcta de tu endpoint de registro
//           .send(userData);
  
//         // Imprime el tiempo y el tamaño de la respuesta
//         console.log(`User ${i} registered in ${Date.now() - start} ms. Response size: ${JSON.stringify(response.body).length} bytes`);
  
//         expect(response.status).toBe(200);
//         expect(response.body.email).toBe(userData.email);
//       }
//     }, 15000); // Aumenta el tiempo de espera a 15000 ms (15 segundos)
//   });
  
