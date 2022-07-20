import { ApolloServer, ExpressContext } from "apollo-server-express";
import "reflect-metadata";

import createApolloServer from "../src/utils/createApolloServer";

let server: ApolloServer<ExpressContext>;

beforeAll(async () => {
  server = await createApolloServer();
});

describe("User Resolver", () => {
  it("Creates new user correctly", async () => {
    const email = `test@test.com`;
    const password = "12345678";

    const QUERY_DATA = `
      mutation($data: UserAuthInput!) {
        register(data: $data) {
          errors {
            field,
            message
          }
          user {
            email,
          }
        }
      }
    `;

    const data = {
      data: {
        email: email,
        password: password,
      },
    };

    const response = await server.executeOperation({
      query: QUERY_DATA,
      variables: data,
    });

    expect(response.errors).toBeUndefined();
    expect(response).toMatchSnapshot();
  });

  it("Log in new user correctly", async () => {
    const email = `test@test.com`;
    const password = "12345678";

    const QUERY_DATA = `
      mutation Login($data: UserAuthInput!) {
        login(data: $data) {
          errors {
            field,
            message
          }
          user {
            id,
            email,
            createdAt,
            updatedAt
          }
        }
      }
    `;

    const data = {
      data: {
        email: email,
        password: password,
      },
    };

    const response = await server.executeOperation({
      query: QUERY_DATA,
      variables: data,
    });

    expect(response.errors).toBeUndefined();
    expect(response).toMatchSnapshot();
  });
});

afterAll(async () => {
  server.stop();
});
