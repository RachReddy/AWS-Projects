# *Documentation : www.techbyrachana.com*

OVERVIEW :

>SecureS3Web is a secure and scalable solution for hosting static websites using Amazon S3 and CloudFront. The setup ensures that the S3 bucket remains private while providing HTTPS access to users through CloudFront, a content delivery network (CDN).

---------------------------------------------------------------------------------------------------------------------------------------------
Points to Remember
------------------
What is CloudFront?
> In AWS, CloudFront is a Content Delivery Network (CDN) service.

> It helps deliver your website, videos, or other content to users quickly and securely, no matter where they are in the world.

>  CloudFront makes your content load faster, saves server resources, and keeps it secure.

How?
1. Speeds up delivery: CloudFront stores copies of your content (like images, videos, or web pages) in data centers around the globe (called edge locations). When a user requests your content, they get it from the nearest edge location, making it load faster.
2. Improves reliability: It reduces the load on your main servers by caching content at the edge.
3. Enhances security: It protects your content with features like HTTPS, encryption, and AWS Shield to guard against attacks.


---------------------------------------------------------------------------------------------------------------------------------------------
*Steps to Access a Secure Website Using SecureS3Web Setup :*

1. User Access:

    + The user opens a web browser (e.g., Google Chrome, Microsoft Edge) and enters the website URL.
    
2. DNS Resolution:

    + The browser queries the DNS service (e.g., GoDaddy) associated with the domain.
    
3. CNAME Record Redirection:

    + The DNS service uses a CNAME record to redirect the user’s request to the CloudFront distribution, which is AWS's CDN (Content Delivery Network) service.

4. Content Delivery via CloudFront:
   
    + CloudFront serves the static content (e.g., index.html, images, videos) stored in the S3 bucket.
    
5. Secure S3 Access with OAI:

   + The S3 bucket is configured to allow access only from CloudFront using an Origin Access Identity (OAI).
   + This ensures secure access to the bucket and prevents direct access from users via HTTP.

6. HTTP Restriction:

   + Direct HTTP access to the S3 bucket is restricted, forcing all traffic through CloudFront for secure delivery.

 7. SSL/TLS via ACM:

     + AWS Certificate Manager (ACM) is integrated with CloudFront to provide SSL/TLS certificates, enabling secure HTTPS connections.
     + An SSL/TLS certificate is a digital certificate that enables secure, encrypted communication between a web server and a client (browser).
     + SSL (Secure Sockets Layer) and TLS (Transport Layer Security) are cryptographic protocols that secure data transmission.
     + Encrypts data to prevent interception by attackers (man-in-the-middle attacks).
     + HTTPS (HyperText Transfer Protocol Secure) uses SSL/TLS to secure websites.
       
---------------------------------------------------------------------------------------------------------------------------------------------
 SUMMARY: 
 
The above setup ensures that the website is accessible securely over HTTPS while maintaining the privacy of the S3 bucket.
---------------------------------------------------------------------------------------------------------------------------------------------
