# *Documentation : www.techbyrachana.com*

OVERVIEW :

>SecureS3Web is a secure and scalable solution for hosting static websites using Amazon S3 and CloudFront. The setup ensures that the S3 bucket remains private while providing HTTPS access to users through CloudFront, a content delivery network (CDN).

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

---------------------------------------------------------------------------------------------------------------------------------------------
 SUMMARY: 
 
The above setup ensures that the website is accessible securely over HTTPS while maintaining the privacy of the S3 bucket.
---------------------------------------------------------------------------------------------------------------------------------------------
