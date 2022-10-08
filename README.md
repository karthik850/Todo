# Todoapp
Steps to start Application

# option 1 react integrated with django
    Note : no need to start react server
    - step 1: create environment cmd : virtualenv environment
    - setp 2: activate environment cmd : ./environment/scripts/activate
    - step 3: install dependencies cmd : pip install -r requirements.txt
    - step 4: go to project directory cmd : cd Todoproject
    - step 5: start server cmd : python manage.py runserver

# option 2 react server start
    Note : Both server should run in 3000 and 8000 ports
    - step 1: go to project directory react located in frontend 
    - setp 2: install packages cmd : npm install
    - step 3: start server cmd : npm start
    Note: to run as seperate servers you should also start the Django server because database and backend code is located in the backend
