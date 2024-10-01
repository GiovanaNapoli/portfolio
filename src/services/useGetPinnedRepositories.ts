import { gql, useQuery } from "@apollo/client";

const QUERY = gql`
  {
    user(login: "GiovanaNapoli") {
      pinnedItems(first: 6) {
        totalCount
        edges {
          node {
            ... on Repository {
              id
              name
              url
              stargazerCount
            }
          }
        }
      }
    }
  }
`;

interface ResponseProps {
  user: {
    pinnedItems: {
      totalCount: number;
      edges: {
        node: {
          id: string;
          name: string;
          url: string;
        };
      }[];
    };
  };
}

export default function () {
  const result = useQuery<ResponseProps>(QUERY);

  return { ...result };
}
