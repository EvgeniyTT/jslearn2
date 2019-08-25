import Footer from './src/components/footer';
import Header from './src/components/header';
import Search from './src/components/search';
import './style.css';

window.addEventListener('load', function() {
    const footer = new Footer('footer');
    const header = new Header('header');
    const search = new Search('main');

    header.render();
    search.render()
    footer.render({ copyright: 'passed value - Copyright 2018' });
})


// CS50
$(document).ready(() => {

    // const toggleOrder = new ToggleOrder({
    //     rootNode: $('[name="toggle-order-placeholder"]'),
    //     handlers: {
    //         onCreateOrder: () => { order.createOrder(); },
    //         onCloseOrder: () => { order.closeOrder(); }
    //     }
    // });

    const order = new Order({
        rootNode: $('[name="order-placeholder"]'),
        handlers: {
            onHideOrder: () => { toggleOrder.showCreateOrder(); },
            onShowOrder: () => { toggleOrder.showCloseOrder(); }
        }
    });

    // const tableSelect = new TableSelect({
    //     rootNode: $('[name="table-select-placeholder"]'),
    //     handlers: { onTableSelect: ({ table }) => { order.open(table); } }
    // });

})
