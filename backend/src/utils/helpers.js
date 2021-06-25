const normalizeUrl = (url) => {
  if (url == null || url.length === 0) {
    return null;
  }

  let normalizedUrl = url;

  if (!url.startsWith('https')) {
    normalizedUrl = `https://${url}`;
  }

  return normalizedUrl;
};

exports.normalizeUrl = normalizeUrl;

const createDeferred = () => {
  const deferred = {};

  deferred.promise = new Promise((resolve, reject) => {
    deferred.resolve = resolve;
    deferred.reject = reject;
  });

  return deferred;
};

exports.createDeferred = createDeferred;

const assignExistProperties = (
  target,
  source,
  properties = Object.keys(target),
) => {
  for (const property of properties) {
    const value = source[property];

    if (value === undefined) {
      continue;
    }

    target[property] = value;
  }

  return target;
};

exports.assignExistProperties = assignExistProperties;
