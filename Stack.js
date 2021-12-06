function Stack() {
	this.arr = [];

	this.push = (element) => {
		this.arr.push(element);
	};

	this.pop = () => {
		this.arr.pop();
	};

	this.empty = () => {
		if (this.arr.length === 0) return true;
		else return false;
	};

	this.top = () => {
		return this.arr[this.arr.length - 1];
	};
}
