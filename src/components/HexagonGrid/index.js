import React from 'react';
import './style.css';
import hexTiles from '../../constants/hexTiles';
import Hexagon from '../Hexagon';

const HexagonGrid = props => {
    let content = hexTiles.hexTiles.map(hexTile => (
        <Hexagon
            id={hexTile.id}
            key={hexTile.id}
            imageSrc={hexTile.imageSrc}
            imageAlt={hexTile.imageAlt}
            background={hexTile.background}
            textColor={hexTile.textColor}
            title={hexTile.title}
            link={hexTile.path}
        />
    ));
    return (
        <div className="hexagonGrid">
            {content}
        </div>
    )
};

export default HexagonGrid;