fetch("https://icanhazdadjoke.com/slack")
    .then(data => data.json())
    .then(joke => {
        const getJoke = joke.attachments[0].text;
        const jokeshow = document.getElementById('showjoke');

        jokeshow.innerHTML = getJoke;
    })