const multer = require("multer");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs").promises;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/images/"));
  },
  filename: function (req, file, cb) {
    const uniquesuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniquesuffix + ".jpeg");
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb({ message: "Unsupported file format" }, false);
  }
};

const uploadPhoto = multer({
  storage: storage,
  fileFilter: multerFilter,
  limits: { fileSize: 1000000 },
});

const productImgResize = async (req, res, next) => {
  if (!req.files) return next();
  await Promise.all(
    req.files.map(async (file) => {
      await sharp(file.path)
        .resize(300, 300)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(`public/images/products/${file.filename}`);
      fs.unlinkSync(`public/images/products/${file.filename}`);
    })
  );
  next();
};

/* const blogImgResize = async (req, res, next) => {
  try {
    console.log("working");

    if (!req.files || req.files.length === 0) return next();

    const resizePromises = req.files.map(async (file) => {
      const inputPath = path.join(__dirname, "../public", "images", file.filename);
      const outputPath = path.join(__dirname, "../public", "images", "blogs", file.filename);
      // Assuming file.path contains the path to the uploaded file

      await sharp(inputPath)
        .resize(300, 300)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(outputPath);
    });

    const result = await Promise.all(resizePromises);
    if (result.length > 0) {
      req.files.map(async (item) => {
        const inputPath = path.join(__dirname, "../public", "images", item.filename);
        await fs.unlink(inputPath);
        console.log("success");
      });
    }
    return res.json({ files: req.files, result, message: "Images resized and saved successfully" });
  } catch (error) {
    console.error("Error resizing images:", error.message);
    next(error.message);
  }
};
 */
// const blogImgResize = async (req, res, next) => {
//   try {
//     console.log("Processing image resize...");

//     if (!req.files || req.files.length === 0) {
//       return next();
//     }

//     // Prepare paths and resizing promises
//     const resizePromises = req.files.map(async (file) => {
//       const inputPath = path.join(__dirname, "../public", "images", file.filename);
//       const outputPath = path.join(__dirname, "../public", "images", "blogs", file.filename);

//       await sharp(inputPath)
//         .resize(300, 300)
//         .toFormat("jpeg")
//         .jpeg({ quality: 90 })
//         .toFile(outputPath);
//     });

//     // Await all resizing operations
//     const results = await Promise.all(resizePromises);

//     // Remove original files after resizing
//     const unlinkPromises = req.files.map(async (file) => {
//       const inputPath = path.join(__dirname, "../public", "images", file.filename);
//       await fs.unlink(inputPath);
//       console.log(`Successfully deleted: ${inputPath}`);
//     });

//     await Promise.all(unlinkPromises);

//     // Send response
//     res.json({
//       files: req.files,
//       results,
//       message: "Images resized and saved successfully",
//     });
//   } catch (error) {
//     console.error("Error resizing images:", error.message);
//     next(error);
//   }
// };

const blogImgResize = async (req, res, next) => {
  if (!req.files) return next();
  await Promise.all(
    req.files.map(async (file) => {
      await sharp(file.path)
        .resize(300, 300)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(`public/images/blogs/${file.filename}`);
      // fs.unlinkSync(`public/images/blogs/${file.filename}`);
    })
  );
  next();
};
module.exports = { uploadPhoto, productImgResize, blogImgResize };
