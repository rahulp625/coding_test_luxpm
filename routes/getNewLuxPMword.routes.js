var getNewLuxPMwordmodule = require("../getNewLuxPMword");

module.exports = (app) => {
    app.get("/getNewLuxPMword", getNewLuxPMwordmodule.getNewLuxPMNode)

};    

