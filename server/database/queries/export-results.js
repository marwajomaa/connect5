const moment = require("moment");

// Load models
const Response = require("../models/Response");
const Answer = require("../models/Answer");
const Question = require("../models/Question");
const Trainer = require("../models/Trainer");

// function that creates array of data for trainer to export as csv

const exportDetails = async (trainerId) => {
  // get response Ids for trainer
  const responseIDArray = await Response.find({ trainer: trainerId }).then(responses => responses.map(e => e._id));

  // get trainer details
  const trainerDetails = await Trainer.findById(trainerId);
  // set up export array
  const exportArray = [];

  for (let i = 0; i < responseIDArray.length; i++) {
    // find answers related to the responses to the trainer
    const answers = await Answer.find({ response: responseIDArray[i] });
    for (let k = 0; k < answers.length; k++) {
      // define object of data for each answer
      const dataObj = {
        trainerName: `${trainerDetails.firstName} ${trainerDetails.lastName}`,
        questionText: "",
        sessionID: "",
        answer: "",
      };
      const questionDetails = await Question.find({ _id: answers[k].question });
      const sessionDetails = await Session.find({ _id: answers[k].session });

      dataObj.questionText = questionDetails[0].questionText;
      dataObj.surveyType = questionDetails[0].surveyType;
      dataObj.sessionID = answers[k].session;
      dataObj.answer = answers[k].answer;
      dataObj.sessionDate = moment(sessionDetails[0].date).format("DD-MM-YYYY");

      exportArray.push(dataObj);
    }
  }
  return exportArray;
};
module.exports = exportDetails;
