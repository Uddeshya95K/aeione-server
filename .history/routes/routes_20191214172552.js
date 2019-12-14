module.exports = function(router) {
    console.log("test")
    router.get('/', function(req, res) {
        return "test";
    })
}