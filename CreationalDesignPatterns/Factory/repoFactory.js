var repoFactory = function(){
    var repos = this; 
    var repoList = [{name:'task', source:'./repositories/taskRepository'},
                   {name:'user', source:'./repositories/userRepository'},
                   {name:'project', source:'./repositories/projectRepository'}];
    
    repoList.forEach(function(repo){
        repos[repo.name] = require(repo.source)()
    });
};


module.exports = new repoFactory;