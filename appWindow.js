/* exported RaAppWindow */

const {GObject, Gtk} = imports.gi;

const {RaControlPanel} = imports.controlPanel;

var RaAppWindow = GObject.registerClass(class RaAppWindow extends Gtk.ApplicationWindow {
    _init(props = {}) {
        super._init(props);
        this.maximize();
        this.show_all();

        this._controlPanel = new RaControlPanel();
        this.borderWidth = 20;

        this.add(this._controlPanel);
    }
});
