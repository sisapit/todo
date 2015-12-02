var service = {
    getAllToDoItems: function () {
        return {items: [
            {text: "Hals waschen", done: false},
            {text: "Oma über die Straße helfen", done: false},
            {text: "Ameisen umschubsen", done: true},
            {text: "Nachbarin ärgern", done: true},
            {text: "Brav sein", done: true}]};
    }
};

module.exports = service;