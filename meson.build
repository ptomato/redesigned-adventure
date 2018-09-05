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

install_data('name.ptomato.RedesignedAdventure', install_dir: 'bin')
