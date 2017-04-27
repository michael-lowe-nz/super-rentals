import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        id: 'grand-old-mansion',
        description: 'A nice house',
        image:'http://astana-apartments.com/wp-content/uploads/2016/09/nice-house-colors-mediterranean-exterior.jpg'
      },
      {
        id: 'grand-old-flat',
        description: 'A nice house',
        image:'http://astana-apartments.com/wp-content/uploads/2016/09/nice-house-colors-mediterranean-exterior.jpg'
      }
    ]
  }
});
