# Architecture
* ## Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
  For the customer-facing portion of this project, we used Express. For the Single-Page Application, we used Angular. Both of these frameworks use a little bit of HTML and quite a bit of JavaScript--well, more accurately, TypeScript, which is a superset of JavaScript.
  The Express framework is very well suited to backend applications and interfacing with the database, which is why it was used for the customer-facing portion of the webpage. Express serves up more-or-less static pages (that may have dynamically generated content on them).
  Angular is a better choice for making an interactive and dynamic web application, which is why it was the obvious choice for the SPA.
* ## Why did the backend use a NoSQL MongoDB database?
  The backend uses MongoDB because it is a flexible and scalable database solution. It is very easy to apply and change schemas for data to be stored in a MongoDB, meaning that if the application requirements change down the road, we won't have to reinvent the wheel. MongoDB also uses a data interchange format called BSON, which is very similar to JSON, making it easy to work with in this application.
# Functionality
* ## How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
  JSON stands for JavaScript Object Notation. It is a data interchange format, a means for exchanging data. On the other hand, JavaScript is a programming language. We use JavaScript to create dynamic webpages. JSON is a convenient way to pass data and objects to and from a JavaScript application. This makes it a great choice for our application, as we will need to pass data between the front- and backends frequently.
* ## Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.
  One example of refactoring that we did on this project was when we changed the trip display functionality in the SPA from a list to a series of cards. This involved the creation of a reusable trip card component, which allowed for a streamlining of the application.

# Testing
* ## Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.
  Methods are the functions that are performed by the application. In this instance, it refers to both the HTTP request methods and the API methods used in our application. Endpoints are the locations that are navigated to in order to retrieve data from the API, such as "/api/trips". Security, in the scope of this project, refers to the authentication functionality we incorporated into the application. For this project, we performed basic testing to ensure that each API endpoint behaved as expected and, after adding authentication, only performed actions for authorized users. These tests were performed by creating test trip packages using the SPA and by creating HTTP requests using Postman.

# Reflection
* ## How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
  This course has taught me a lot! I now have a good understanding of how front- and backend components work together in a full-stack application. I am now better able to trace the logic and operations as data is transferred between the two layers. This was immensely helpful in debugging the various assignments in this course and will doubtless be an invaluable skill in my professional life.
