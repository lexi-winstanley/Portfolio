import React, {Component} from 'react';
import throttle from 'lodash.throttle';
import './style.css';
import hexTilesMobile from '../../constants/hexTilesMobile';
import hexTiles from '../../constants/hexTiles';
import Hexagon from '../Hexagon';

class HexagonGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile: false
        }
    };

    throttledHandleWindowResize = throttle(() => {
            this.setState({ isMobile: window.innerWidth < 775 })
        }, 50);


    componentDidMount() {
        window.addEventListener('resize', this.throttledHandleWindowResize);
        this.setState({ isMobile: window.innerWidth < 775 });
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.throttledHandleWindowResize);
    }

    render() {
        let content;
        console.log(this.state.isMobile);
        if (this.state.isMobile) {
            content = hexTilesMobile.hexTiles.map(hexTile => (
                <Hexagon
                    id={hexTile.id}
                    key={hexTile.id}
                    imageSrc={hexTile.imageSrc}
                    imageAlt={hexTile.imageAlt}
                    background={hexTile.background}
                    textColor={hexTile.textColor}
                    title={hexTile.title}
                    technologies={hexTile.technologies}
                    link={hexTile.path}
                />
            ));
        } else {
            content = hexTiles.hexTiles.map(hexTile => (
                <Hexagon
                    id={hexTile.id}
                    key={hexTile.id}
                    imageSrc={hexTile.imageSrc}
                    imageAlt={hexTile.imageAlt}
                    background={hexTile.background}
                    textColor={hexTile.textColor}
                    title={hexTile.title}
                    technologies={hexTile.technologies}
                    link={hexTile.path}
                />
            ));
        }

        return (
            <div className="hexagonGrid">
                {content}
            </div>
        )
    };
}

export default HexagonGrid;