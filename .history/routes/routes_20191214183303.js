module.exports = function(router) {
    router.post('/customer', function(req, res) {
        dataset = req.body;
        // console.log(req.body)
        // res.json({ msg: "test" });
        return knex('user').insert(data)
            .then(function(res) {
                if (res.length <= 0) {
                    return res;
                }
            });
    });
}