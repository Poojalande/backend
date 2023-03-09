const express = require("express");
const router = express.Router();
const User = require("../model/User");
const { body, validationResult } = require("express-validator");

router.post(
  "/",
  [
    body("name", "Enter a valide name").isLength({ min: 5 }),
    body("email", "Enter valid email").isEmail(),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // const user = User(req.body)
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry user with this Email already exist" });
      }
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      res.json(user);
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Some erro occured");
    }

    // .then((user) => res.json(user))
    // .catch((err) => {
    //   console.log(err),
    //     res.json({
    //       error: "please ent valid name and email id",
    //     });
    // });
    // user.save();

    // res.send(req.body);
  }
);

module.exports = router;
