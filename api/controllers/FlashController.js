/**
 * FlashController
 *
 * @description :: Server-side logic for managing flashes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    /**
     * `FlashController.home()`
     */
    home: function (req, res) {
        Passport
            .findOne({ user: req.user.id })
            .exec(function(err, passport) {
                return res.json({
                    todo: 'home() is not implemented yet! But you are logged in :)',
                    token: passport.tokens===undefined?passport.accessToken:passport.tokens.token
                });
            });
    },

    /**
     * `FlashController.remotehome()`
     * accessible via l’url flash/remotehome?access_token=$ACCESSTOKEN$
     */
    remotehome: function (req, res) {
        return res.json({
            todo: 'remotehome() is not implemented yet! But you are authorized :)'
        });
    }

};
