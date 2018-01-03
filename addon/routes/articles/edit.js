import Route from '@ember/routing/route';
import { Promise as EmberPromise } from 'rsvp';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  titleToken: 'Edit',

  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('commonModel', this.modelFor('articles'));
  },

  model: function(params) {
    return this.store.findRecord('article', params.document_id);
  },

  actions: {
    willTransition: function() {
      let commonModel = this.get('controller.commonModel');
      commonModel.authors.forEach((author) => {
        if (!author.get('id')) {
          author.deleteRecord();
        }
      });

      commonModel.journals.forEach((journal) => {
        if (!journal.get('id')) {
          journal.deleteRecord();
        }
      });

      commonModel.tags.forEach((tag) => {
        if (!tag.get('id')) {
          tag.deleteRecord();
        }
      });

      return true;
    },

    save() {
      let controller = this.get('controller');
      let item = controller.get('model');

      let promises = [];
      item.get('authors').forEach((author) => {
        if (!author.get('id')) {
          promises.push(author.save());
        }
      });
      item.get('tags').forEach((tag) => {
        if (!tag.get('id')) {
          promises.push(tag.save());
        }
      });

      EmberPromise.all(promises).then(() => {
        item.save().then(() => {
          controller.transitionToRoute('articles.view', item);
        }).catch(() => {
          // TODO: handle the error
        });
      });
    }
  }
});
