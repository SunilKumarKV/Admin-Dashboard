"use strict"

class Theme {
    light = [];
    dark = [];
    darkMode = {};
    lightMode = {};

    constructor(){
        this.darkMode = document.getElementById('dark_mode');
        this.lightMode = document.getElementById('light_mode');

        const keys = [
            'accent-color',
            'special-color',
            'ceiling-color',
            'high-color',
            'medium-color',
            'low-color',
            'floor-color',
            'aside-shadow',
            'aside-glow',
            'aside-shadow',
            'aside-glow',
            'action-svg-shadow',
            'action-svg-glow',
            'action-text-shadow',
            'action-text-glow'
        ];

        keys.forEach(value => {
            this.light[value] = this.getStyleProperty(value);
            this.dark[value] = this.getStyleProperty('dark-' + value);
        });
    }
}