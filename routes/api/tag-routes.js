const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: {
        model: Product,
        through: {model: ProductTag},
      },
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const tagDataById = await Tag.findByPk(
      req.params.id, {
        include: {
          model: Product,
          through: {model: ProductTag},
        }
      }      
    );
    if (tagDataById) {
      res.status(200).json(tagDataById);
    } else {
      res.status(404).json(`There is no tag with this ID.`)
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const createNewTag = await Tag.bulkCreate([{
      tag_name: req.body.name,
    }]);
    res.status(200).json(createNewTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updateTag = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (updateTag[0]) {
      res.status(200).json({ message: `The tag id ${req.params.id} was updated.` });
    } else {
      res.status(404).json({ message: `There is no tag with this ID.` });
    };
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleteTag = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (deleteTag) {
      res.status(200).json({message: `The tag id ${req.params.id} was deleted.` });
    } else {
      res.status(404).json({message: `The tag with id ${req.params.id} doesn't exist.` });
    }
    
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
