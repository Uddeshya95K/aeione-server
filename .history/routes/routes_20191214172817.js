module.exports = function(router) {
    console.log("test")
    router.get('/', function(req, res) {
        console.log("test")
        return "test";
    })
}