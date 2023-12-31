const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({include: Product});
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const categoryDataById = await Category.findByPk(req.params.id,{include: Product});
    if (categoryDataById) {
      res.status(200).json(categoryDataById);
    } else {
      res.status(404).json({ message: `The category with id ${req.params.id} doesn't exist.` });
    };
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const createNewCateogry = await Category.bulkCreate([{ category_name: req.body.name }]);
    res.status(200).json(createNewCateogry);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updateCategory = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (updateCategory[0]) {
      res.status(200).json({ message: `The category id ${req.params.id} was updated.` });
    } else {
      res.status(404).json({ message: `The category with id ${req.params.id} doesn't exist.` });
    };
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleteCategory = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (deleteCategory) {
      res.status(200).json({ message: `The category id ${req.params.id} was deleted.` });
    } else {
      res.status(404).json({ message: `The category with id ${req.params.id} doesn't exist.` });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
