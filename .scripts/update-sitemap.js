const fs = require("fs");
const path = require("path");
const xml2js = require("xml2js");

const filePath = path.join(__dirname, "../public/sitemap.xml");

const newSitemapLinks = [
  "/fr/sitemap.xml",
  // "/fr/category-sitemap.xml",
  // Add more links as needed
];

// Read the XML file
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  // Parse XML to JSON
  xml2js.parseString(data, (parseErr, result) => {
    if (parseErr) {
      console.error("Error parsing XML:", parseErr);
      return;
    }

    // Update the sitemap links
    newSitemapLinks.forEach((link) => {
      result.sitemapindex.sitemap.push({
        loc: ["https://accyb.vercel.app/" + link],
      });
    });

    // Convert JSON back to XML
    const builder = new xml2js.Builder();
    const updatedXml = builder.buildObject(result);

    // Write the updated XML back to the file
    fs.writeFile(filePath, updatedXml, (writeErr) => {
      if (writeErr) {
        console.error("Error writing file:", writeErr);
        return;
      }
      console.log("Sitemap links updated successfully.");
    });
  });
});
