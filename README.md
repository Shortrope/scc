# Cordova Taco Instructions
- Open cli and navigate to the parent directory where you want this project
- Run: cordova create scc com.coachmarilyn.scc scc
- Run: cordova platform add android
- cd to ./scc directory  // this directory was just created
- delete the files in 'www'
- copy the project files from c9 or github to the 'www' directory
    - html, css and js files
- conect your device to the PC
- Run: cordova run --list   // to verify connected device and get its id
- Run: cordova run android --device --target=83746201245708

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
- Validate / Sanitize data server side
- Create INSERT and SELECT queries

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
- Send data to PHP via Ajax
- Parse JSON data w PHP
- Sync w external CouchDB

### Further Study
- Save info locally
  - HTML5 Local Storage
  - PouchDB
- JavaScript Email
  - gmail API
  - EmailJS
