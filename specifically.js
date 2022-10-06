const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');
const FILE_PATH = './data.json';

const makeCommit = n => {
    const DATE = moment(n).format();

    const data = {
        date: DATE
    }

    jsonfile.writeFile(FILE_PATH, data);

    simpleGit().add([FILE_PATH]).commit(DATE, { '--date': DATE }).push();
}

makeCommit('2022-09-10') //change this date to turn light on the graph.

