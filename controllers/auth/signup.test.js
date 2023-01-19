const express = require("express");
const request = require("supertest");
const mongoose = require("mongoose");
const { User } = require("../../models/user");
const signup = require("./signup");

require('dotenv').config();

const { DB_HOST, PORT } = process.env;

const app = express();

app.get("/api/auth", signup);

describe("test signup controller"), () => {
    let server;
    beforeAll(() => app.listen(3000));
    afterAll(() => app.close());
}