export function initialize(application) {
  application.deferReadiness();
  window.$.getJSON('/api/v1/token').then((data) => {
    window.$.ajaxSetup({
      headers: {
        token: data.token,
        'X-CSRF-Token': data.crsf
      }
    });
    application.advanceReadiness();
  });
}

export default {
  initialize
};
