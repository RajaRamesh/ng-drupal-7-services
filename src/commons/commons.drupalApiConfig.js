;(function() {
    'use strict';

	var DrupalApiConstant =  {
			  drupal_instance	: 'http://your.site.name/',
			  api_endpoint : 'api/',
			  responseFormat : "application/json",
				// - bencode: The encoding used by the BitTorrent file sharing system.
			  // - json => JavaScript Object Notation
			  // - jsonp: JSON with padding
			  // - php: Responses are encoded using the data format emitted by PHPs "serialize()" function
			  // - rss
			  // - xml
			  // - yaml

			  // By default, Drupal is configured with a session expiration time of 2000000 seconds which is 23 day 3 hr. 33 min. 20 sec
			  // To customize this install the session expire module => https://www.drupal.org/project/session_expire
			  // and also set same value here
				session_expiration_time : 2000000,
			  session_expiration_unite : 'seconds',
			  publicFilePath 	: "public/",
			  privateFilePath 	: "private/",
			  imageStyles		: {
				  large 	: 'large',
				  medium 	: 'medium',
				  thumbnail : 'thumbnail'
			  },
			  LANGUAGE_NONE : 'und'
	};

	/**
	 * @ngdoc object
	 * @name d7-services.commons.configurations:DrupalApiConstant
	 * @description
	 *   Constant for the d7-services module. Holds general options, request relevant data, defaults, filter options, imagestyles and so on.
	 *
	 * @property {string} drupal_instance - The sites domain
	 * @property {string} api_endpoint - The path to the services
	 * @property {string} responseFormat - Response format of a request. @see {@link https://www.drupal.org/node/1699450|Services response formatters and request parsing}
	 * @property {Integer} session_expiration_time - The sessions lifetime. By default, Drupal is configured with a session expiration time of 2000000 seconds which is 23 day 3 hr. 33 min. 20 sec.
	 * @property {string} session_expiration_unite - Session Expriation untis (Default is seconds because Drupals default time is in seconds)
	 * @property {string} publicFilePath - path to public folder
	 * @property {string} privateFilePath - path to private folder
	 * @property {Object} imageStyles - Drupals default image styles
	 * @property {string} imageStyles.large - Large image style name
	 * @property {string} imageStyles.medium - Medium image style name
	 * @property {string} imageStyles.thumbnail - Thumbnail image style name
	 * @property {string} LANGUAGE_NONE - default language
	 *
	 * @example
	 *
	 * DrupalApiConstant is editable in config phase
	 * <pre>
	 * angular
	 *  .module('myModule', ['d7-services.commons'])
	 *  .config(function (DrupalApiConstant) {
   *     DrupalApiConstant.imageStyles.mxCustomStyle = 'my_custom_style';
   * }
	 * </pre>
	 */
	angular
	    .module('d7-services.commons.configurations', [])
	    .constant("DrupalApiConstant", DrupalApiConstant);
	

})();
