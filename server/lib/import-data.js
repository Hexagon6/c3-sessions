if(Talks.find().count() === 0){
  Meteor.startup(function () {
    var data = JSON.parse(Assets.getText("32c3/schedule.json"));

    var conference = data.schedule.conference;
    var c3_acronym = conference.acronym;
    var year = conference.start.split('-')[0];

    for(day = 0; day < data.schedule.conference.daysCount;  day++){
      var rooms = (data.schedule.conference.days[day]).rooms;
      _.each(rooms,function(room, rkey){
        _.each(room, function(talk){
          if(!talk.do_not_record){
            Talks.insert({
              day: day, room: rkey.replace("Hall ",""),
              id: talk.id, description: talk.description,
              slug: talk.slug, title: talk.title,
              year: year, conference: c3_acronym
            });
          }
        })
      });
    }
  });
}

Talks.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Meteor.publish('talks', () => Talks.find());
