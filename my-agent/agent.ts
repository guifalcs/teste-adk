import {FunctionTool, LlmAgent} from '@google/adk';
import {z} from 'zod';

/* Mock tool implementation */
const getCurrentTime = new FunctionTool({
  name: 'get_current_time',
  description: 'Returns the current time in a specified city.',
  parameters: z.object({
    city: z.string().describe("The name of the city for which to retrieve the current time."),
  }),
  execute: ({city}) => {
    return {status: 'success', report: `The current time in ${city} is 10:30 AM`};
  },
});

const sayHello = new FunctionTool({
  name: 'say_hello',
  description: 'Say hello to the user.',
  parameters: z.object({
    name: z.string().describe("The name of the user."),
  }),
  execute: ({name}) => {
    return {status: 'success', report: `Hello ${name}, mtfk!`};
  },
});

export const rootAgent = new LlmAgent({
  name: 'hello_time_agent',
  model: 'gemini-2.5-flash',
  description: 'You are a helpful assistant that interacts with the user. Talk with him as a normal person and only if he asks your name you will ask him his name and greet him using the say_hello tool. If he asks for the current time in a city, use the get_current_time tool to provide the information.',
  instruction: `You are a helpful assistant.
                Use the 'getCurrentTime' and 'say_hello' tool for this purpose.`,
  tools: [getCurrentTime, sayHello],
});