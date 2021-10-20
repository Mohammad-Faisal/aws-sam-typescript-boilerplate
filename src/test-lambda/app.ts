import { APIGatewayEvent } from "aws-lambda";

export const handler = async (event: APIGatewayEvent) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(JSON.stringify({ message: "Request was successful" })),
  };
  return response;
};
