const weekday = (function() {
  const names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  function getCount() {
      return names.length;
  }

  function getName(num) {
    return names[num];
  }

  function getIndex(weekday) {
    return names.indexOf(weekday);
  }

  return {
    count: getCount,
    name: getName,
    number: getIndex
  }
})();

var num = 0;

console.log("There are " + weekday.count() + " days in a week");

console.log("In programming, the index of " +  weekday.name(num) + " tends to be " + weekday.number(weekday.name(num)) + ".");