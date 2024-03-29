'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const UserSchema = new Schema({
    username: String,
    password: String,
    email: String,
  });
  return mongoose.model('Users', UserSchema);
};
