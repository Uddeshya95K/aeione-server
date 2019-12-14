module.exports = function(router) {
    router.post('/customer', function(req, res) {
        let dataset = req.body;
        // console.log(req.body)
        // res.json({ msg: "test" });
        return knex('user').insert(dataset)
            .then(function(res) {
                if (res.length <= 0) {
                    return res;
                }
            });
    });
}