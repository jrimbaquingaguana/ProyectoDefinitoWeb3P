import { Router } from "express";
import auth from "./auth.routes.js";
import index from "./index.routes.js";
import links from "./links.routes.js";
import links1 from "./link1.routes.js";
import user from "./user.routes.js";

import { pool } from "../database.js";

const router = Router();

router.use(index);
router.use(auth);
router.use(user);

// Middleware para renderizar enlaces basados en el rol del usuario
router.use(async (req, res, next) => {
    try {
        const userId = req.user.usuario; // Suponiendo que req.user tiene el ID del usuario
        const [rows] = await pool.query("SELECT usuario FROM users WHERE usuario = ?", [userId]);
        if (rows.length > 0) {
            const usuario = rows[0].usuario;
            if (usuario === 1 || usuario ===3 || usuario ===2) {
                // Crear un nuevo router para /links y montar el router de links en él
                const linksRouter = Router();
                linksRouter.use(links);
                router.use("/links", linksRouter);
            } else if (usuario === 2 || usuario===3) {
                // Crear un nuevo router para /links1 y montar el router de links1 en él
                const links1Router = Router();
                links1Router.use(links1);
                router.use("/links1", links1Router);
            } else {
                // Manejar otros roles si es necesario
                throw new Error('Usuario no tiene un rol válido');
            }
            next();
        } else {
            throw new Error('Usuario no encontrado');
        }
    } catch (error) {
        next(error);
    }
});

export default router;
