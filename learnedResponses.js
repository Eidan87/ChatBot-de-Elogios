// learnedResponses.js
let learnedResponses = {};

function learnResponse(trigger, response) {
  learnedResponses[trigger] = response;
}

function getLearnedResponse(trigger) {
  return learnedResponses[trigger] || null;
}

module.exports = {
  learnResponse,
  getLearnedResponse
};
