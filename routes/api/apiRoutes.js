// const axios = require("axios");
// const router = require("express").Router();
// router.get("/recipes", (req, res) => {
//   axios
//     .get("http://www.recipepuppy.com/api/", { params: req.query })
//     .then(({ data: { results } }) => res.json(results))
//     .catch(err => res.status(422).json(err));
// });

// Matches with "/api/books"
// router.route("/")
// .get(booksController.findAll)
// .post(booksController.create);
// Matches with "/api/books/:id"
// router
// .route("/:id")
// .get(booksController.findById)
// .put(booksController.update)
// .delete(booksController.remove);
// module.exports = router;