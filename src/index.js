import Footer from './components/footer';
import Header from './components/header';
import Images from './components/images';
import './style.css';

// CS50
window.addEventListener('load', () => {

    
    const footer = new Footer('footer');
    const header = new Header('header');

    header.render();
    // search.render()
    footer.render({ copyright: 'passed value - Copyright 2018' });

    const images = new Images();
    

    // const toggleOrder = new ToggleOrder({
    //     rootNode: $('[name="toggle-order-placeholder"]'),
    //     handlers: {
    //         onCreateOrder: () => { order.createOrder(); },
    //         onCloseOrder: () => { order.closeOrder(); }
    //     }
    // });

    // const order = new Order({
    //     rootNode: $('[name="order-placeholder"]'),
    //     handlers: {
    //         onHideOrder: () => { toggleOrder.showCreateOrder(); },
    //         onShowOrder: () => { toggleOrder.showCloseOrder(); }
    //     }
    // });

    // const tableSelect = new TableSelect({
    //     rootNode: $('[name="table-select-placeholder"]'),
    //     handlers: { onTableSelect: ({ table }) => { order.open(table); } }
    // });

})
