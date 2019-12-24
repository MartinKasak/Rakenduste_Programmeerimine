const request = require("supertest");
const express = require("express");
const userRouter = require("../user.router.js");
const app = express();
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoServer = new MongoMemoryServer();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(userRouter);

beforeAll(async () =>{
    const URI = await mongoServer.getConnectionString();
    await mongoose.connect(URI,  { useNewUrlParser: true } );
});

afterAll( async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
});

it("should return empty list of users" , (done) =>{
    request(app)
      .get("/")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, [], done);
});

it("should create a new user", (done) =>{
    request(app)
    .post("/")
    .send({
      email: "test@gmail.com",
      password: "secret890"
    })
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200)
    .end( (err, res) =>{
        if(err) return done(err);
        expect(res.body.email).toBe("test@gmail.com");
        return done();
    });
});

it("should return 1 user", (done) =>{
    request(app)
    .get("/")
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200)
    .end( (err, res) =>{
        if(err) return done(err);
        expect(res.body[0].email).toBe("test@gmail.com");
        return done();
    });
});