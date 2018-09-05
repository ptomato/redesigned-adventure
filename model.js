/* exported RaModel */

const {Gdk, GLib, GObject} = imports.gi;

const _propFlags = GObject.ParamFlags.READWRITE | GObject.ParamFlags.CONSTRUCT;

var RaModel = GObject.registerClass({
    Properties: {
        // logo-graphic
        'logo-color': GObject.ParamSpec.boxed('logo-color', 'Logo Color', '',
            _propFlags, Gdk.RGBA),
        'main-color': GObject.ParamSpec.boxed('main-color', 'Main Color', '',
            _propFlags, Gdk.RGBA),
        'accent-color': GObject.ParamSpec.boxed('accent-color', 'Accent Color', '',
            _propFlags, Gdk.RGBA),
        'background-color': GObject.ParamSpec.boxed('background-color', 'Background Color', '',
            _propFlags, Gdk.RGBA),
        font: GObject.ParamSpec.string('font', 'Font', '', _propFlags, 'Lato'),
        'font-size': GObject.ParamSpec.uint('font-size', 'Font Size', '',
            _propFlags, 0, GLib.MAXUINT32, 10),
        'card-borders': GObject.ParamSpec.uint('card-borders', 'Card Borders', '',
            _propFlags, 0, GLib.MAXUINT32, 0),
        'border-color': GObject.ParamSpec.boxed('border-color', 'Border Color', '',
            _propFlags, Gdk.RGBA),
        text: GObject.ParamSpec.string('text', 'Text', '', _propFlags, 'normal'),
        order: GObject.ParamSpec.string('order', 'Order', '', _propFlags, 'ordered'),
        layout: GObject.ParamSpec.string('layout', 'Layout', '', _propFlags, 'grid'),
        filter: GObject.ParamSpec.string('filter', 'Filter', '', _propFlags, 'none'),
        'hover-sound': GObject.ParamSpec.string('hover-sound', 'Hover Sound', '',
            _propFlags, 'none'),
        'click-sound': GObject.ParamSpec.string('click-sound', 'Click Sound', '',
            _propFlags, 'none'),
    },
}, class RaModel extends GObject.Object {
    get logo_color() {
        return this._logoColor;
    }

    set logo_color(value) {
        if ('_logoColor' in this && this._logoColor === value)
            return;
        this._logoColor = value;
        this.notify('logo-color');
    }

    get main_color() {
        return this._mainColor;
    }

    set main_color(value) {
        if ('_mainColor' in this && this._mainColor === value)
            return;
        this._mainColor = value;
        this.notify('main-color');
    }

    get accent_color() {
        return this._accentColor;
    }

    set accent_color(value) {
        if ('_accentColor' in this && this._accentColor === value)
            return;
        this._accentColor = value;
        this.notify('accent-color');
    }

    get background_color() {
        return this._backgroundColor;
    }

    set background_color(value) {
        if ('_backgroundColor' in this && this._backgroundColor === value)
            return;
        this._backgroundColor = value;
        this.notify('background-color');
    }

    get font() {
        return this._font;
    }

    set font(value) {
        if ('_font' in this && this._font === value)
            return;
        this._font = value;
        this.notify('font');
    }

    get font_size() {
        return this._fontSize;
    }

    set font_size(value) {
        if ('_fontSize' in this && this._fontSize === value)
            return;
        this._fontSize = value;
        this.notify('font-size');
    }

    get card_borders() {
        return this._cardBorders;
    }

    set card_borders(value) {
        if ('_cardBorders' in this && this._cardBorders === value)
            return;
        this._cardBorders = value;
        this.notify('card-borders');
    }

    get border_color() {
        return this._borderColor;
    }

    set border_color(value) {
        if ('_borderColor' in this && this._borderColor === value)
            return;
        this._borderColor = value;
        this.notify('border-color');
    }

    get text() {
        return this._text;
    }

    set text(value) {
        if ('_text' in this && this._text === value)
            return;
        this._text = value;
        this.notify('text');
    }

    get order() {
        return this._order;
    }

    set order(value) {
        if ('_order' in this && this._order === value)
            return;
        this._order = value;
        this.notify('order');
    }

    get layout() {
        return this._layout;
    }

    set layout(value) {
        if ('_layout' in this && this._layout === value)
            return;
        this._layout = value;
        this.notify('layout');
    }

    get filter() {
        return this._filter;
    }

    set filter(value) {
        if ('_filter' in this && this._filter === value)
            return;
        this._filter = value;
        this.notify('filter');
    }

    get hover_sound() {
        return this._hoverSound;
    }

    set hover_sound(value) {
        if ('_hoverSound' in this && this._hoverSound === value)
            return;
        this._hoverSound = value;
        this.notify('hover-sound');
    }

    get click_sound() {
        return this._clickSound;
    }

    set click_sound(value) {
        if ('_clickSound' in this && this._clickSound === value)
            return;
        this._clickSound = value;
        this.notify('click-sound');
    }
});
