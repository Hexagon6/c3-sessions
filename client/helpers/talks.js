if (Meteor.isClient) {
  Template.talks.helpers({
    talk: function(){
      return Talks.find();
    }
  });
}
