project('redesigned-adventure')

gnome = import('gnome')

resource = gnome.compile_resources('app', 'app.gresource.xml',
    gresource_bundle: true,
    install: true, install_dir: 'share/redesigned-adventure')

sources = [
    'app.js',
    'appWindow.js',
    'buttonGroup.js',
    'controlPanel.js',
    'main.js',
    'model.js',
]

install_data(sources)

subst = configuration_data()
subst.set('gjs', gjs.path())
subst.set('version', meson.project_version())
subst.set('prefix', get_option('prefix'))
configure_file(input: 'name.ptomato.RedesignedAdventure.in',
    output: 'name.ptomato.RedesignedAdventure',
    configuration: subst, install_dir: get_option('bindir'))
