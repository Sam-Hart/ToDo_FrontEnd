import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service('session'),

    actions: {
        authenticate() {
            let { username, password } = this
                .getProperties('username', 'password');
            this
                .get('session')
                .authenticate(
                    'authenticator:drf-token-authenticator',
                    username,
                    password
                )
                .catch((reason) => {
                    this.set('error', reason);
                });
        }
    }
});
