var canPlaceFlowers = function (flowerbed, n) {
    let count = 0
    for (let i = 0; i < flowerbed.length; i++) {
      if (flowerbed[i] === 0) {
        let emptyLeft = (i === 0 || flowerbed[i - 1] === 0);
        let emptyRight = (i === flowerbed.length - 1 || flowerbed[i + 1] === 0);
        if (emptyLeft && emptyRight) {
          flowerbed[i] = 1;
       count++;
        }
      }
    }
    return n <= count;
  };
  console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
  console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));