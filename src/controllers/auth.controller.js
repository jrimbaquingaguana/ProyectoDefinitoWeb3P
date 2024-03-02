import passport from "passport";
import { encryptPassword } from "../lib/helpers.js";
import { pool } from "../database.js";

export const renderSignUp = (req, res) => res.render("auth/signup");
export const renderSignUp1 = (req, res) => res.render("auth/signup");

export const signUp1 = async (req, res, next) => {
  const { fullname, email, password1 } = req.body;

  const password = await encryptPassword(password1);

  // Saving in the Database
  const [result] = await pool.query("INSERT INTO users SET ? ", {
    fullname,
    email,
    password,
    rol : 2,
    usuario:1
  });

  req.login(
    {
      id: result.insertId,
      fullname,
      email,
    },
    (err) => {
      if (err) {
        return next(err);
      }
      return res.redirect("/links");
    }
  );
};
export const signUp = async (req, res, next) => {
  const { fullname, email, password1,  role } = req.body;

  const password = await encryptPassword(password1);

  // Saving in the Database
  const [result] = await pool.query("INSERT INTO users SET ? ", {
    fullname,
    email,
    password,
    rol: 1, // Aquí utilizamos el valor seleccionado del rol
    usuario:role 
  });
    return res.redirect("/profile");
  

  
};


export const renderSignIn = (req, res) => {
  res.render("auth/signin");
};
export const renderSignIn1 = (req, res) => {
  res.render("auth/signin");
};

export const signIn = passport.authenticate("local.signin", {
  successRedirect: "/links",
  failureRedirect: "/signin",
  passReqToCallback: true,
  failureFlash: true,
});


export const logout = (req, res, next) => {
  req.logout(function (err) {
    if (err) return next(err);
    res.redirect("/");
  });
};