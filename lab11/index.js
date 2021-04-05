// import mongodb
import MongoClient from "mongodb";

// declare the URL
const URL =
  "mongodb+srv://hzheng:82OQ54WaqzMsPjpP@cluster0.oewwc.mongodb.net/test";

// Connect to the db using the URL
MongoClient.connect(URL, { useUnifiedTopology: true })
  .then((connection) => {
    // if connected, selected the database called sample_airbnb
    let database = connection.db("sample_airbnb");
    // selected the collection called istingsAndReviews
    let collection = database.collection("listingsAndReviews");

    //Search for all listing with the parameters
    let results = collection.find({
      beds: { $gte: 5 },
      price: { $lte: 200 },
      "review_scores.review_scores_rating": { $gte: 99 },
    });

    // if results, log its name to the console.
    results.forEach(
      (result) => {
        console.log(result.name);
      },
      () => connection.close() // close the connection after the logging
    );
  })
  // if error occurs, log the error message to the console
  .catch((error) => {
    console.log("Error: " + error);
  });
