function Queue() {
	this.arr = [];

	this.push = (element) => {
		this.arr.unshift(element);
	};

	this.pop = () => {
		this.arr.pop();
	};

	this.empty = () => {
		if (this.arr.length === 0) return true;
		else return false;
	};

	this.front = () => {
		return this.arr[this.arr.length - 1];
	};
}
