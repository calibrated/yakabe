module.exports = async function (context, req, toDoItem) {
    if (!toDoItem)
    {
        context.log("ToDo item not found");
    }
    else
    {
        context.log("Found ToDo item, Description=" + toDoItem);
    }
   
    context.res = {
        status: 200,
        body: toDoItem
    };
}