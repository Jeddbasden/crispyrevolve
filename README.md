# CrispyRevolve
Hi! welcome to crispyrevolve the site where you can watch dope anime clips with a twist!
head to https://crispyrevolve.herokuapp.com/ for the main version, for a local version follow the steps below!

## Wiki Link
https://github.com/Jeddbasden/crispyrevolve/wiki

## Additions
This site utilizes a react component called React Youtube Player. this component gets youtube links and is able to play youtube videos passed in.

## Set up locally
* clone the repository
* install dependancies using  
```bash
pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
```
 * set up your database and make an .env file with your correct database info
 * get into your pipenv and migrate your database and run the flask app
   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```
   
* cd into your react-app and install your dependencies
   ```bash
   cd react-app
   ```

   ```bash
   npm install
   ```

* finally run your app 
  ```bash
  npm start
  ```
  
  
 ![image](https://user-images.githubusercontent.com/74204664/151825850-183cc4bd-0123-4646-92d2-d919ff213136.png)


