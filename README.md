<p align="center">
    <a href="https://batquiz.nerdistry.pl/" target="_blank">
        <img alt="BatQuiz" src="https://github.com/DarekMazur/batquiz_2.0/raw/main/src/assets/images/batQuiz.svg" width="200" />
    </a>
</p>

<h1 align="center">
  BatQuiz 3.0
</h1>

## :ballot_box_with_check: About app

BatQiuz 3.0 is... well... the third version of the BatQiuz application.

First version was a small application I made in October 2017 to practice jQuery. It still runs at <a href="http://batquiz.dariusz-mazur.pl/" target="_blank">batquiz.dariusz-mazur.pl</a> (with minor content updates), but.... well, such were my beginnings.

The second BatQuiz was built in vanilla JavaScript. It was created for training purposes and was mainly a playground
for many JS functions. You can check it <a href="https://batquiz.netlify.app/" target="_blank">here</a>

To be honest, BatQuiz was my first “real” application and was sentimental to me. It was so obvious that one of my first Node apps would support the API for BatQuiz. And creating it was a great opportunity to build BatQuiz again. This time using React.

<a href="https://batquiz.nerdistry.pl/" target="_blank">Feel free to visit newest version</a>

## 🚀 Quick start

1.  **Requirement**

- `npm` (v10.2.4 or newer),
- `react` (18.3.1 or never),
- `react-router-dom` (6.26.2 or never),
- `typescript` (v5.6.2 or newer),
- `vite` (v5.4.1 or newer)

2.  **Installation**

    To install application navigate to app's directory and use npm command

    ```bash
    cd app-main-dir/
    npm install
    ```

3.  **Developer mode**

    You can run app in developer mode by using command

    ```bash
    npm run dev
    ```

    Application will run on port 5173 (localhost:5137)

4. **Production build**
    
    To prepare production build you need to run

    ```bash
    npm run buil
    ```
    You will find producction files in `dist` directory.

5. Environmental variables

    To use environmental variables you need to create `.env` file in root directory.

    Example of `.env`

    ```
    VITE_API_URL=http://localhost:3000
   ```
   
6. Bonus

    If you're interested how backend looks you can check it <a href="https://github.com/DarekMazur/batMUI_backend" 
  target="_blank">here</a>.