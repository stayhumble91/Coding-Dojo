module.exports = function Route(app){
   app.get("/", function(request, response){
       response.render("index")
   })
   app.post("/result", function(request, response){
       var submited_info = {
           name: request.body.name,
           dojo_location: request.body.dojo_location,
           favorite_language: request.body.favorite_language,
           comment: request.body.comment
       }
       response.render("result", {user_data: submited_info})
       console.log(request.body);
   })
}