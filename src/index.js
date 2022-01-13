module.exports = function check(str, bracketsConfig) {
  let open = [];
  for (let i = 0; i < str.length; i++) {
    loop: for (let el = 0; el < bracketsConfig.length; el++) {
      if (bracketsConfig[el][0] == bracketsConfig[el][1]) {
        if (open[open.length - 1] == str[i]) {
          open.pop();
          break loop;
        } else {
          open.push(str[i]);
          break loop;
        }
      }
      if (bracketsConfig[el][0] == str[i]) {
        open.push(str[i]);
        break loop;
      }
      if (bracketsConfig[el][1] == str[i]) {
        if (open[open.length - 1] == bracketsConfig[el][0]) {
          open.pop();
          break loop;
        }
        return false;
      }
    }
  }
  return open.length == 0 ? true : false;
};
