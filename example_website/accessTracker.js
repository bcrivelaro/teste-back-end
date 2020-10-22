accessTracker = function () {
  const cookieName = 'icasei-accessTracker';
  const serverUrl = 'http://localhost:8000/v1/visits';
  const daysToExpiresCookies = 30;

  function sendVisitorData() {
    const guid = getVisitorGuid();
    const url = accessedUrl();
    const accessedAt = getCurrentDateTime();

    const params = {
      visit: {
        guid: guid,
        url: url,
        accessed_at: accessedAt,
      },
    };

    $.ajax({
      url: serverUrl,
      type: 'post',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify(params),
    });
  }

  function setVisitorGuid() {
    const cookies = cookieName + '=' + generateGuid();
    const expires = ';expires=' + cookieExpirationDate() + '; path=/';

    document.cookie = cookies + expires;
  }

  function cookieExpirationDate() {
    const date = new Date();
    const expiresAt =
      date.getTime() + daysToExpiresCookies * 24 * 60 * 60 * 1000;

    date.setTime(expiresAt);

    return date.toUTCString();
  }

  function getVisitorGuid() {
    const currentGuid = readVisitorGuid();
    if (currentGuid === '') setVisitorGuid();

    return readVisitorGuid();
  }

  function readVisitorGuid() {
    const pattern = new RegExp(
      '(?:(?:^|.*;s*)' + cookieName + 's*=s*([^;]*).*$)|^.*$'
    );
    const guid = document.cookie.replace(pattern, '$1');

    return guid;
  }

  function generateGuid() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  }

  function accessedUrl() {
    return window.location.href;
  }

  function getCurrentDateTime() {
    const date = new Date();

    return date.toUTCString();
  }

  sendVisitorData();
};

const domReady = function (callback) {
  if (
    document.readyState === 'interactive' ||
    document.readyState === 'complete'
  ) {
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', callback);
  }
};

domReady(accessTracker());

// If the client website does use turbolinks (like most Rails apps), listen for the turbolinks event.
// document.addEventListener('turbolinks:load', function () {
//   accessTracker();
// })
