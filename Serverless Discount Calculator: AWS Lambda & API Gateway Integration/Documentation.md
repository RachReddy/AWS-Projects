# *Documentation: Serverless Discount Calculator*

>This project involves the development of a Serverless Discount Calculator that calculates discounted prices based on user inputs. It leverages AWS services such as Lambda and API Gateway for backend functionality, alongside a responsive UI built with HTML, CSS, and JavaScript for seamless user interaction. The serverless architecture ensures scalability, cost-effectiveness, and minimal maintenance.

#

Prerequisites:
 1. AWS account with access to Lambda, API Gateway, and CloudWatch.
 2. Code editor (e.g., Visual Studio Code) for frontend development.
 3. Basic knowledge of AWS and JavaScript.
    
---------------------------------------------------------------------------------------------------------------------------------------------
OVERVIEW
>The Serverless Discount Calculator allows users to input a product's price and a discount percentage, returning the discounted price as the output. This serverless architecture improves scalability and reduces operational overhead, making it suitable for production environments with variable traffic.

---------------------------------------------------------------------------------------------------------------------------------------------


PROJECT ARCHITECTURE COMPONENTS

1. AWS Lambda:
  
    + Hosts the backend logic for discount calculation.
    + Processes JSON inputs and returns results in real-time.

2. API Gateway:  (In AWS, the API Gateway service helps you create, manage, and secure APIs for your applications.)
    + Exposes the Lambda function via a RESTful endpoint. (OR Provides a URL (endpoint) to let users access the Lambda function.)
    + Receives user input from the web app, sends it to Lambda for processing, and delivers the result back to the web app.
    + In simple terms, it handles HTTP POST requests from the frontend.
  
      Points to remember
      ------------------
      > What is an API Gateway?
      > It acts like a front door for all the APIs in an application.
      > It acts as a bridge between users and your backend systems (like Lambda functions, EC2 instances, or databases).
      > It handles requests from users, sends them to the right backend services, and returns the response to the user.
     

4. Frontend:
    + Built using HTML, CSS, and JavaScript.
    + Provides an interactive user interface for data entry and displays results dynamically.

5. CloudWatch:
    + Monitors API and Lambda performance.
    + Logs requests and responses for debugging.
    
---------------------------------------------------------------------------------------------------------------------------------------------

FEATURES

  + Serverless REST API
  + Responsive UI
  + Seamless Integration
  + Cost-Effective

---------------------------------------------------------------------------------------------------------------------------------------------

TECHNOLOGY STACK

  + Frontend      : HTML5, CSS3, JavaScript (Vanilla)
  + Backend       : AWS Lambda (Python/Node.js/C#)
                    AWS API Gateway
  + Testing Tools : Postman for API testing.
  + Monitoring    : AWS CloudWatch for logs and metrics.
---------------------------------------------------------------------------------------------------------------------------------------------

STEPS :

1. Create a Lambda Function:

   + Log in to the AWS Management Console.
   + Navigate to Lambda and create a new function using the appropriate runtime (e.g., Python/Node.js/C#).
   +  Write or upload the backend logic to calculate discounted prices.
     
2. Configure API Gateway:

    + Navigate to API Gateway in the AWS Console.
    + Create a REST API and configure a POST method to invoke the Lambda function.
    + Deploy the API to a stage (e.g., "Dev") and note the Invoke URL.
    
3. Develop the Frontend:

    + Build the UI using the provided HTML, CSS, and JavaScript.
    + Update the API endpoint in the JavaScript code to match your API Gateway's Invoke URL.
    
4. Host the Frontend:

    + Use Amazon S3 for static website hosting, or run the HTML locally during development.
    
5. Test the Integration:

    + Test the Lambda function independently using the AWS Lambda test console.
    + Test the API using Postman with sample payloads.
    + Verify the end-to-end functionality by submitting inputs via the frontend.

    ---------------------------------------------------------------------------------------------------------------------------------------------

