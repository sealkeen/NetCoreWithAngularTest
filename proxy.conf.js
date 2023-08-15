const { env } = require('process');

const target = getLocation();

function getLocation() {
    console.log('[DBG] Gettings location...')
        if(this.isGithub()) {
            return 'https://fb17-95-24-222-254.ngrok-free.app/';
        } else if ( this.isRemoteWorkspace() ) {
            return 'https://localhost:443/';
        } else if ( !this.isNodeJSHost() || this.isNgrok() ) {
            return `${location.protocol}//${location.host}/`;
        } else
            return 'https://localhost:5001/';
}

const PROXY_CONFIG = [
  {
    context: [
      "/weatherforecast",
      "/_configuration",
      "/.well-known",
      "/Identity",
      "/connect",
      "/ApplyDatabaseMigrations",
      "/_framework"
   ],
    target: target,
    secure: false,
    headers: {
      Connection: 'Keep-Alive'
    }
  }
]

module.exports = PROXY_CONFIG;
