const db = require('./config/sequelize');
// const db = require("../models.storeword");
const Word = db.words;
const {spawn} = require('child_process');


exports.getNewLuxPMNode =  (req, res) => {

    const python = spawn('python3', ['test_scripts/odd_num_generator.py']);
    var dataToSend;
    python.stdout.on('data',function (data) {
        console.log('Pipe data from python script ...');
        // dataToSend = data.toString();
        dataToSend = data;
        console.log(dataToSend.toString())
    });

    python.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);
        // send data to browser
        // res.send(dataToSend)
        // console.log(dataToSend)
        data_obj = JSON.parse(dataToSend)
        str = data_obj.newword
        
        // Method 1
        // var str = "aaaaAZE12121212";
        // var patt1 = /[0-9]/g;
        // var patt2 = /[a-zA-Z]/g;
        // var letters = str.match(patt2);
        // var digits = str.match(patt1);

        // Method 2
        // var chars = str.slice(0, str.search(/\d/));
        // var numbs = str.replace(chars, '');
        // console.log(chars, numbs);         


        var regex = new RegExp('([0-9]+)|([a-zA-Z]+)','g');
        var splittedArray = str.match(regex);
        bulkCreateObjects = []

        splittedArray.forEach(element => {
            bulkCreateObjects.push({wordletter:element})
        })

        console.log(splittedArray);
        console.log(bulkCreateObjects)
        Word.bulkCreate(bulkCreateObjects)
            .then(data => {
            // res.send(data);
            })
            .catch(err => {
            // res.status(500).send({
            //     message:
            //     err.message || "Some error occurred while creating the Tutorial."
            // });
            });            

        res.status(200).send({
                // "success": dataToSend.toString() // {"success":"{\"newword\": \"L39u37x35P33M31s29o27f25t\"}\n"}
                "success": JSON.parse(dataToSend) 
            });        
    });

    // return res.status(200).send({
    //     "success": true
    // });
};

            // return res.status(200).json(Response.create(
            //     true,
            //     'Connected.',
            //     { token: token }
            // ));