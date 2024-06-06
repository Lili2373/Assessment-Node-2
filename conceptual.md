### Conceptual Exercise

What is a JWT?

JWT stands for JSON Web Token. It is a compact, URL-safe means of representing claims to be transferred between two parties. These claims are typically used for authentication and information exchange in web applications.

What is the signature portion of the JWT? What does it do?

The signature portion of a JWT is one of the three parts of the token, alongside the header and the payload. It is created by hashing the header, the payload, and a secret key using an algorithm specified in the header. The signature ensures that the token has not been tampered with and can be trusted.

If a JWT is intercepted, can the attacker see what's inside the payload?

Yes, the payload of a JWT is base64-encoded, not encrypted. Therefore, if a JWT is intercepted, the attacker can decode the payload and see its contents. However, they cannot modify it without invalidating the signature.

How can you implement authentication with a JWT? Describe how it works at a high level.

In JWT-based authentication, when a user logs in successfully, the server generates a JWT containing user information as the payload. This JWT is then sent to the client, typically in the response header. Subsequent requests from the client include this JWT in the Authorization header. The server verifies the JWT's signature and extracts user information from the payload to authenticate and authorize the user.

Compare and contrast unit, integration and end-to-end tests.

Unit tests focus on testing individual units or components of code in isolation. Integration tests verify interactions between different components/modules of a system. End-to-end tests validate the entire system's functionality from start to finish, typically simulating user behavior.

What is a mock? What are some things you would mock?

A mock is a simulated object that mimics the behavior of real objects in controlled ways. In testing, mocks are used to isolate the code being tested from the rest of the system. They are commonly used to mock external dependencies such as databases, APIs, or external services.

What is continuous integration?

Continuous Integration (CI) is a development practice where developers integrate code into a shared repository frequently, preferably multiple times a day. Each integration is verified by an automated build and automated tests to detect integration errors as quickly as possible.

What is an environment variable and what are they used for?

An environment variable is a dynamic-named value that can affect the way running processes will behave on a computer. They are used to pass information about the execution environment to processes. Common uses include configuration settings, access credentials, and system paths.

What is TDD? What are some benefits and drawbacks?

Test-Driven Development (TDD) is a software development approach where tests are written before the actual code. Benefits include improved code quality, better design, and faster feedback. Drawbacks may include potential overhead in terms of time and effort, especially in the initial learning phase.

What is the value of using JSONSchema for validation?

JSONSchema provides a way to describe and validate the structure of JSON data. It ensures that data sent or received by an application meets a certain schema, helping to enforce data consistency and integrity.

What are some ways to decide which code to test?

Code criticality, complexity, and frequency of change are some factors to consider when deciding which code to test. Critical, complex, and frequently changing code typically warrants more extensive testing.

What does RETURNING do in SQL? When would you use it?

RETURNING is a SQL clause that returns data modified by DML statements (INSERT, UPDATE, DELETE). It is often used to retrieve the values of columns after an INSERT or UPDATE operation, eliminating the need for an additional SELECT query to fetch the modified data.

What are some differences between Web Sockets and HTTP?

Web Sockets provide full-duplex communication channels over a single, long-lived connection, enabling real-time data exchange between a client and a server. HTTP, on the other hand, is a request-response protocol that operates over multiple short-lived connections. Web Sockets are suitable for applications requiring low-latency, real-time data updates, while HTTP is better suited for traditional client-server interactions.

Did you prefer using Flask over Express? Why or why not?

Both Flask and Express are popular frameworks for building web applications in Python and JavaScript, respectively. Preferences between them can vary depending on factors such as familiarity with the language, project requirements, and personal coding style. I prefered Express for its robust ecosystem and performance.