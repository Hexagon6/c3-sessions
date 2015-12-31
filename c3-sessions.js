Talks = new Mongo.Collection("talks");

Talks.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});

if (Meteor.isClient) {
  Template.talk_list.helpers({
    talk: function(){
      return Talks.find();
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    if(Talks.find().count() === 0){
      // code to run on server at startup
      var data = JSON.parse(Assets.getText("schedule.json"));

      for(day = 0; day < data.schedule.conference.daysCount;  day++){
        var rooms = (data.schedule.conference.days[day]).rooms;
          _.each(rooms,function(room, rkey){
            _.each(room, function(talk){
              if(!talk.do_not_record){
                Talks.insert({
                  day: day, room: rkey,
                  id: talk.id, description: talk.description,
                  slug: talk.slug, title: talk.title
                });
              }
            })
          });
      }
    }
  });
}
