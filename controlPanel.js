/* exported RaControlPanel */

const {GObject, Gtk} = imports.gi;
const {ButtonGroup} = imports.buttonGroup;

var RaControlPanel = GObject.registerClass({
    GTypeName: 'RaControlPanel',
    Template: 'resource:///name/ptomato/RedesignedAdventure/controlpanel.ui',
    InternalChildren: ['accentColorButton', 'backgroundColorButton',
        'borderColorButton', 'borderWidthAdjustment', 'fontButton',
        'fontSizeAdjustment', 'logoButton', 'logoColorButton', 'logoImage',
        'mainColorButton', 'orderAZ', 'orderOrdered', 'orderRandom', 'orderZA',
        'textFlipped', 'textGothic', 'textNormal', 'textScrambled',
        'textZalgo'],
}, class RaControlPanel extends Gtk.Grid {
    _init(props = {}) {
        super._init(props);

        this._orderGroup = new ButtonGroup({
            ordered: this._orderOrdered,
            random: this._orderRandom,
            az: this._orderAZ,
            za: this._orderZA,
        });
        this._textGroup = new ButtonGroup({
            normal: this._textNormal,
            flipped: this._textFlipped,
            gothic: this._textGothic,
            scrambled: this._textScrambled,
            zalgo: this._textZalgo,
        });
    }

    bindModel(model) {
        const flags = GObject.BindingFlags.BIDIRECTIONAL;
        model.bind_property('accent-color', this._accentColorButton, 'rgba', flags);
        model.bind_property('background-color', this._backgroundColorButton, 'rgba', flags);
        model.bind_property('border-color', this._borderColorButton, 'rgba', flags);
        model.bind_property('card-borders', this._borderWidthAdjustment, 'value', flags);
        model.bind_property('font', this._fontButton, 'font', flags);
        model.bind_property('font-size', this._fontSizeAdjustment, 'value', flags);
        model.bind_property('logo-color', this._logoColorButton, 'rgba', flags);
        model.bind_property('main-color', this._mainColorButton, 'rgba', flags);
        model.bind_property('order', this._orderGroup, 'value', flags);
        model.bind_property('text', this._textGroup, 'value', flags);

        this._model = model;
    }
});
