module.exports = function(router) {
    router.get('/customer', function(req, res) {
        console.log(req)
        res.json({ msg: "test" });
    });
}