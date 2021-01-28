
/*
 * GET home page.
 */

exports.view = function(req, res){
  let nameToShow = req.params.userName;
  console.log("name is " + nameToShow);
  res.render("hello", {
  	'userName': nameToShow,
  });
};
