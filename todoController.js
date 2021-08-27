var bodyParser = require('body-parse');
var mongoose = require('mongoose');

//Connect to the database
mongoose.connect('mongodb://test:test@ds017195.mlab.com:17195/todo');

//Create a schema - this is like a blueprint
var todoSchema = new mongoose.todoSchema({
    item: string
});

/*var Todo = mongoose.module('Todo', todoSchema);
var itemOne = Todo({item: 'buy flowers'}).save(function(err){
    if(err) throw err;
    console.log('item saved');
}); */

//var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'kick some coding ass'}];
var urlencodedParser = bodyParser.urlencoded({extended: false});
module.exports = function(app){

    app.get('/todo', function(req, res){
        //get data from mongodb and pass it to view
        if(err) throw err;
        todo.find({item: 'buy flowers'})
        res.render('todo', {todos: data});

    });

    app.post('/todo', urlencodedParser,function(req, res){
        //get data from mongodb and pass it to view
        var newTodo  = Todo(req.body).save(function(err,data){
            if(err) throw err;
            res.json(data);
        })
        data.push(req.body);
        res.json(data);

    });

    app.delete('/todo/:item', function(req, res){
        //delete the requested item from mongodb
        Todo.find({item:req.params.item.replace(/\-/g, " ")}).remove(function(err,data){
            if(err) throw err;
            res.json(data);
        });
        
        
    

    });

};