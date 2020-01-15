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
        />
    ));
    return (
        <div className="hexagonGrid">
            {content}
            {/*<div className="hexagonContainer">*/}
                {/*<div className="outerHexagonMask">*/}
                    {/*<div className="innerHexagonMask" >*/}
                        {/*<div id={hexTiles.hexTiles[0].id} className="hexChild">*/}
                            {/*<h3>{hexTiles.hexTiles[0].title}</h3>*/}
                            {/*<img src={hexTiles.hexTiles[0].imageSrc} alt={hexTiles.hexTiles[0].imageAlt}/>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
            {/*</div>*/}
            {/*<div className="hexagonContainer">*/}
                {/*<div className="outerHexagonMask">*/}
                    {/*<div className="innerHexagonMask" >*/}
                        {/*<div id={hexTiles.hexTiles[0].id} className="hexChild">*/}
                            {/*<h3>{hexTiles.hexTiles[0].title}</h3>*/}
                            {/*<img src={hexTiles.hexTiles[0].imageSrc} alt={hexTiles.hexTiles[0].imageAlt}/>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
            {/*</div>*/}
            {/*<div className="hexagonContainer">*/}
                {/*<div className="outerHexagonMask">*/}
                    {/*<div className="innerHexagonMask" >*/}
                        {/*<div id={hexTiles.hexTiles[0].id} className="hexChild">*/}
                            {/*<h3>{hexTiles.hexTiles[0].title}</h3>*/}
                            {/*<img src={hexTiles.hexTiles[0].imageSrc} alt={hexTiles.hexTiles[0].imageAlt}/>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
            {/*</div>*/}
            {/*<div className="hexagonContainer">*/}
                {/*<div className="outerHexagonMask">*/}
                    {/*<div className="innerHexagonMask" >*/}
                        {/*<div id={hexTiles.hexTiles[0].id} className="hexChild">*/}
                            {/*<h3>{hexTiles.hexTiles[0].title}</h3>*/}
                            {/*<img src={hexTiles.hexTiles[0].imageSrc} alt={hexTiles.hexTiles[0].imageAlt}/>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
            {/*</div>*/}
            {/*<div className="hexagonContainer">*/}
                {/*<div className="outerHexagonMask">*/}
                    {/*<div className="innerHexagonMask" >*/}
                        {/*<div id={hexTiles.hexTiles[0].id} className="hexChild">*/}
                            {/*<h3>{hexTiles.hexTiles[0].title}</h3>*/}
                            {/*<img src={hexTiles.hexTiles[0].imageSrc} alt={hexTiles.hexTiles[0].imageAlt}/>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
            {/*</div>*/}
            {/*<div className="hexagonContainer">*/}
                {/*<div className="outerHexagonMask">*/}
                    {/*<div className="innerHexagonMask" >*/}
                        {/*<div id={hexTiles.hexTiles[0].id} className="hexChild">*/}
                            {/*<h3>{hexTiles.hexTiles[0].title}</h3>*/}
                            {/*<img src={hexTiles.hexTiles[0].imageSrc} alt={hexTiles.hexTiles[0].imageAlt}/>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
            {/*</div>*/}
            {/*<div className="hexagonContainer">*/}
                {/*<div className="outerHexagonMask">*/}
                    {/*<div className="innerHexagonMask" >*/}
                        {/*<div id={hexTiles.hexTiles[0].id} className="hexChild">*/}
                            {/*<h3>{hexTiles.hexTiles[0].title}</h3>*/}
                            {/*<img src={hexTiles.hexTiles[0].imageSrc} alt={hexTiles.hexTiles[0].imageAlt}/>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
            {/*</div>*/}
        </div>
    )
};

export default HexagonGrid;