
class Boba {
    constructor(flavour, size, sugar, ice, topping) {
        this.flavor = flavour;
        this.size = size;
        this.sugar = sugar;
        this.ice = ice;
        this.topping = topping;
    }

    describe() {
        return `You ordered a ${this.size} ${this.flavor} with ${this.sugar}% sugar, ${this.ice}% ice, and ${this.topping} topping.`;
      }
      
}



document.querySelector('#submit').addEventListener('click', function(event) {
    event.preventDefault();

    const flavor = document.getElementById('buildBase').value;
    const size = document.getElementById('buildSize').value;
    const sugar = document.getElementById('buildSugar').value;
    const ice = document.getElementById('buildIce').value;
    const topping = document.getElementById('buildTopp').value;

    
    const bobaOrder = new Boba(flavor, size, sugar, ice, topping);

    document.getElementById('studentInfo').textContent = `1226379 Samuel Diaz Amparo`;

    document.getElementById('bobaOrderDetails').textContent = `${bobaOrder.describe()}`;
});
