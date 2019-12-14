module.exports = function(router) {
    router.post('/customer', function(req, res) {
        console.log(req.body)
        res.json({ msg: "test" });
    });
}