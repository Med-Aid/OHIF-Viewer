/** @type {AppTypes.Config} */
window.config = {
  routerBasename: '/',
  enableGoogleCloudAdapter: true, // Must be true for Google Cloud auth
  showWarningMessageForCrossOrigin: true,
  showCPUFallbackMessage: true,
  showLoadingIndicator: true,
  strictZSpacingForVolumeViewport: true,
  oidc: [
    {
      authority: 'https://accounts.google.com',
      client_id: '61487220449-ic5f6o4l2o6gdjt6mvc5g909ehupagi6.apps.googleusercontent.com',
      redirect_uri: '/callback',
      response_type: 'id_token token',
      scope: 'email profile openid https://www.googleapis.com/auth/cloud-healthcare',
      post_logout_redirect_uri: '/logout-redirect.html',
      revoke_uri: 'https://accounts.google.com/o/oauth2/revoke?token=',
      automaticSilentRenew: true,
      revokeAccessTokenOnSignout: true,
    },
  ],
  extensions: [],
  modes: [],
  showStudyList: true,
  defaultDataSourceName: 'dicomweb',
  dataSources: [
    {
      namespace: '@ohif/extension-default.dataSourcesModule.dicomweb',
      sourceName: 'dicomweb',
      configuration: {
        friendlyName: 'Clinic DICOM Server',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/clinic-449120/locations/us-central1/datasets/clinic-dataset/dicomStores/clinic-dicom-store/dicomWeb',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/clinic-449120/locations/us-central1/datasets/clinic-dataset/dicomStores/clinic-dicom-store/dicomWeb',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/clinic-449120/locations/us-central1/datasets/clinic-dataset/dicomStores/clinic-dicom-store/dicomWeb',
        qidoSupportsIncludeField: true,
        imageRendering: 'wadors',
        thumbnailRendering: 'wadors',
        enableStudyLazyLoad: true,
        supportsFuzzyMatching: true,
        supportsWildcard: false,
        dicomUploadEnabled: true,
        omitQuotationForMultipartRequest: true,
        configurationAPI: 'ohif.dataSourceConfigurationAPI.google',
      },
    },
    {
      namespace: '@ohif/extension-default.dataSourcesModule.dicomjson',
      sourceName: 'dicomjson',
      configuration: {
        friendlyName: 'dicom json',
        name: 'json',
      },
    },
    {
      namespace: '@ohif/extension-default.dataSourcesModule.dicomlocal',
      sourceName: 'dicomlocal',
      configuration: {
        friendlyName: 'dicom local',
      },
    },
  ],
};
