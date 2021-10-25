(function () {
  String.prototype.ensureStart = function (str) {
    let toStr = this.toString();
    if (toStr.startsWith(str)) {
      return toStr;
    } else {
      return str + toStr;
    }
  };

  String.prototype.ensureEnd = function (str) {
    let toStr = this.toString();
    if (toStr.endsWith(str)) {
      return toStr;
    } else {
      return toStr + str;
    }
  };

  String.prototype.isEmpty = function () {
    return this.toString().length === 0;
  };

  String.prototype.truncate = function (n) {
    const toStr = this.toString();
    let result = ``;
    if (n >= toStr.length) {
      return toStr;
    }
    if (n < 4) {
      result = `.`.repeat(n);
      return result;
    }
    let splitted = toStr.split(" ");

    if (splitted.length > 1) {
      let joinedStrLength = splitted.join(" ").length;
      while (joinedStrLength + 3 > n) {
        splitted = splitted.splice(0, splitted.length - 1);
        joinedStrLength = splitted.join(" ").length;
      }
      result = splitted.join(" ") + "...";
      return result.trim();
    } else {
      result = toStr.substring(0, n - 3) + "...";
      return result;
    }
  };

  String.format = function (str, ...params) {
    str = str.toString();
    for (let i = 0; i < str.length; i++) {
      if (params[i] != undefined) {
        str = str.replace(`{${i}}`, params[i]);
      }
    }
    return str;
  };
})();

let str = "my string";
str = str.ensureStart("my");
console.log(str);
str = str.ensureStart("hello ");
console.log(str);

str = str.truncate(16);
console.log(str);

str = str.truncate(14);
console.log(str);

str = str.truncate(8);
console.log(str);

str = str.truncate(4);
console.log(str);

str = str.truncate(2);
// str = String.format('The {0} {1} fox','quick', 'brown');
// str = String.format('jumps {0} {1}','dog');
console.log(str);
