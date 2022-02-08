import { APIGatewayEvent } from 'aws-lambda';

export const handler = async (event: APIGatewayEvent) => {
    console.log('incoming event is', JSON.stringify(event));
    const response = {
        statusCode: 200,
        body: JSON.stringify({ message: 'Request was successful.' })
    };
    return response;
};
