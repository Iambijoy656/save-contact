// app.js
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  var vCardsJS = require("vcards-js");

  //create a new vCard
  var vCard = vCardsJS();

  //set properties
  vCard.firstName = "sagar";
  vCard.middleName = "J";
  vCard.lastName = "Nesser";
  vCard.organization = "ACME Corporation";
  vCard.workPhone = "312-555-1212";
  vCard.birthday = new Date(1985, 0, 1);
  vCard.title = "Software Developer";
  vCard.url = "https://github.com/enesser";
  vCard.workUrl = "https://acme-corporation/enesser";
  vCard.note = "Notes on Eric";
  vCard.version = "2.0";
  //set content-type and disposition including desired filename
  res.set("Content-Type", 'text/vcard; name="ser.vcf"');
  res.set("Content-Disposition", 'inline; filename="ser.vcf"');

  //send the response
  res.send(vCard.getFormattedString());
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
