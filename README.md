# zavrsni-rad-korisnici
<h2>Built using</h2>
<ul>
 <li>ReactJS</li>
 <li>Sass</li>
</ul>

<h2>Login credentials</h2>
<pre>
 username: 'admin'
 password: 'password'
</pre>
<h2>What is it?</h2>
A simple crud app for users with auth support, built while learning ReactJS<br>
The app is built as a SPA, using react-router<br>
It contains 3 pages:<br>
<ol>
  <li>Login <br>
    -- Login with front end validation <br>
    -- When user logs in (credentials don't matter) login will return access token that's saved and sent as an auth header with each request for user manipulation
  </li>
  <li>Users list <br>
    -- Paginated <br>
    -- Each user has a delete option <br>
    -- Sortable by ID or user name <br>
    -- Clicking on the user opens a user edit modal that shows the form for editing the user
  </li>
  <li>Create user form <br>
    -- ﬁrst name <br>
    -- last name <br>
    -- email (with validation) <br>
    -- phone - when phone number is inputed, input should be automatically masked to format (123) 456-7890, it should only allow to input numbers no more than 10 digits. when data is sent to the server to create a record, phone number should be sent in format 1234567890  <br>
    -- date of birth (with calendar plugin).<br>
    -- and much more!<br>
  </li>
</ol>  
API - The api used to obtain the initial users is located at http://randomuser.me. The api used for user manipulation can be found at https://reqres.in/. This api only fakes the responses to POST, DELETE and PUT requests, so the actual changes (like user deletion or alteration) are done in-app.
<h2>How to run it?</h2>
<p>Just click the <a href="https://stefancvetincanin.github.io/zavrsni-korisnici-crud/" target="_blank">link</a></p>
