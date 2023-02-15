module.exports.validateUser = (req, res, next) => {
  const newData = req.body;
  const hasId = "Id" in newData;
  const hasName = "name" in newData;
  const hasGender = "gender" in newData;
  const hasContact = "contact" in newData;
  const hasAddress = "address" in newData;
  const hasPhotoUrl = "photoUrl" in newData;
  const nId = newData.Id;
  if (
    hasId &&
    hasName &&
    hasGender &&
    hasContact &&
    hasAddress &&
    hasPhotoUrl &&
    !isNaN(nId)
  ) {
    // console.log(
    //   hasId,
    //   hasName,
    //   hasGender,
    //   hasContact,
    //   hasAddress,
    //   hasPhotoUrl,
    //   isNaN(nId)
    // );
    
    next();
  } else {
    res.send("Data is not appropriate!XX!");
  }
};
