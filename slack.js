const notifyToSlack = (_text) => {
  let postUrl = "https://hooks.slack.com/services/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"

  let json = {
    "text": _text
  };

  let options = {
    "method": "post",
    "contentType": "application/json",
    "payload": JSON.stringify(json)
  };

  console.log(_text)
  UrlFetchApp.fetch(postUrl, options);
}
