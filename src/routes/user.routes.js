import { Router } from "express";
import {
  changeCurrentPassword,
  getCurrentUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
  updateAccountDetails,
  updateUserAvatar,
  updateUserCoverImage,
} from "../controllers/user.controller.js";
import { upload } from "../middleware/multer.middleware.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router();

router.post(
  "/register",
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverImage", maxCount: 1 },
  ]),
  registerUser
);
router.post("/login", loginUser);
router.post("/logout", verifyJWT, logoutUser);
router.post("/refresh-token", refreshAccessToken);
router.put("/change-password", verifyJWT, changeCurrentPassword);
router.put("/update-user-details", verifyJWT, updateAccountDetails);
router.get("/me", verifyJWT, getCurrentUser);
router.put(
  "/change-avatar",
  upload.single("avatar"),
  verifyJWT,
  updateUserAvatar
);
router.put(
  "/change-cover-image",
  upload.single("coverImage"),
  verifyJWT,
  updateUserCoverImage
);

export default router;
