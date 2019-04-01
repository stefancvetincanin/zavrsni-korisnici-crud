# zavrsni-rad-korisnici

A simple crud app for users with auth support.<br>
Project will be done in some FE framework (ReactJS or VueJS).<br>
It should be done as a SPA, so some routing library should be involved, for example for Vuejs should be Vue-router.<br>
It should contain at least 3 pages:  <br>
Login  --it should have a login with front end validation  -- when user logs in (credentials doesn't matter) login will return access token that needs to be saved and sent as auth header with each request for user manipulation  <br>
Users list  -- it should have pagination  -- it should have create new user action  -- each user should have delete option  -- it should be able to sort list by id or ﬁrst name  -- click on the user should open user edit modal that will show form for editing the user with all gathered info (ﬁrst_name, last_name, avatar) <br> 
Create user form  -- ﬁrst name  -- last name  -- email (with validation)  -- phone - when phone number is inputed, input should be automatically masked to format (123) 456-7890, it should only allow to input numbers no more than 10 digits. when data is sent to the server to create a record, phone number should be sent in format 1234567890  -- date of birth (with calendar plugin)  API for users manipulation you should use fake api that can be found on this url  https://reqres.in/  You prioritize the order of the features to implement and the code structure.
