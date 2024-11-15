# *HOST A STATIC WEBSITE ON AMAZON S3*


What is a Static website?
 > It is a type of website that delivers the same, fixed content to every user. 
 > Displays content exactly as it's written, without any dynamic changes based on user input or other factors. 
 > The content on website doesn't react adaptively to what the user is inputting.


Examples of static website
 1. Small Business Websites 
     > Brochure Sites: Many small businesses create simple websites with fixed information about their services, hours, location, and contact details.
     
	   > Landing Pages: Businesses often create landing pages for specific products, services, or promotions with no dynamic features or user accounts.
	
 2. Documentation Sites
     > Docs for Open-Source Projects: Static site generators like Docusaurus or MkDocs are popular for creating documentation for open-source software projects.
     
     > API Documentation: Some companies and developers use static documentation to guide users on integrating with their APIs or using their tools.
	 
 3. Marketing Websites :
	   > Event Pages: Many conferences or events use static websites to provide information, schedules, and speaker details.
	   
     > Product Launch Pages: Single-page websites for product launches are often static, designed to showcase product features, images, and links to purchase.

 4. Blogs and News Sites
     > Developer Blogs, Newsletters for readers,

 5.	Corporate Landing Pages
	   > Information-only Sites
	
	
Examples of non-static websites?
 > facebook, tiktok : where feed is contantly changing.	
 
 
---------------------------------------------------------------------------------------------------------------------------------------------
*What is AMAZON S3?*
--------------------------

S3 (SIMPLE STORAGE SERVICE)

* It can be used as a storage bucket (like how you use googledrive, iCloud) thats in the cloud that can store static html files.

* Its mainly used for storage and the plus point is that it handles
  
    a. Infrastructure
    b. Maintenance
    c. Security
    so you can simple store what you need to store.
  
* Its a serverless service, which means it will automatically scale up in demand.
* Can store unlimited data and can be accessed from anywhere from the world. 
 
 
*How does S3 actually work?*
--------------------------

* It has buckets which store the data.
* Each bucket has a unique bucket name.
* With each bucket, you can always see the logs on who has accessed it and who has access to its content.
* Permissions can be added to the bucket, so you can add locks and have control over who can access it.
* Can add location to your bucket so as where its actually gonna be or where you can access the data.

* Each AWS Account allows you to set up 100 buckets.
* Once you've created your bucket and selected the region of your bucket, you cannot change that region.
* Also if you end up putting more than a 100,000 objects into your bucket then you cant remove it using the S3 console.
  Even worse if the virgine is turned on then you cannot remove the S3 bucket through the AWS CLI

 Now your bucket can do all sorts of cool thing aside from just store data, it can actually even host static website.

 We can access all the objects that are within our bucket by using keys and that's how we can identify each object or file or whatever it is that you want to 
 store in there with that unique key.

S3 also has a bunch of storage classes.
> You end up thinking S3 is just a great storage bucket but actually no it's like having all these buckets in different colors & shapes & sizes & you got to work out which one is best for you.

 
S3 Storage Classes (Types)
-------------------

1. S3 STANDARD

 * S3 Standard is for your frequently accessed data, the things you're accessing more than once a month with millisecond access.
 * data that requires high durability and low latency.
 
    examples : 
    > Hosting images, videos, and static web content for websites

    > Backup and recovery (Reliable storage for backup files that might be accessed regularly for recovery.)


2. STANDARD-IA

 * This is for infrequently accessed data, the things you're accessing Not more than once a month with millisecond access.
 * data that is accessed less frequently but still requires rapid retrieval when needed.
 
    examples: 
    > Long-Term Backups (Data backup that doesn't need frequent access but must be available immediately in case of disaster recovery.)
  
    > Data Archiving with Occasional Access (Archiving data that may need to be accessed a few times a month, such as compliance records.)
  
    > File Sync and Share (Files or datasets that users access occasionally, like older project files.)


3. ONE ZONE-IA	
 
 * This is data that can be recreated if it's lost but it's accessed way less frequently again millisecond access here.
 * data that’s infrequently accessed, non-critical, and can tolerate being stored in a single availability zone (AZ).
 * basically for, secondary backups for copies of copies that can be easily recreatable data.
 
    examples:
    > Secondary Backups: Redundant copies of backup data where immediate availability across regions isn’t critical.

    > Recreatable Data: Datasets that can be regenerated or retrieved if lost, like media processing files or temporary logs.

    > Development and Test Data: Storage for test or staging environments that don’t require high durability across multiple zones.

  
4. INTELLIGENT-TIERING

 * This is for data with unknown or changing access patterns because it will move data between different tiers depending on how often it is accessed.
 * data with unpredictable or changing access patterns, as it automatically moves objects between two access tiers (frequent and infrequent) based on usage. 
 
    examples:
    > You have a YT channel, one of your videos is more popular with views while the others could have less than 1/4 of its views.

 
5. GLACIER INSTANT RETRIEVAL

 * This is for your long term archive data that is accessed maybe once a quater and you still need to get it within like milli second.
 * data that’s rarely accessed but requires immediate retrieval when needed. 
 * this is the lowest cost storage option for your long live data.

   examples: 
   > Medical Imaging: Storing X-rays or MRI scans that need quick retrieval for occasional access by doctors.

   > Regulatory and Compliance Archives: Retaining documents or records that are rarely accessed but must be readily available.

   > Digital Media Archives: Media files, like old videos or archived footage, that need to be accessed instantly for reuse or remastering.


6. GLACIER FLEXIBLE RETRIEVAL

 * This is for your much longer term backups, like once a year and retreival is now instead of milli seconds is now in MINUTES or even HOURS. 
 * this is good for backup & diasester recovery where it doesn't really matter about cost & you're okay with it being retrieved in minutes.
 * data that’s accessed infrequently, with some flexibility in retrieval times.
 * This class allows retrieval within hours and provides cost-effective storage for archival data.
 
   examples: 
   > Historical Archives: Archiving old data, such as financial records, that might only be accessed occasionally for audits or analysis.

   > Scientific Research Data: Storing large research datasets, like climate data, that may be needed infrequently but require affordable storage.

   > Media Archives: Retaining old media content or news footage where slower retrieval is acceptable.


7. GLACIER DEEP ARCHIVE

 * This is real long term one, again maybe accessing once or twice a year but its got a retrieval time of 12 hours.
 * so this one is gonna be cheaper but you can't expect to get anything back in a hurry.
 * its for the kinds, you need to keep it but you may not really need to access it.
 * ideal for rarely accessed data that can be archived affordably.
 
   examples: 
   > Long-Term Compliance Data: Storing records required for regulatory compliance that are not accessed regularly.

   > Digital Preservation: Archiving historical documents, images, or cultural artifacts for future generations.

   > Backup of Critical Data: Keeping backup copies of essential data that do not require immediate access but must be preserved for disaster recovery.


------------------------------------------------------------------------------------------------------------------------------------------------


Exploring S3 Features
---------------------

1. S3 ACCESS MANAGEMENT AND SECURITY 

     * Identity and Access Management (IAM): Control user permissions for S3 resources.
     * Bucket Policies: Apply resource-level permissions to S3 buckets.
     * Access Control Lists (ACLs): Enable fine-grained access control for specific users.
     * Data Encryption: Protect data at rest and in transit using encryption.
     * Logging and Monitoring: Utilize AWS CloudTrail to track API calls and access patterns.


2. S3 VERSIONING

      Versioning means you're helping to keep track of the changes that have been made.
      So, you might have multiple different versions of something so you can look back and say Oh! that's where we started and then we made these changes and now 
      it was in version 2 and then we made these changes and now its in version3 and so on...

      You can actually keep of the changes
      a. when they were made
      b. who made them
      c. whether they were good or not
      d. you can always revert back to previous versions if something isn't working.

      > Advantage : Really good for accidental changes and deletions cause you can always go back to previous version.


3. S3 STATIC WEBSITE

     * Simply for hosting static websites.
     * really easy & cost effective way to host simple websites.
 
4. S3 Replication
 
     * This is about automatically copying files from 1 bucket to another bucket.
     * this is great for backups of your buckets in case of damage or file loss or something goes wrong or deleted.
 
 
5. S3 ENCRYPTION

     * Is all about security, encrypting things.
     * encryption is really useful for data when its in transit which is when it's been sent somewhere so its going across the internet which is a wild place by 
      the way and could be constantly be attacked.
     * its also useful for at its destinations either where it needs to go or where it started from it keeps your data safe there.
  
6. S3 TRANSFER ACCELERATION
 
     * This is about speeding up your file uploads and your file downloads.
     * This is great for v long distance transfer of large files & enhancing your data transfer speed.
  



SUMMARY
=======

The best s3 option really depends on your storage patterns and how often you are accessing that data.
  

-------------------------------------------------------------------------------------------------------------------------------------------------


Points to Remember
-------------------

1. what is ACL (Access control list)
    his decides who gets access to which resource.
 
    > Example, if we want entire world to be able to access our static website in this case, enable ACL and make it public.

2. Bucket versioning
    * helps us document/see all the versions of our bucket.
    * Its like having a backup copy of every single file you upload.

3. You can 	upload both files & folders into S3.		

4. When uploading files into S3 ALWAYS UPLOAD UNZIPPED FILES, S3 cannot by itself unzip to read your file contents.

5. Hosting: means making it available to the public.
     hosting is be done by "Configuring your bucket"
  
     Go to your bucket space> properties> static website hosting> edit> enable> add your index file name> save changes> Scroll down to Static website hosting> You 
     now have a URL using which anyone can access your static website.
  
6. After clicking on URl, if you see error that means, the world can see your bucket but somehow it doesn't have access to your objects inside it
   
    > Solution: Select all your website objects> go to action> make public using ACL >Make public





   
Extra features that S3 provides along with hosting a static website:
--------------------------------------------------------------------

1. Securely sharing an object using a presigned URL (presigned url is a direct link that you share to someone, hey! im gonna only give you this access)

    example:
   > like document sharing in google docs, anyone who has the link can access the content/items.
    
	  
  * the cool thing with presigned URLs in AWS is that you can also assign how long the link is active.
   (access time:6 mins,  after 6mins even if you have the link you wont be able to access its content)

  * Select uploaded objects> Action> share it with presigned Url >fill details and create   

 
2. You can use a bucket policy to secure an entire bucket 
    Policy is like a rule/law

    example:
    > You've made your html file public, you want to make it secure by making sure no one deletes it
	
    > select permissions tab> Bucket policy> edit> copy paste ur requirements in json format (make sure you're bucket and object name is inputted correctly) >save 
       changes.

   
4. Update files in your already hosted static website.

     step1: edit your index file with a text editor locally with new changes that you want to show & save it 
     step2: we dont need to delete the previous version of index file in our bucket, all we have to do is upload the updated index file.
           Select index file object> upload is highlighted, click on it> add files> choose the edited index file from your local> upload> now see the updated                 website > You'll get error
   
		   why?
		   because the public access was given to previous version of index.html file not the newly updated one
		   so, select index object> action> make public using ACL
		   Nows refresh website, WORKS!!

6. Making bucket versions visible

      Prerequisite, you must have already enabled bucket versioning while creating the bucket.
      In your bucket dashboard, you'll see a greyed out 'show versions' button in the middle of the screen, just enable it to see versions.
      now, you'll see all the versions of all files with last modified and other information, you can always download the old version of website and maybe use it 
      if needed.


5. Hosting your website in your own specail domain.

      Hosting your website on a custom domain (like www.yourname.com) instead of a generic URL (like yourname.netlify.com or yourname.wordpress.com) gives your 
      website a professional, branded identity.

   
------------------------------------------------------------------------------------------------------------------------------------------------


 
