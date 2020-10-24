function isBlank(value) {
  return value === undefined || value === "";
}

function equalsNumber(actual, expected) {
  return actual === Number(expected);
}

function includes(actual, expected) {
  return actual.includes(expected);
}

function containsOneOf(array, ...oneOf) {
  const expected = oneOf.flat();
  return array.some((value) => expected.includes(value));
}

class Matcher {

  constructor() {
    this.matched = true;
  }

  equalsNumber(actual, expected) {
    return this.match(actual, expected, equalsNumber);
  }

  includes(actual, expected) {
    return this.match(actual, expected, includes);
  }

  containsOneOf(actual, expected) {
    return this.match(actual, expected, containsOneOf);
  }

  match(actual, expected, callback) {
    if (this.matched && !isBlank(expected)) {
      if (isBlank(actual) || !callback(actual, expected)) {
        this.matched = false;
      }
    }

    return this;
  }

  ifMatched(callback) {
    if (this.matched) {
      callback();
    }
  }
}

module.exports = Matcher;
