export class OrderService {
    orders: { name: string; price: number }[] = [
        {
            name: 'Order Name 1',
            price: 23,
        },
        {
            name: 'Order Name 2',
            price: 43,
        },
    ];

    addOrders(name: string, price: number) {
        this.orders.push({ name, price });
    }

    increasePrice(name: string) {
        console.log(this.orders);
        
        this.orders = this.orders.map((item, index): {name: string, price: number} => {
            if(item.name === name){
                return { name: item.name, price: item.price + 1};
            }else{
                return item;
            }
        });
    }
}
