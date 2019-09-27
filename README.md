# Friend Finder - Node, Express, MySQL

### Overview

In this activity, you'll build a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

You will use Express to handle routing.

### Before You Begin

* Check out [this demo version of the site](https://friend-finder-fsf.herokuapp.com/). Use this as a model for how we expect your assignment look and operate.

* Create a folder called `friend_finder`. Inside the folder, organize your directories so it matches the following:

  ```
  friend_finder
    - .gitignore
    - db
      - schema.sql
      - seeds.sql
    - public
      - home.html
      - survey.html
    - node_modules
    - package.json
    - server.js
  ```

### Submission on BCS

* Please submit the github link

### Instructions

1. Your survey should have 10 questions of your choosing. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

2. Your `server.js` file should require the basic npm packages we've used in class: `express`, `path`, `mysql`

3. Your public folder should include two files - it should also be static in your server.js file

   * A GET Route to `survey.html` which should display the survey page.

      this page should 

        show a form 
          input with user's name - this will go into the friend table as the friend_name

          input with the picture - this will go into the friends table

          of all of the questions and a dropdown or radio buttons of 1 to 5
            the results of this will go into the scores table

   * your home page `index.html`

      should link to survey.html and display all the friends in the database

4. Your `server.js` file should contain two routes:

   * A GET route with the url `/api/friends`. This will be used to display all friends from the friends table in json

   * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

5. You should save your application's data inside of `app/db/schema.sql and seeds.sql`

in the schema.sql file:
  
  your questions table should have all of the questions
    id, question

  your friends table should have a name and photo column
    id, name, picture_link

  your scores table should have 
    id, question_id, friend_id, score

in the seeds.sql file:
  
  write some inserts into the questions table


6. Determine the user's most compatible friend using the following as a guide:

  compare the differences between the person's score and other people's scores, the smallest differences are possible friendships

  remember to take the absolute value

    you can use the sql_hints folder as a guide

7. Once you've found the current user's most compatible friend, display the result(s) on the page
  
  it should show the name of the friend and the picture

### Reminder: Submission on BCS

* Please submit the github link on bcs

---

### Create a README.md

Add a `README.md` to your repository describing the project. Here are some resources for creating your `README.md`. Here are some resources to help you along the way:

* [About READMEs](https://help.github.com/articles/about-readmes/)

* [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)

- - -

### One More Thing

If you have any questions about this project or the material we have covered, please post them in the community channels in slack so that your fellow developers can help you! If you're still having trouble, you can come to office hours for assistance from your instructor and TAs.

**Good Luck!**
