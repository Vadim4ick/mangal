import { GraphQLClient } from "graphql-request";

import { getSdk } from "./__generated__";

const client = new GraphQLClient(
  `${process.env.NEXT_PUBLIC_SERVER_URL}/graphql`,
  {
    // headers: {
    //   Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
    // },
  },
);

export const gql = getSdk(client);

export * from "./__generated__";
