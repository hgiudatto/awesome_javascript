// * all
const all = (arr, fn = Boolean) => arr.every(fn);

if (
  all([4, 3, 2, 0], (x) => {
    x > 1;
  })
) {
  console.log("Every number in the array is greater than 1.");
}
