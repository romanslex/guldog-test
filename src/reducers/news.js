const news = (state, action) => {
    if(typeof state === 'undefined')
        return initialState;
    return state
};

const initialState = [
    {
        id: 1,
        header: 'Article 1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac nisl tincidunt, pulvinar dui at, luctus nisl. Vivamus leo quam, molestie sed massa posuere, suscipit elementum ex. '
    },{
        id: 2,
        header: 'Article 2',
        text: 'In non nisl feugiat sem lacinia maximus eget molestie libero. In hac habitasse platea dictumst. Quisque lobortis velit eu libero tempus, eu blandit erat dignissim.'
    },{
        id: 3,
        header: 'Article 3',
        text: 'Nullam imperdiet risus sit amet lobortis accumsan. Suspendisse feugiat nunc a ante pellentesque, sit amet egestas nisl aliquam. Phasellus at varius ex.'
    },
];
export default news;