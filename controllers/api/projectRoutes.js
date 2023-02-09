const router = require('express').Router();
const { User, Project, Comment } = require('../../models');
const withAuth = require('../../utils/auth');
// creates a new post 
router.post('/', async (req, res) => {
    try {
        const newProject = await Project.create({ ...req.body, user_id: req.session.user_id, });
        res.json(newProject);
    } catch (err) {
        res.status(500).json(err);
    }
});
// deletes a post 
router.delete('/:id', withAuth, async (req, res) => {
    try {
      // check to see if postData okay
        const projectData = await Project.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!projectData) {
          res.status(404).json({ message: 'There is no post with this id found.' });
          return;
      }
      res.status(200).json(projectData);
  } catch (err) {
      res.status(500).json(err);
  }
});
// update a project
router.put('/:id', async (req, res) => {
  try {
      const projectData = await Project.update(
          {
              ...req.body,
              user_id: req.session.user_id,
          },
          {
              where: {
                  id: req.params.id,
                  user_id: req.session.user_id,
              },
          }
      );
      // if no post data show a message
      if (!projectData) {
          res.status(404).json({ message: 'There is no post with this id found.' });
          return;
      }

      res.status(200).json(projectData);
  } catch (err) {
      res.status(500).json(err);
  }
});
module.exports = router;



