function longestWordSearch(str) {
  let strArray = str.split(' ');
  let longest = strArray.sort(function (a, b) { return b.length - a.length; })[0];
  alert(longest);
}

longestWordSearch('This is marmalade jammalade');
