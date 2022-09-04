function result(ticketsInfo, sortCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let tickets = [];
    for (let i = 0; i < ticketsInfo.length; i++) {
        let lineInput = ticketsInfo[i];
        [destination, price, status] = lineInput.split('|');

        let ticket = new Ticket(destination, Number(price), status);
        tickets.push(ticket);
    }
    if (sortCriteria == 'price') {
        tickets = tickets.sort((a, b) => (a.price - b.price));
    } else if (sortCriteria == 'destination') {
        tickets = tickets.sort((a, b) => a.destination.localeCompare(b.destination));
    } else if (sortCriteria == 'status') {
        tickets = tickets.sort((a, b) => a.status.localeCompare(b.status));
    }

    return tickets;
}

result(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
);

// [ Ticket { destination: 'Boston',
//     price: 126.20,
//     status: 'departed' }, 
//   Ticket { destination: 'New York City',
//     price: 95.99,
//     status: 'available' }, 
//   Ticket { destination: 'New York City',
//     price: 95.99,
//     status: 'sold' }, 
//   Ticket { destination: 'Philadelphia',
//     price: 94.20,
//     status: 'available' } 
// ]


result(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'
);

// [ Ticket { destination: 'Philadelphia',
//     price: 94.20,
//     status: 'available' },
//   Ticket { destination: 'New York City',
//     price: 95.99,
//     status: 'available' },
//   Ticket { destination: 'Boston',
//     price: 126.20,
//     status: 'departed' },
//   Ticket { destination: 'New York City',
//     price: 95.99,
//     status: 'sold' }
// ]
