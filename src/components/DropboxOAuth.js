import React from 'react';
import Dropbox from 'dropbox';
import DropboxTeam from 'dropbox';

const DropboxOAuth = () => {

  var ACCESS_TOKEN = "dpFAUaJ0D1AAAAAAAAAAX5IhKFj75wEKN7v73Ri_UMq7BTgSlFkM_kLrNdGf17NJ";
  var dbx = new Dropbox.Dropbox({ accessToken: ACCESS_TOKEN });

  dbx.usersGetCurrentAccount()
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.error(error);
    });

    dbx.filesListFolder({path: ''})
      .then(function(response) {
        console.log(response.entries);
      })
      .catch(function(error) {
        console.error(error);
      });

    return (
      <div>
        Dropbox DropboxOAuth
      </div>
    );

  }

  export default DropboxOAuth;
