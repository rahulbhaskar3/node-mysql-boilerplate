var dbTables = {
    jokes: "jokes",
    jokesCategory: "jokes_category",
    getAllJokes: "select jokeId, jokeDescription, jokeCategory from jokes",
    getJokeById: "select jokeId, jokeDescription, jokeCategory from jokes where jokeId = %d",    
    insertJoke: "insert into jokes (jokeDescription, jokeCategory) values ('%s', '%s')",
    updateJoke: "update jokes set jokeDescription = '%s' and jokeCategory = '%s' where jokeId = '%d'",
    deleteJoke: "delete from jokes where jokeId = '%d'"
};

module.exports = dbTables;