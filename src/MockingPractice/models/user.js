import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  id: {
    type: String,
    minlength: 6,
    maxlength: 50,
  },
  password: {
    type: String,
    minlength: 6,
    maxlength: 50,
  },
});

userSchema.statics.findOne = function () {
  // DB에서 유저의 정보를 갖고오는 로직
};

const User = mongoose.model('User', userSchema);

export default User;
