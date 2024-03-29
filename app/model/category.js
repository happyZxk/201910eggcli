'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const CategorySchema = new Schema({
    name: String,
  });
  const Category = mongoose.model('Category', CategorySchema);
  return Category;
};
