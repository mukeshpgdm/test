module.exports = function(grunt){
  /*
   * Enter the OAuth client and user-specific credentials needed to connect to Salesforce.
   * Alternatively, store this information in environment variables, e.g.
   *    'clientId': process.env.SKUID_GRUNT_CLIENT_ID
   */
  var orgOptions = {
    'clientId': '3MVG9A2kN3Bn17htf9d56rRTWp7XflzDR4h73uePO_UshvBBeCHm.Dx2lXttl2DaK7a0nZXj2U.CDzgfBHKtm',
    'clientSecret': '3765006032698575129',
    'username': 'mukesh.x.srivastava@gmail.com',
    'password': 'S@ndeep2018yyxsPRm9XTFjidV98RNOeWso'
  };
  grunt.initConfig({
    'skuid-pull':{
      'options': orgOptions,
      'production':{
        options:{
          'dest': 'skuidpages/',
          'module':[] //can be array or comma separated values
        }
      }  
    },
    'skuid-push':{
      'options': orgOptions,
      'dev':{
         'files':{
            src: ['skuidpages/Module1*']
         }
      }
    }
  });

  //task that will pull your Skuid pages for Module1 from a developer org and push them
  //right into a production org
  grunt.registerTask('to-production', ['skuid-pull:dev', 'skuid-push:production']);

  grunt.loadNpmTasks('skuid-grunt');
}