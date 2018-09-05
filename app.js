/* exported RaApp */

const {GObject, Gtk} = imports.gi;

const {RaAppWindow} = imports.appWindow;

var RaApp = GObject.registerClass(class RaApp extends Gtk.Application {
    _init(props = {}) {
        props.applicationId = 'name.ptomato.RedesignedAdventure';
        super._init(props);
    }

    vfunc_activate() {
        if (!this.activeWindow) {
            this.add_window(new RaAppWindow());
            this.activeWindow.present();
        }

        super.vfunc_activate();
    }
});
