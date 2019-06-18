const path = require("path");
var jokeModel = require(path.join(__dirname, "..", "models", "jokeModel"));
const statusCodes = require(path.join(__dirname, "..", "config", "httpConfig"));
const LIKE_OPRTR = '%';
var jokesController = {
    getAllJokes: async function(req, res){
        const getCount = await jokeModel.getJokesCount();
        if(getCount){
            const limit = req.query.pageSize ? req.query.pageSize : 10;
            const offset = req.query.pageNum ? req.query.pageNum : 0;
            const nextOffset = parseInt(limit)+parseInt(offset);   
            const prevOffset = parseInt(offset)-parseInt(limit);   
            const next = '/?limit='+limit+'&offset='+nextOffset;  
            const prev = '/?limit='+limit+'&offset='+prevOffset;  
            const pages = Math.ceil(getCount[0].totalRows/limit);
            const CurrentPage = Math.ceil(offset/limit) + 1;
            const PrevPage = CurrentPage -1;
            const paging = {
                "totalRecords" : getCount[0].totalRows, 
                "pages": pages, 
                "next": next, 
                "prev": prev, 
                "currentPage": CurrentPage, 
                "previousPage": PrevPage,
                "pageStart": 1,
                "pageSize": limit,
                "pageNum": offset
            };
            const  getJokesData = await jokeModel.getAllJokes(offset, limit);
            if(getJokesData){
                res.render('joke/jokes', {"resultSet":getJokesData, "paging" : paging, "pageTitle": "All Jokes", "slug": req.originalUrl});
                // return res.status(statusCodes.ok).send({"resultSet":getJokesData, "paging" : paging});
            }else{
                return res.status(statusCodes.internalServerErr).send({"resultSet": ""});
            }
        }    
    },
    getJokeOfTheDay: async function(req, res){
        let randomNumber = Math.floor((Math.random()*90) + 1); 
        const  getJokesData = await jokeModel.getJokeOfTheDay(randomNumber);
        if(getJokesData){
            res.render('joke/jokeoftheday', {"resultSet":getJokesData, "pageTitle": "Joke Of The Day", "slug": req.originalUrl});
            // return res.status(statusCodes.ok).send({"resultSet":getJokesData});
        }else{
            return res.status(statusCodes.internalServerErr).send({"resultSet": ""});
        }
    },
    searchJokes: async function(req, res){
        let searchStr = LIKE_OPRTR+req.query.searchTerm+LIKE_OPRTR;
        const  getJokesSearchData = await jokeModel.searchJokes(searchStr);
        if(getJokesSearchData){
            return res.status(statusCodes.ok).send({"resultSet":getJokesSearchData});
        }else{
            return res.status(statusCodes.internalServerErr).send({"resultSet": ""});
        }

    },
    getJokesByCategory: async function(req, res){
        let categoryId = req.params.id;
        const  getJokesByCategoryData = await jokeModel.getJokesByCategory(categoryId);
        if(getJokesByCategoryData){
            return res.status(statusCodes.ok).send({"resultSet":getJokesByCategoryData});
        }else{
            return res.status(statusCodes.internalServerErr).send({"resultSet": ""});
        }
    },
    getJokeById: async function(req, res){
        let jokeId = req.params.id;
        const getJokeByIdData = await jokeModel.getJokeById(jokeId);
        if(getJokeByIdData){
            return res.status(statusCodes.ok).send({"resultSet": getJokeByIdData});
        }else{
            return res.status(statusCodes.internalServerErr).send({"resultSet": ""});
        }
    },
    insertJoke: async function(req, res){
        const insertJokeData = await jokeModel.insertJoke(req.body);
        if(insertJokeData){
            return res.status(statusCodes.ok).send({"resultSet": "Record added successfully", 'resourceID': insertJokeData.insertId});
        }else{
            return res.status(statusCodes.internalServerErr).send({"resultSet": "There was some issue adding the records"});
        }
    },
    updateJoke: async function(req, res){
        let jokeId = req.params.id;
        const updateJokeData = await jokeModel.updateJoke(req.body, jokeId);
        if(updateJokeData){
            return res.status(statusCodes.ok).send({"resultSet": "Record updated successfully"});
        }else{
            return res.status(statusCodes.internalServerErr).send({"resultSet": "There was some issue updating the records"});
        }
    },
    deleteJoke: async function(req, res){
        let jokeId = req.params.id;
        const deleteJokeData = await jokeModel.deleteJoke(jokeId);
        if(deleteJokeData){
            return res.status(statusCodes.ok).send({"resultSet": "Record deleted successfully"});
        }else{
            return res.status(statusCodes.internalServerErr).send({"resultSet": ""});
        }
    }
};

module.exports = jokesController;