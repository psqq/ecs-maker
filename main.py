import PySimpleGUI as sg
from enum import Enum, auto

print = sg.Print

tab1_layout = [
    [
        sg.Text('Project folder:'),
        sg.InputText(key="project_folder"),
        sg.FolderBrowse(target="project_folder")
    ],
    [
        sg.Text('Components file:'),
        sg.InputText(key="components_file"),
        sg.FileBrowse(target="components_file")
    ],
    [sg.Button('Load')]
]

tab2_layout = []

layout = [
    [sg.TabGroup([[sg.Tab('Paths', tab1_layout),
                   sg.Tab('Components', tab2_layout)]])],
]

window = sg.Window('My new window', layout)

def load_components(fn):
    if not fn:
        return
    with open(fn, "r") as f:
        print(f.read())

while True:
    event, values = window.read()
    print(event, values)
    if event is None:
        break
    if event == "Load":
        fn = values["components_file"]
        load_components(fn)
