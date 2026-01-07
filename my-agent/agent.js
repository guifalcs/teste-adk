"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootAgent = void 0;
const adk_1 = require("@google/adk");
const zod_1 = require("zod");
/* Mock tool implementation */
const getCurrentTime = new adk_1.FunctionTool({
    name: 'get_current_time',
    description: 'Returns the current time in a specified city.',
    parameters: zod_1.z.object({
        city: zod_1.z.string().describe("The name of the city for which to retrieve the current time."),
    }),
    execute: ({ city }) => {
        return { status: 'success', report: `The current time in ${city} is 10:30 AM` };
    },
});
<<<<<<< HEAD
const sayHello = new adk_1.FunctionTool({
    name: 'say_hello',
    description: 'Say hello to the user.',
    parameters: zod_1.z.object({
        name: zod_1.z.string().describe("The name of the user."),
    }),
    execute: ({ name }) => {
        return { status: 'success', report: `Hello ${name}, mtfk!` };
    },
});
exports.rootAgent = new adk_1.LlmAgent({
    name: 'hello_time_agent',
    model: 'gemini-2.5-flash',
    description: 'You are a helpful assistant that interacts with the user. Talk with him as a normal person and only if he asks your name you will ask him his name and greet him using the say_hello tool. If he asks for the current time in a city, use the get_current_time tool to provide the information.',
    instruction: `You are a helpful assistant.
                Use the 'getCurrentTime' and 'say_hello' tool for this purpose.`,
    tools: [getCurrentTime, sayHello],
=======
exports.rootAgent = new adk_1.LlmAgent({
    name: 'hello_time_agent',
    model: 'gemini-2.5-flash',
    description: 'Tells the current time in a specified city.',
    instruction: `You are a helpful assistant that tells the current time in a city.
                Use the 'getCurrentTime' tool for this purpose.`,
    tools: [getCurrentTime],
>>>>>>> f2d3988084e0b5926712a9faed8b5f32d70c8b60
});
//# sourceMappingURL=agent.js.map