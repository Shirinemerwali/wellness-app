import request from "supertest";

import { describe, it, expect } from "vitest";

import app from "../server.js";

describe("Auth Routes", () => {

  it("should return 404 for wrong route", async () => {

    const response = await request(app)
      .get("/wrongroute");

    expect(response.status).toBe(404);

  });

});