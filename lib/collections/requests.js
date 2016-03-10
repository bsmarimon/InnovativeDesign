RequestTypes = new orion.collection('requests_types', {
  singularName: 'request type',
  pluralName: 'request types',
  link: {
    title: 'Open/Close requests'
  },
  tabular: {
    columns: [
      { data: "request_type", title: "Request Type" },
      { data: "request_status", title: "Status" },
    ]
  }
});

RequestTypes.allow({
  update: function(userId, post) { return ownsDocument(userId, post); },
  remove: function(userId, post) { return ownsDocument(userId, post); },
});

RequestTypes.attachSchema(new SimpleSchema({
  request_type: {
    type: String,
  },
  request_status: {
    type: Boolean,
    defaultValue: true,
    label: "Open for requests"
  },
}));
