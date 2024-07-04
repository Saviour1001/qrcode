import QRCode from "qrcode";

QRCode.toFile(
  "./file.png",
  "x.com/mehtabasmoon",
  {
    errorCorrectionLevel: "H",
  },
  function (err) {
    if (err) throw err;
    console.log("QR code saved!");
  }
);
