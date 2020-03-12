const _size = {
	small: {
		price: 50,
		calories: 20
	},
	large: {
		price: 100,
		calories: 40
	}
}
const _fill = {
	cheese: {
		price: 10,
		calories: 20
	},
	salad: {
		price: 20,
		calories: 5
	},
	potato: {
		price: 15,
		calories: 10
	}
}
const _toppings = {
	sauce: {
		price: 15,
		calories: 0
	},
	mayonnaise: {
		price: 20,
		calories: 5
	}
}

class Burger{
    constructor(size, fill, toppings){
        this.size = this._getSize(size); 
        this.fill = this._getFill(fill); 
        this.toppings = this._getToppings(toppings);
    }
    
    _getSize(name){
        let size;
	size = $(`select[id=${name}]`).val();
        return size;
    }
   _getFill(name){
       let fill = [];
       $(`input[id =${name}]:checked`).each(function() {
       fill.push($(this).val());
	}); 
	return fill;
    }

    _getToppings(name){
        let toppings = [];
	$(`input[id=${name}]:checked`).each(function() {
    	toppings.push($(this).val());
	}); 
	return toppings;
    }
     
    _sumPrice(){
        let result = _size[this.size].price;
	this.fill.forEach(el => result += _fill[el].price);
        this.toppings.forEach(el => result += _toppings[el].price);
        return result;
    }
    
    _sumCalories(){
        let result = _size[this.size].calories;
        this.fill.forEach(el => result += _fill[el].calories);
        this.toppings.forEach(el => result += _toppings[el].calories);
        return result;
    }
    
    showSum(price, calories){
        document.querySelector(price).textContent = this._sumPrice();
        document.querySelector(calories).textContent = this._sumCalories();
    }   
}

