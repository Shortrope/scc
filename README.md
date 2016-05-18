# Instructions
- Set the name of the local database in the variables section:
    - var db = new PouchDb('db_name');  // currently scc_mario
 -Set the local db name and url to an external CouchDB in the App section.  
There are two lines containing:
    - db.sync('scc_mario', 'https://external.couch.db')
- Set the 'Email To' address in then function
    sendEmail() {
        ...
        window.plugins.socialsharing.shareViaEmail()
    }


# TODOs
- Verify local storage on device  
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

### Further Study
- Save info locally
  - HTML5 Local Storage
  - PouchDB
- JavaScript Email
  - gmail API
  - EmailJS
