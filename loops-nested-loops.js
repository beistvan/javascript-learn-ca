var bobsFollowers = ["Andrea", "Tony", "Perl", "Johnes"];
var tinasFollowers = ["Johnes", "Perl", "Imola"];
var mutualFollowers = [];
for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}
