export const menuData = [
    { id: 1, name: 'Home', url: '/' },
    { id: 2, name: 'About', url: '/about' },
    { id: 3, name: 'Categories', subMenu: true },
    { id: 4, name: 'Contact', url: '/contact' },
];

export const subMenuData = [
    { id: 1, name: 'Jordan', doc_count: 11, url: '/category/jordan' },
    { id: 2, name: 'Sneakers', doc_count: 8, url: '/category/sneakers' },
    {
        id: 3,
        name: 'Running shoes',
        doc_count: 64,
        url: '/category/running-shoes',
    },
    {
        id: 4,
        name: 'Football shoes',
        doc_count: 107,
        url: '/category/football-shoes',
    },
];
