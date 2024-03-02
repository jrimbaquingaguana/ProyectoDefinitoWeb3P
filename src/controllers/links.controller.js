import { pool } from "../database.js";

export const renderCursoLink = async (req, res) => {
  try {
    const userId = req.user.usuario;
    const [rows] = await pool.query("SELECT usuario FROM users WHERE usuario = ?", [userId]);
    if (rows.length > 0) {
      const usuario = rows[0].usuario;
      if (usuario === 1) {
        res.render("links/createUser");
      } else if (usuario === 2 || usuario === 3) {
        res.render("links/add1");
      } else {
        // Manejar otros roles si es necesario
        throw new Error('Usuario no tiene un rol válido');
      }
    } else {
      throw new Error('Usuario no encontrado');
    }
  } catch (error) {
    // Manejar errores aquí
    console.error(error);
    res.status(500).send('Error interno del servidor');
  }
};

export const addLink = async (req, res) => {
  const { title, url, description } = req.body;
  await pool.query("INSERT INTO links set ?", [
    {
      title,
      url,
      description,
      rol: 1,
    },
  ]);
  await req.setFlash("success", "Link Saved Successfully");
  res.redirect("/links");
};

export const renderAddLink = async (req, res) => {
  try {
    const userId = req.user.usuario;
    const [rows] = await pool.query("SELECT usuario FROM users WHERE usuario = ?", [userId]);
    if (rows.length > 0) {
      const usuario = rows[0].usuario;
      if (usuario === 1 || usuario === 3 ) {
        res.render("links/add"); 
      } else if (usuario === 2) {
        res.render("links/add1");
      } else {
        // Manejar otros roles si es necesario
        throw new Error('Usuario no tiene un rol válido');
      }
    } else {
      throw new Error('Usuario no encontrado');
    }
  } catch (error) {
    // Manejar errores aquí
    console.error(error);
    res.status(500).send('Error interno del servidor');
  }
};


export const renderLinks = async (req, res) => {
  

  try {
    const userId = req.user.usuario;
    const [rows] = await pool.query("SELECT usuario FROM users WHERE usuario = ?", [userId]);
    if (rows.length > 0) {
      const usuario = rows[0].usuario;
      if (usuario === 1 || usuario ===3) {
        // Renderizar la lista de enlaces para el rol 1
        const [rows] = await pool.query("SELECT * FROM links WHERE rol = ?", [
          req.user.rol,
          
      
        ]);
        res.render("links/list", { links: rows });
      } else if (usuario === 2) {
        // Renderizar la lista de enlaces para el rol 2
        const [rows] = await pool.query("SELECT * FROM links WHERE rol = ?", [
          req.user.rol,
          
      
        ]);
        res.render("links/list1", { links: rows });
      } else {
        // Manejar otros roles si es necesario
        throw new Error('Usuario no tiene un rol válido');
      }
    } else {
      throw new Error('Usuario no encontrado');
    }
  } catch (error) {
    // Manejar errores aquí
    console.error(error);
    res.status(500).send('Error interno del servidor');
  }
};

export const deleteLink = async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM links WHERE ID = ?", [id]);
  await req.setFlash("success", `Link ${id} Removed Successfully`);
  return res.redirect("/links ");
};

export const renderEditLink = async (req, res) => {
  const { id } = req.params;
  const [rows] = await pool.query("SELECT * FROM links WHERE id = ?", [id]);
  res.render("links/edit", { link: rows[0] });
};

export const editLink = async (req, res) => {
  const { id } = req.params;
  const { title, description, url } = req.body;
  const newLink = {
    title,
    description,
    url,
  };
  await pool.query("UPDATE links set ? WHERE id = ?", [newLink, id]);
  await req.setFlash("success", "Link Updated Successfully");
  res.redirect("/links");
};
