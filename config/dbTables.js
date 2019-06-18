var dbTables = {
    jokes:{
        getJokesCount: "select COUNT(jokeID) as totalRows from jokes",
        getAllJokes: "select jokeId, jokeDescription, categoryDescription from jokes inner join jokes_category on jokes.jokeCategory = jokes_category.jokeCategoryId limit %d, %d",
        getJokeById: "select jokeId, jokeDescription, categoryDescription from jokes inner join jokes_category on jokes.jokeCategory = jokes_category.jokeCategoryId where jokeId = %d",   
        getJokeOfTheDay: "select jokeId, jokeDescription, jokeCategory from jokes where jokeId = %d limit 1",
        searchJokes: "select jokeId, jokeDescription, jokeCategory, rand() from jokes where jokeDescription like '%s'",
        insertJoke: "insert into jokes (jokeDescription, jokeCategory) values ('%s', '%s')",
        updateJoke: "update jokes set jokeDescription = '%s', jokeCategory = '%s' where jokeId = '%s'",
        deleteJoke: "delete from jokes where jokeId = '%d'",
        getJokesByCategory: "select jokeId, jokeDescription, jokeCategory from jokes where jokeCategory = %s"
    },
    jokeCategory:{

    }
};

module.exports = dbTables;