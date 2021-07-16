function binary_search(list, item) {
	let low = 0;
	let high = list.length;
	while (low < high) {
	  let mid = Math.trunc((low + high) / 2);
	  let guess = list[mid];
	  // console.log(guess)
	  if (guess == item) {
		return mid;
	  }
	  else if (guess > item) {
		high = mid - 1;
	  }
	  else {
		low = mid + 1
	  }
	}
	return null;
  }


  let my_list = [1, 3, 5, 7, 9];

  console.log(binary_search(my_list, 9))
  // console.log(binary_search(my_list, -1))
