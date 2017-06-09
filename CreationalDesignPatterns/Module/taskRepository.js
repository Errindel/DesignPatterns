/**
 *  So basically, I've taken all my database code and I've encapsulated it in this repository object and gone from
 *  there. Now the reason why we want to do this is when this function is executed, I can actually create a variable
 *  and instantiate my database connection, and do all my database work here. And because of the way JavaScript closures
 *  work, every method that gets called -- so my get method and my save method, has access to that database stuff up
 *  above. Nothing else has access to it; none of my calling functions can get to it. My database is secured up in this
 *  module, but all of my methods, my get method and my save method, can have access back up to that database.
 *
 * @returns {{get: get, save: save}}
 */
var repo = function() {

    // Mock of db connection
    var db = {};

    var get = function(id){
        console.log('Getting task ' + id);
        return {
            name: 'new task from db'
        }
    };

    var save = function(task){
        console.log('Saving ' + task.name);
    };

    return{
        get: get,
        save: save
    }
};

// function evoked for immediate returning data
module.exports = repo();