# zavrsni-rad-korisnici

Login credentials:<br>
 - username: 'admin'<br>
 - password: 'password'.<br><br>

A simple crud app for users with auth support.<br>
Project will be done in some FE framework (Reactjs or Vuejs).<br>
It should be done as a SPA, so some routing library should be involved, for example for Vuejs should be Vue-router, or react-router for react.<br>
It should contain 3 pages:<br>
<ol>
  <li>Login <br>
    -- it should have a login with front end validation <br>
    -- when user logs in (credentials don't matter) login will return access token that needs to be saved and sent as auth header with each request for user manipulation
  </li>
  <li>Users list <br>
    -- it should have pagination <br>
    -- each user should have delete option <br>
    -- it should be able to sort list by id or ﬁrst name <br>
    -- click on the user should open user edit modal that will show form for editing the user with all gathered info (ﬁrst_name, last_name, avatar)
  </li>
  <li>Create user form <br>
    -- ﬁrst name <br>
    -- last name <br>
    -- email (with validation) <br>
    -- phone - when phone number is inputed, input should be automatically masked to format (123) 456-7890, it should only allow to input numbers no more than 10 digits. when data is sent to the server to create a record, phone number should be sent in format 1234567890  <br>
    -- date of birth (with calendar plugin).<br>
  </li>
</ol>  
API - The api used to obtain the initial users is located at http://randomuser.me. The api used for user manipulation can be found at https://reqres.in/. This api only fakes the responses to properly formatted POST, DELETE and PUT requests, so the actual database changes (like user deletion or alteration) are done in-app.