//users
const topicDetails = [
    'id', 'topic', 'createdAt'
],

subscriberDetails = [
    'id', 'url', 'topicId'
];

messageDetails = [
    'id', 'topicId', 'message', 'invitationCode'
];

module.exports = {
    topicDetails, subscriberDetails, messageDetails
};