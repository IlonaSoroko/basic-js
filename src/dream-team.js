module.exports = function createDreamTeam(members) {
  let name = [];
  if (Array.isArray(members)) {
    for (let i = 0; i < members.length; i++) {
      if (typeof(members[i]) == 'string') {
        members[i] = members[i].trim().toUpperCase();
        name.push(members[i][0]);
      }
      else {
        continue;
      }
    }
    return name.sort().join('');
  }
  else {
    return false;
  }
};