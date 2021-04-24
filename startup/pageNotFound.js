const error404 = 'Sorry, the resource you are looking for was not found.';

module.exports = function (publisher, subscriber) {
    publisher.get('*', (req, res) => res.status(404).json({ message: error404 }));
    publisher.post('*', (req, res) => res.status(404).json({ message: error404 }));
    publisher.put('*', (req, res) => res.status(404).json({ message: error404 }));
    publisher.delete('*', (req, res) => res.status(404).json({ message: error404 }));

    subscriber.get('*', (req, res) => res.status(404).json({ message: error404 }));
    subscriber.post('*', (req, res) => res.status(404).json({ message: error404 }));
    subscriber.put('*', (req, res) => res.status(404).json({ message: error404 }));
    subscriber.delete('*', (req, res) => res.status(404).json({ message: error404 }));
};