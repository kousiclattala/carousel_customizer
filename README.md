# Carousel customizer

In this Application users can select any category from the dropdown in the left of the page, pictures from that category will be displayed on the carousel panel and list of all images are present below of it and description of the photos are present in left of the dropdown menu.

## Pre-requisities

- Nodejs
- Terminal (prefer gitbash for windows users).
- Frontend - React
- Backend - Nodejs

- Images obtained from [unsplash](https://unsplash.com/).

## Running the Application

1. Step 1

   - First get the `access_key` from [unsplash](https://unsplash.com/developers) library. you can get the key from logging into [developer console](https://unsplash.com/developers) of unsplash library.
   - Now add the `access_key` to the backend unsplash library.

     ```js
     // server.js file
     const unsplash = createApi({
       access_key: "include-your-accesskey-here",
     });
     ```

2. Step 2

   - clone the repository into your system, by running the below command

     ```bash
     git clone <repo url>
     ```

3. Step 3

   - After cloning the repo, navigate to the folder and open it in the code editor and open editor terminal and run below command. make sure you are in the correct folder `<your-folder-name>/carousel_customizer/`.

     ```bash
     npm install
     ```

   The above command will install the necessary dependencies required to run the server/backend.

   - After running the above command, next run the below command to start the server.
     **NOTE**: after running the below command dont close the terminal keep it open.

     ```bash
     npm start
     ```

4. Step 4

   - Now open a terminal window and navigate to `frontend` folder in `carousel_customizer` (this is the folder name, you clone the repository into). open `frontend` folder in a new code editor window.

   - After opening the folder in new editor window, opn the terminal in that editor and run below command

     ```bash
     npm install
     ```

   - After running the above command, next run below command to start react project
     ```js
     npm start
     ```
     it will start the server in new browser window.

## Note:

- Please make sure you install all the necessary dependencies of the server/backend and frontend/react, by navigating through two folders and running `npm install`.
- Please make sure server and react project are up and running by running the command
  `npm start`

## Screens

Carousel Screen
![](/assests/carousel-page.png)

Empty search page
![](/assests/empty-page.png)
