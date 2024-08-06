const mongoose = require("mongoose");
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}
main().catch((err) => console.log(err));
const Listing = require("../models/listing.js");
const initData = require("./data.js");

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "66a5f143c9d4dab600c3af8a",
  }));
  await Listing.insertMany(initData.data);
  console.log("data initialized in DB.");
};

initDB();
