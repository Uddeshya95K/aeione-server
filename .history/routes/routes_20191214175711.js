module.exports = function(router) {
    router.get('/customer', function(req, res) {
        console.log("test")
        res.json({ msg: req });
    });
}