# Instructions
- Set the name of the local database in the variables section:
    - var db = new PouchDb('db_name');  // currently scc_mario  
    
- Set db.sync() db's: local db name and url to external CouchDB 
    - in the App section there are two lines containing:
        - db.sync('scc_mario', 'https://external.couch.db')
- Set the 'Email To' address in the Functions section:  
    sendEmail() {
        ...
        window.plugins.socialsharing.shareViaEmail()
    }


# TODOs
- Send data to PHP via Ajax
- Parse JSON data w PHP
- Validate / Sanitize data server side
- Create INSERT and SELECT queries
- Sync w external CouchDB

## Done
- Save form data Locally w PouchDB
- Logo in header
- Back button
- menu grid
- Footer copyright shows current year
- Custom jQuery Mobile Theme
- Footer style
- active/persist menu buttons
- Fix validation when on actual device
- Send Email
- Create MySQL Db

### Further Study
- Save info locally
  - HTML5 Local Storage
  - PouchDB
- JavaScript Email
  - gmail API
  - EmailJS
