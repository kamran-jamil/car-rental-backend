const { User } = require("../../models");
const bcrypt = require("bcrypt");
const firebase = require("../../helpers/auth");
const {
  successResponse,
  errorResponse,
} = require("../../helpers/responseHelper");
const {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
} = require("firebase/auth");

const register = async (req, res, _next) => {
  try {
    let { email, password, firstName, lastName } = req.body;
    let user, auth, userCredential, firebaseUser, uuid, salt, payload, newUser;

    user = await User.findOne({
      where: { email },
    });
    if (user) {
      throw new Error("User already exists with same email");
    }
    auth = getAuth();
    userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    firebaseUser = userCredential.user;
    uuid = firebaseUser.uid;

    salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);

    payload = {
      uuid,
      email,
      firstName,
      lastName,
      password,
      isVerified: false,
    };
    newUser = await User.create(payload);
    await sendEmailVerification(auth.currentUser);
    return successResponse(req, res, {
      user: newUser,
      msg: "verification email sent",
    });
  } catch (error) {
    return errorResponse(req, res, error);
  }
};

const login = async (req, res, _next) => {
  try {
    let { email, password } = req.body;
    let auth, userCredential, firebaseUser, uuid, emailVerified, user;
    auth = getAuth();
    userCredential = await signInWithEmailAndPassword(auth, email, password);
    firebaseUser = userCredential.user;
    uuid = firebaseUser.uid;
    emailVerified = firebaseUser.emailVerified;

    user = await User.findOne({
      where: { uuid, email },
    });
    if (!user) {
      throw new Error("User does not exists with this email");
    }
    if (emailVerified && user.isVerified === false) {
      await User.update(
        { isVerified: true },
        {
          where: {
            uuid,
          },
        }
      );
      user.isVerified = true;
    }

    return successResponse(req, res, {
      user: user,
    });
  } catch (error) {
    return errorResponse(req, res, error);
  }
};

module.exports = {
  register,
  login,
};
