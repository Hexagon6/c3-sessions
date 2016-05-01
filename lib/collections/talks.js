Talks = new Mongo.Collection("talks");

Talks.allow({
  insert: () => true,
  update: () => true,
  remove: () => true
});
