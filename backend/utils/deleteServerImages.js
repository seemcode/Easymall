const path = require("path");
const fsPromises = require("fs").promises;

const deleteImageFromLocal = async (fileName, rootPath) => {
  try {
    await fsPromises.unlink(
      path.join(__dirname, "../public", rootPath, fileName)
    );
    return true;
  } catch (error) {
    console.log(`warning message:${error}`);
  }
};
module.exports = {
  deleteImageFromLocal,
};
