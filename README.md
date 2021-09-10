# AV Website CMS

Content Management System (CMS) for AV Club Website built using Strapi.

## Local Installation
1. ### Installing Dependencies

    After cloning the repository navigate to the project directory and run:
    ```bash
    npm install
    ```
2. ### Running Strapi Server

    Once the dependencies have been installed you may run the server by running:
    
    **npm**
    ```bash
    npm run develop -- --watch-admin
    ```
    **yarn**
    ```bash
    yarn develop --watch-admin
    ```
3. ### Ready

    A login page should open up at `http://localhost:8000/` where you can create a new _Super Admin_ user following which you will be redirected to the admin dashboard.

    A local SQLite database is created in the `/.tmp/` directory to store data temporarily. Only changes made to actual _Collection Types_ are permanently stored, all other data (including role permissions) are stored in the temporary database.

    In order to test endpoints use: `http://localhost:1337/`

## Disclaimer
This is currently under development. Refer to the Strapi [documentation](https://strapi.io/documentation/developer-docs/latest/getting-started/introduction.html) before making any breaking changes.
