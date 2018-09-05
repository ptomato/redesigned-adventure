const {Gio} = imports.gi;
const System = imports.system;

const resource = Gio.Resource.load('/app/share/redesigned-adventure/app.gresource');
Gio.resources_register(resource);

const {RaApp} = imports.app;

const theApp = new RaApp();
theApp.run([System.programInvocationName].concat(ARGV));
