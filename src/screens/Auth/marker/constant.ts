export class Slide {
    image: string;
    title: string;
    content: string;

    constructor(image: string, title: string, content: string) {
        this.image = image;
        this.title = title;
        this.content = content;
    }
}

export const arrays: Slide[] = [
    {
        image: 'https://i.pinimg.com/564x/8d/1f/fe/8d1ffea4d0f59ea2ee4b5c52b6a7234c.jpg',
        title: 'Travel safely, comfortably, & easily',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper euismod nisi sit amet rutrum.',
    },
    {
        image: 'https://i.pinimg.com/736x/6d/51/40/6d5140c75b0b0daa3545bfd18d2d5e00.jpg',
        title: 'Find the best hotels for your vacation',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper euismod nisi sit amet rutrum.',
    },
    {
        image: 'https://i.pinimg.com/564x/ad/c7/ec/adc7eccb5e2ae25c917b6483aef1e743.jpg',
        title: `Let's discover the world with us`,
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper euismod nisi sit amet rutrum.',
    },
];
